import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch, Delete
} from 'routing-controllers'
import Student from './entity'
import User from '../users/entity'
// import { IsBoard, isValidTransition, calculateWinner, finished } from './logic'
import { Validate } from 'class-validator'
import { io } from '../index'

// class GameUpdate {

//     @Validate(IsBoard, {
//         message: 'Not a valid board'
//     })
//     board: Board
// }

@JsonController()
export default class StudentController {

    @Authorized()
    @Post('/students')
    @HttpCode(201)
    async createStudent(
        @CurrentUser() user: User,
        @Body() newStudent//: GameUpdate
    ) {
        console.log(newStudent, "Being created...")
        const entity = await Student.create({
            studentName: newStudent.studentName,
            studentPicture: newStudent.studentPicture,
            batchNumber: newStudent.batchNumber
        }).save()

        io.emit('action', {
            type: 'ADD_BATCH',
            payload: entity
        })

        return entity
    }

    @Authorized()
    @Patch('/students/:id([0-9]+)')
    async editStudent(
        // @CurrentUser() user: User,
        @Param('id') studentId: number,
        @Body() update//: GameUpdate
    ) {
        const student = await Student.findOneById(studentId)
        if (!student) throw new NotFoundError(`Student does not exist`)

        const newStudent = await Student.merge(student, update).save()

        console.log('3')

        io.emit('action', {
            type: 'NEW_STUDENT',
            payload: newStudent
        })

        return newStudent
    }

    @Authorized()
    @Delete('/students/:id([0-9]+)')
    async deleteStudent(
        @Param('id') studentId: number
    ) {
        console.log("Removing student with Id", studentId)
        const student = await Student.findOneById(studentId)
        if (!student) throw new NotFoundError(`Student does not exist`)
        Student.removeById(studentId)

        return `User with ID ${studentId} removed`
    }

    @Authorized()
    @Get('/students/:id([0-9]+)')
    getStudent(
        @Param('id') id: number
    ) {
        console.log("Need to find student", id)
        return Student.findOneById(id)
    }

    @Authorized()
    @Get('/batchStudents/:id([0-9]+)')
    getBatchStudents(
        @Param('id') batchId: number
    ) {
        console.log("Need to find students from batch", batchId)
        return Student.find({ batchNumber: batchId} )
    }

    @Authorized()
    @Get('/students')
    getAllStudents() {
        console.log("Finding all students")
        return Student.find()
    }
}