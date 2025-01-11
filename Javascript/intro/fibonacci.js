function fibonacciGenerator(n) {
    var output = [];
    for (var i = 0; i < n; i++) {
        if (i <= 1) {
            output.push(i);
        }else {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

var fibonacci = fibonacciGenerator(10);
console.log(fibonacci);