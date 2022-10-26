// function bmiCalculator (weight, height) {
//     let bmi = weight / (height * height);
//     let interpretation;
//     if(bmi > 24.9) {
//         interpretation = "Your BMI is " + bmi + ", so you are overweight.";
//     } else if(bmi <= 24.9 && bmi < 18.5) {
//         interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//     } else {
//         interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//     }
//     return interpretation;
// }

// console.log(bmiCalculator(80, 1.70));

// function isLeap(year) {
//     if(year % 4 === 0 && year % 100 !== 0){
//         return "Leap year.";
//     } else if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
//         return "Leap year.";
//     } else {
//         return "Not leap year."
//     }
// }

// console.log(isLeap(1600));


// let array = [];
// let cont = 1;

// function fizzBuzz() {
//     for(let i = 0; i < 100; i++) {
//         if(cont % 3 === 0 && cont % 5 === 0) {
//             array.push("FizzBuzz");
//         } else if(cont % 3 === 0) {
//             array.push("Fizz");
//         } else if(cont % 5 === 0) {
//             array.push("Buzz");
//         } else {
//             array.push(cont)
//         }
//         cont++
//     }
//     console.log(array)
// }

// fizzBuzz();



// let array = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// function whoIsPaying(names) {
//     console.log(names.length);
//     let randomNumber = Math.floor(Math.random()*names.length);
//     console.log(Math.random()*names.length)

//     return names[randomNumber];

// }

// console.log(whoIsPaying(array));

// function beer(count) {
//     while(count >= 0) {
//         if(count !== 0) {
//             console.log(count + " bottles of beer on the wall," + count + " bottles of beer. Take 1 down, pass it around," + (count - 1) + " bottles on the wall.");
//         } else {
//             console.log("No more bottles of beer on the wall,no more bottles of beer. Go to the storenad buy some more, 99 bottles of beer on the wall.");
//         }
//         count -= 1;
        
//     }
// }

// beer(100);

function fibonacci(number) {
    let array = [];
    if(number > 2){
        array = [0, 1];
        for(let index = 1; index < number; index++){
            let sum = array[index] + array[index - 1];
            console.log(index);
            array.push(sum);
        }
    } else if(number === 2) {
        array = [0, 1];
    } else if(number === 1){
        array = [0];
    } else {
        console.log(`Invalid number`)
    }
    return array;
}

console.log(fibonacci(15));