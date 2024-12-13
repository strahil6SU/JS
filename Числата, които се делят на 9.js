function numberDivide9(start, end){
    let sum = 0;

    for(let index = start; index <= end; index++){
        if(index % 9 == 0){
            console.log(index)
            sum += index;
        }
    }

    console.log("The sum =", sum)
}

numberDivide9(100, 200)