// var box1Element = document.getElementsByClassName('heading:first-child')
// console.log([box1Element])

var headingElement = document.querySelector('h1');

headingElement.title = 'khong hiểu'

headingElement.setAttribute('href','https://www.facebook.com/')


console.log(headingElement.getAttribute('href'))

console.log([headingElement])


headingElement.innerText = 'hung tran hoc lập trình'

var h1TagName = headingElement.localName

var h1NextElementSibling = headingElement.nextElementSibling

console.log(h1TagName)
console.log(h1NextElementSibling)