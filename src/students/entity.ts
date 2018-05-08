import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'
// import User from '../users/entity'
// import { MinLength, IsString, IsEmail } from 'class-validator';

@Entity()
export default class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    studentName: string

    @Column('text')
    studentPicture: string

    @Column()
    batchNumber: number
}