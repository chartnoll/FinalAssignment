import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'
// import User from '../users/entity'
// import { MinLength, IsString, IsEmail } from 'class-validator';

@Entity()
export default class Batch extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    batchNumber: number

    @Column('text')
    startDate: string

    @Column('text')
    endDate: string
}