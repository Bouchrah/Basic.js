// // 1. Print 1 - 135

// // Write a program using JavaScript that will print all the numbers from 1 to 135.


let text ="";
for (let i = 1; i <=135; i++) {
  text += [i] + "br" ;
}

console.log(text)

// // #############################################################################################

// // 2. Print Odd Numbers 1 - 135

// // Write a program using JavaScript that will print all the odd numbers from 1 to 135.


// let text ="";
// for (let i = 1; i <=135; i+=2) {
//   text += [i]  +" " + "br";
// }
// console.log(text)




// // #############################################################################################

// // 3. Sum of Printed Numbers

// // Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// // Number is: 0 Sum: 0

// // Number is: 1 Sum: 1

// // Number is: 2 Sum: 3

// // Number is: 3 Sum: 6

// // ...

// // You are NOT allowed to use an array to solve this exercise.

// let text = "";

// let sum = "sum : "

// for (let i = 0; i < 10; i++) {
//   text += "The number is " + i +" "+ sum + (i+i) ;
// }

//  console.log(text)
// // #############################################################################################

// // 4. Print the elements of an array
// // Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen.
// //  Your program should work with arrays of all sizes.
// const X = [1,4,2,12];
// let text ="";
// for (let i = 0; i < X.length; i++) {
//   text += X[i] +"  " ;
// }
// console.log(text)


// // #############################################################################################

// // 5. Find Max

// // Given an array X, write a program that would find the maximum value of the array. 
// // Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.
// X = [2,-3,-1]
// console.log(Math.max(2,-3,-1));


// // #############################################################################################
// // 6. Get Average

// // Given an array X, write a program that will return the average value of all elements in the array.
// //  For example, for array X = [2,1,3] your output should be 2.

// // #############################################################################################

// // 7. Eliminate the Negatives

// // Given an array X, write a program that will remove all negative numbers and replace them with a 0.
// //  For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

//  const R = [2,-1,4,-3]
//   R.splice(1,3,0,4,0);
//  console.log(R)

// // #############################################################################################

// // 8. Number to String

// Write a program that takes an array of numbers and turns the negative values to strings.
//  For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].
// X = [1,-4,0,-1] ;
//   X.splice(1,3,"Turing",0,"Turing");
// console.log(X);