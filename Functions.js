/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
function myFunction( l1, l2) {
    return l1*l2;
}
console.log(area);
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
function crazysum(n){
    2=3, 2!=3
    if (n >= 3 && n <=2){
        return 5
    } else{
        return n+5 * 3
    }
}
console.log(crazysum)
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
function craxyDiff(n){
    if ( n <= 19 ){
        return ( 19 - n);
    }
    else {
        return (( n-19)*3);
    }
}
console.log(craxyDiff(14));
console.log(craxyDiff(30));
console.log(craxyDiff(7));
console.log(craxyDiff(50));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
function boundary(n){
    if ( n < 100 && n>20 ){
        return ( true);
    }
    else {
        return (n= 400);
    }
}
console.log(boundary(n))
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
function strivify(street){
    if (street===street + strive){
        console.log(streetstrive);
    } else {
        console.log(street)
    }
}
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
function check3and7(){
    if ( n < 100 && n>20 ){
        return ( true);
    }
    else {
        return (n= 400);
    }
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
function reverseString(s){
    return s.split("").reverse().join("");
}
console.log(reverseString)
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
let upperFirst = "My name is.";

  capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1) + " ";
  upperFirst += capitalizedWord;
  console.log(capitalizedWord);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
let cutString = 'Friday'
let result = cutString.substr(1, 5);

console.log(result)

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */
function giveMeRandom(n) {

    let arrWithNums = [];
    
    for(i = 0; i < n; i++) {
        arrWithNums.push(Math.floor(Math.random() * 10)); 
    }
    
    return arrWithNums;
}

console.log(giveMeRandom(4));
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
