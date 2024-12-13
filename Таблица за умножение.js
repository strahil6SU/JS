function multiplicationTable(input_number){
    let multiplication = 0;

    for(let i = 1; i <= 10; i++){
        multiplication = i * input_number;
        console.log(`${i} * ${input_number} = ${multiplication}`);
    }
}

multiplicationTable(7)