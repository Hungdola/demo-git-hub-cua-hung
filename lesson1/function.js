// var numbers = [1,2,3,4,5]

// var tongnb = numbers.reduce()

// console.log(tongnb)


//Flat -    làm phẳng mảng từ depth Array - mảng sâu
// var depthArray = [1,2,[3,4],5,6,[7,8,9]]

// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem) //concat() dùng nối mảng
// }, [])
// console.log(flatArray )

//lấy ra những khóa học và đưa vào một mảng mới
var topics = [
    {
        topic: "frontend",
        courses: [
            {
                id: 1,
                title: "html, css"
            },
            {
                id: 2,
                title: "javascript"
            }
        ]
    },
    {
        topic: "backend",
        courses: [
            {
                id: 1,
                title: "php"
            },
            {
                id: 2,
                title: "nodejs"
            }
        ]
    }
]
var newCourses = topics.reduce(function(coursenew, topic){
    return coursenew.concat(topic.courses)
}, [])
 console.log(newCourses)

 var newCourses1 = newCourses.map(function(course1){
    return `<div>
                <p>id: ${course1.id}</p>
                <h2>${course1.title}</h2>
            </div>`
 })
 console.log(newCourses1.join(''))