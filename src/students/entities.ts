import { BaseEntity, PrimaryGeneratedColumn, Column, Entity} from 'typeorm'
// import User from '../users/entity'
// import { MinLength, IsString, IsEmail } from 'class-validator';

@Entity()
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    studentName: string

    @Column('text')
    studentPicture: string

    @Column()
    batchNumber: number
}

@Entity()
export class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    studentId: number

    @Column('text')
    teacherId: number

    @Column('text')
    color: string

    @Column('text')
    remark: string

    @Column('date')
    date: Date
}