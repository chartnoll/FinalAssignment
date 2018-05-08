const image1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAkFBMVEX+//kDAwMAAAD////+//j///v///3s7ejHx8R6encBAQP4+fQEBAP7/Petrav19vFKSkknJybY2dTf39wYGBaoqaVaWlkdHRw/"
const image2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADlCAMAAAAP8WnWAAAAkFBMVEX///8UFBQAAAD8/PwSEhKUlJR5eXkWFhadnZ2ioqIPDw8dHR34+Pjn5+dKSkomJiYwMDA2Nja6uro/Pz9CQkIrKyvz8/"
const image3 = "data:image/png;base64,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"
const image4 = "data:image/png;base64,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"
const image5 = "data:image/jpeg;base64,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"

const images = [
    image1,
    image2,
    image3,
    image4,
    image5
    ]

import {
    JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
    Body, Patch, Delete
} from 'routing-controllers'
import {Student, Evaluation} from './entities'
import User from '../users/entity'
import { io } from '../index'

@JsonController()
export class StudentController {

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

        if (!update.studentName) update.studentName = student.studentName
        if (!update.studentPicture) update.studentPicture = student.studentPicture
        if (!update.batchNumber) update.batchNumber = student.batchNumber

        const newStudent = await Student.merge(student, update).save()

        io.emit('action', {
            type: 'UPDATE_STUDENT',
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

@JsonController()
export class EvaluationController {

    @Authorized()
    @Post('/evaluations')
    @HttpCode(201)
    async createEvaluation(
        // @CurrentUser() user: User,
        @Body() newEvaluation//: GameUpdate
    ) {
        // console.log(newEvaluation, "Being created...")
        const entity = await Evaluation.create({
            studentId: newEvaluation.studentId,
            teacherId: 1,
            color: newEvaluation.color,
            remark: "houdy",
            date: newEvaluation.date
        }).save()
        console.log(entity, "Being created...")

        // const todayDate = today()

        return entity
    }

    // @Authorized()
    // @Get('/students/:id([0-9]+)')
    // getStudent(
    //     @Param('id') id: number
    // ) {
    //     console.log("Need to find student", id)
    //     return Student.findOneById(id)
    // }

    // @Authorized()
    // @Get('/batchStudents/:id([0-9]+)')
    // getBatchStudents(
    //     @Param('id') batchId: number
    // ) {
    //     console.log("Need to find students from batch", batchId)
    //     return Student.find({ batchNumber: batchId })
    // }

    @Authorized()
    @Get('/evaluations')
    getAllEvaluations() {
        console.log("Finding all evaluations")
        return Evaluation.find()
    }
}