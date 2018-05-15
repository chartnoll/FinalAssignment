
// export const sortEvaluations = (evaluations) => {
//     // return evaluations.map
//     return (sortedData)
// }

export const dateSlicer = (date) => {
    const year = date.slice(0,4)
    const month = date.slice(5, 7)
    const day = date.slice(8)
    return ({day, month, year})
}

const generateColor = (noReds, noAmbers, noGreens) => {
    let reds = 53
    let ambers = 28
    let greens = 19
    if (noReds === 0) reds = 0
    if (noAmbers === 0) ambers = 0
    if (noGreens === 0) greens = 0

    const randomNo = Math.floor(Math.random() * (reds + ambers + greens))
    if (randomNo <= reds ) return "red"
    if (randomNo <= (reds + ambers) ) return "amber"
    else return "green"
}

const selectRandomStudent = (evaluations) => {
    return evaluations[Math.floor(Math.random() * evaluations.length)].studentId
}

export const returnLuckyStudent = (students, evaluations) => {
    const luckyColor = generateColor(
        evaluations.filter( (evaluation) => evaluation.color === "red").length,
        evaluations.filter((evaluation) => evaluation.color === "amber").length,
        evaluations.filter((evaluation) => evaluation.color === "green").length
    )
    return students.filter( (student) => student.id ===
        selectRandomStudent(evaluations.filter((evaluation) =>
        evaluation.color == luckyColor)))[0]
}

export const evaluationCheck = (evaluation) => {
    if (valuation.date === new Date().toISOString().slice(0, 10)) return true
    else return false
}

/*THE FOLLOWING FUNCTIONS SUPPORT THE TEST FUNCTIONS*/

export const selectRandomStudentTester = (evaluations) => {
    return evaluations.filter((evaluation) => evaluation.studentId === selectRandomStudent(evaluations))[0].remark
}

export const returnLuckyStudentTester = (students, evaluations) => {
    if(returnLuckyStudent(students, evaluations).id >0 &&
        returnLuckyStudent(students, evaluations).id < 5) return true
    return false
}

export const accumRandomColor = () => {
    let red = 0
    let amber = 0
    let green = 0
    for( let i = 0; i < 1000; i++){
        const selectedColor = generateColor(1, 1, 1)
        switch (selectedColor){
            case "red":
                red ++
                break
            case "amber":
                amber ++
                break
            case "green":
                green ++
                break
            default:
                console.log("Hello!")
        }
    }
    if( red > 560 || red < 500) return red
    if (amber > 310 || amber < 250) return amber
    if (green > 220 || green < 160) return green
    return true
}