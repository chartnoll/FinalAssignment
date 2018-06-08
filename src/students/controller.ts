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
        @Body() newStudent
    ) {
        console.log(newStudent, "Being created...")
        const entity = await Student.create({
            studentName: newStudent.studentName,
            studentPicture: newStudent.studentPicture,
            batchNumber: newStudent.batchNumber
        }).save()

        return entity
    }

    @Authorized()
    @Patch('/students/:id([0-9]+)')
    async editStudent(
        @Param('id') studentId: number,
        @Body() update
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
        await Student.removeById(studentId)
        return Student.find()
    }

    @Authorized()
    @Get('/students/:id([0-9]+)')
    getStudent(
        @Param('id') id: number
    ) {
        console.log("Need to find student", id)
        const evaluation = Evaluation.find({studentId: id})
        const student = Student.findOneById(id)
        return {student, evaluation}
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
        @Body() newEvaluation
    ) {
        const entity = await Evaluation.create({
            studentId: newEvaluation.studentId,
            teacherId: newEvaluation.teacherId,
            color: newEvaluation.color,
            remark: newEvaluation.remark,
            date: newEvaluation.date
        }).save()
        console.log(entity, "Being created...")

        return entity
    }

    @Authorized()
    @HttpCode(201)
    @Get('/evaluations')
    getAllEvaluations() {
        console.log("Finding all evaluations")
        return Evaluation.find()
    }
}