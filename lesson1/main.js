// var fullname;
// fullname = 'trần mạnh hùng';
// alert(fullname)
// console.log(fullname) // thường đưuọc dùng để debug trong quá trình học

// confirm('xác nhận bạn đủ tuổi');// hiển thị ra hộp thoại thông báo ok hoặc cancel
// prompt('nhập tuổi của bạn:');//hộp thoại hiện ra và kèm theo ô input

// setTimeout(function(){
//     alert('mấy cháu tuổi tí')
// }, 1000) //hàm setTimeout có tác dụng thực thi đoạn code của bạn sau một khoảng time

// setInterval(function(){
//     alert('mấy cháu tuổi tí')
// }, 1000)//hàm này sẽ thực thi liên tục sau một khoảng thời gian

// var sosanh = 1> 2;
// if(sosanh == false){
//     console.log('ok bạn khôn')
// }
//********************************************************************** */
// // function 
//  function sum(a, b){
//      let resum = a + b;
//      return resum;
//  }

// alert(sum(1,2))

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// document.querySelector('a').onclick = function(){
//     alert('sang fb à')
// }

//************************************************************* */
//toán tử logic và câu lệnh điều kiện if
// let a = 1;
// let b = 2;
// let result = a< b && a < 0;
// console.log(result);

const a = 1 && NaN || 'Hi' && null && 100
const b = 1 || NaN && 'Hi' || null && 100

console.log(a,b)

// *************** chuỗi **********************************
 let fullName = 'hung dola ahihi \'đẹp trai vcl\'';

 console.log(fullName.indexOf("dola"));

    //cắt chuỗi
console.log(fullName.slice(5,9));
    //replace
console.log(fullName.replace('dola', 'trần'))
    //chuyển đổi chuỗi từ chữ hoa thành chữ thường
console.log(fullName.toLowerCase());
    //trim(), bỏ khoảng trắng thừa ở cả 2 đầu chuỗi
var n = [];
if(n.IsArray == true){
    console.log(true)
}
else{
    console.log(false)
}