function sumNumbers(inputs) {
    var i =0;
    for(var number of inputs){
        if(typeof number !== 'number'){
            continue
            
        }
        i+=number;
    }
    return i;
}

console.log(sumNumbers([1, 2, function() {}, NaN]))
