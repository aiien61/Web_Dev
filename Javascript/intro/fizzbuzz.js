let array = [];
let count = 1;

function fizzBuzz() {
    while (count < 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            array.push("FizzBuzz");
        }else if (count % 3 === 0) {
            array.push("Fizz");
        }else if (count % 5 === 0) {
            array.push("Buzz");
        }else {
            array.push(count)
        }
        count++;
    }
    console.log(array);
}

fizzBuzz();