function sumNumbers(input){
    let sum = 0;

    for(let i = 0; i < input.length; i++){
        let currentNumber = Number(input[i]);
        sum += currentNumber;
    }

    console.log("The sum = ", sum);
}

sumNumbers("1234")