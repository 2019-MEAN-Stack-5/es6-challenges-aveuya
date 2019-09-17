// //assign fizzBuzz30 an arrow function that does not take any inputs.  
// fizzBuzz30 should output an array of all the numbers from
// //1 through 30 replacing numbers divisible by 3 with 'fizz', numbers 
// divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
// //'fizzbuzz'


let fizzBuzz30 = () => {
    var fizzBuzz = [];
    for (let num = 1; num < 30; num++) {
        if (num % 15 === 0) {
            fizzBuzz.push('fizzbuzz');
        } else if (num % 5 === 0) {
            fizzBuzz.push('buzz');
        } else if (num % 3 === 0) {
            fizzBuzz.push('fizz');
        } else {
            fizzBuzz.push(num);
        }
    }
    return fizzBuzz;
}

console.log(fizzBuzz30());





//Do not edit
module.exports = fizzBuzz30;