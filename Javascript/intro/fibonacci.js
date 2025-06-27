function fibonacciGenerator(length) {
    let output = [];
    for (var i = 0; i < length; i++) {
        if (i === 0 || i === 1) {
            output.push(i);
        }else {
            output.push(output[i - 2] + output[i - 1]);
        }
    }
    return output;
}

let fibonacci = fibonacciGenerator(10);
console.log(fibonacci);