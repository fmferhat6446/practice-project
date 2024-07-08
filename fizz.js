


// const getFizzBizz = ( ) => {
//     for (let i = 1; i <=100; i++) {
//         if (i%3===0 && i%5===0) {
//             console.log("FizzBuzz");
//         }
        
//         else if (i%3===0) {
//             console.log("Fizz");
//         }

//         else if (i%5===0) {
//             console.log("Buzz");
//         }

//         else {
//             console.log(i);
//         }
//     }
// }

// getFizzBizz()


// const FizzBuzz = function fizzBuzz() {
    
//     for (let i = 1; i <=100; i++) {
//        if (i%3===0 && i%5===0) {
//         console.log("fizzBuzz");
//        }

//        else if (i%3===0) {
//         console.log(fizz);
//        }

//        else if (i%5===0) {
//         console.log(buzz);
//        }
        
//        else{
//         console.log(i);
//        }
//     }
// }

// FizzBuzz();


//practice1......................................

// let num = prompt("enter a number:")

// if (num%5 === 0) {
//     console.log(num, "is a multiple by 5");
// }

// else {
//     console.log(num, "is not a multiple by 5");
// }

//practice2.................................................


// let num2 = prompt ("enter a number")

// if (num2 >= 18) {
//     console.log("you are adult");
// }
// else {
//     console.log("you are not adult");
// }


//practice3..................................................


let score = prompt("enter your score (0-100):");
let grade;

if(score >=80 && score <=100){
    grade = "A";
}

else if(score >=60 && score <=79){
    grade = "B";
}

else if(score >=40 && score <=59){
    grade = "C";
}

else if(score >=33 && score <=39){
    grade = "D";
}

else{
   grade = "you are fail";

}

console.log("according to your scores, your grade was : ", grade);