// var box1Element = document.getElementsByClassName('heading:first-child')
// console.log([box1Element])

// var headingElement = document.querySelector('div');




// headingElement.style = 'color: red'
// //hoặc
// headingElement.style.color= 'blue'
// console.log(headingElement)

// document.querySelector('h1').classList.add('first-heading')
// var he = document.querySelector('h2')
// he.classList.add('second-heading')
// he.classList.remove('test')

// h1Elements = document.querySelectorAll('h1')

// for(var i =0; i < h1Elements.length ; i++){
//     h1Elements[i].onclick = function(e){
//         console.log(e.target)
//     }
// }

// var selectvl;

// var selectElement = document.querySelector('input[type="text"]')

// selectElement.onkeyup= function(e){
//     selectvl = e.target.value
//     console.log(selectvl)
// }

// var aElements = document.links

// for (let i =0; i< aElements.length; i++){
//     aElements[i].onclick = function(e){
//         console.log()
//         if(!e.target.href.startsWith('https://www.facebook.com')){
//             e.preventDefault();
//         }
//     }
// }


// var ulElement = document.querySelector('ul')

// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }
// ulElement.onclick = function(e){
//     console.log(e.target)
// }

// document.querySelector('div').onclick = function(e){
//     console.log('div')
// }

var bt = document.querySelector('button')

function viec1(){
    console.log("viec 1")
}
function viec2(){
    console.log('viec 2')
}

bt.addEventListener('click', viec1)
bt.addEventListener('click', viec2)

setTimeout(function(){
    bt.removeEventListener('click',viec1)
},3000)
