var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'php',
        coin: 400
    },
    {
        id: 5,
        name: 'reactJS',
        coin: 500
    }
]
var i =0;
function coinHandler(accumulator, currentValue){
    i++;
    var total = accumulator+currentValue.coin;
    return total;
}

var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin)

// function courseHandler(course, index) {
//     return {
//         id: course.id,
//         name: `Khóa học: ${course.name}`,
//         coin: course.coin,
//         coinText: `giá: ${course.coin}`,
//         index: index
//     };
// }

// var newCourses = courses.map(courseHandler);
// console.log(newCourses)



// var courses = [
//     1, 'hi', false, 8, undefined, '', NaN

// ]

// function courseHandler(course, index) {
//     return Boolean(course)
        
//     ;
// }

// var newCourses = courses.map(courseHandler);
// console.log(newCourses)