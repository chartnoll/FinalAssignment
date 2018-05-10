import 'mocha'
import { equal } from 'assert'
import {
    returnLuckyStudentTester,
    dateSlicer, accumRandomColor, selectRandomStudentTester} from './logic'
import { studentData, sortedEvaluations, date, slicedDate, students} from './data'

// describe('sortEvaluations()', () => {
//     it('should return a sorted list', function () {
//         equal(sortEvaluations(studentData), sortedData)
//     })
// })

// describe('dateSlicer()', () => {
//     it('should return year month and day of a date for date 1', function () {
//         equal(dateSlicer(date[0]), slicedDate[0])
//     })

//     it('should return year month and day of a date for date 2', function () {
//         equal(dateSlicer(date[1]), slicedDate[1])
//     })
// })

describe('accumRandomColor()', () => {
    it('should return true if function is working properly', function () {
        equal(accumRandomColor(), true)
    })
})

describe('selectRandomStudent()', () => {
    it('should return "hello" is random student returned', function () {
        equal(selectRandomStudentTester(sortedEvaluations), "hello")
    })
})

describe('returnLuckyStudentTester()', () => {
    it('should return true for a lucky student', function () {
        equal(returnLuckyStudentTester(students, sortedEvaluations), true)
    })
})


// describe('testFunction()', () => {

//     it('should return 10', () => {

//         equal(testFunction(), "hello")
//     })
// })
// 
// describe('getRandomStudent()', () => {
//     it('should return -1 when the value is not present', function () {
//         getRandomStudent(1).should.equal(1)
//     })
// })
// 
// describe('getRandomStudent()', () => {
//     it('should return -1 when the value is not present', function () {
//         equal(getRandomStudent(1), 1)
//         equal(getRandomStudent(0), 0)
//     })
// })
