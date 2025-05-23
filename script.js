// !მიზანი : გამარჯობის თქმა

// function sayHello() {
//   alert("Hello World");
// }

// sayHello();

// function sayHelloToUser() {
//   let userName = prompt("შეიყვანეთ თქვენი სახელი");
//   console.log(`Hello ${userName}`);
// }

// function squareNumberOne() {
//   let numb1 = 10;
//   let squareNumber = numb1 * numb1;
//   return squareNumber;
// }

// function squareNumberTwo() {
//   let numb1 = 20;
//   return numb1 * numb1;
// }

// squareNumberOne();
// squareNumberTwo();

// console.log(squareNumberOne() * 10);

// function plusNumber(numberOne, numberTwo) {
//   return numberOne + numberTwo;
// }

// console.log(plusNumber(10, 20));

// !Class Work
// ? მიზანი - დაგვიბრუნოს 5 პიროვნების საშუალო ქულა

// function avarageNumber(num1, num2, num3, num4, num5) {
//   let sunNumber = num1 + num2 + num3 + num4 + num5;
//   let avarage = sunNumber / 5;
//   return avarage;
// }
// console.log(avarageNumber(4, 5, 1, 0, 10)); // return
// console.log(avarageNumber(10, 3, 2, 1, 6)); // return

// let groupOne = avarageNumber(4, 5, 1, 0, 10);
// let groupTwo = avarageNumber(10, 3, 2, 1, 6);

// if (groupOne > groupTwo) {
//   console.log("პირველი ჯგუფი წავიდეს ექსკურსიაზე");
// } else if (groupOne < groupTwo) {
//   console.log("პირველი ჯგუფი წავიდეს ექსკურსიაზე");
// } else {
//   console.log("ჩავატაროთ ახალი გამოცდა");
// }

// !გადაყვანა ნამბერების სტრინგებად და პირიქით

// let numb = "10";

// let newValue = Number(numb);
// let strValue = String(numb);

// console.log(typeof numb);
// console.log(typeof newValue);

let ourAge = Number(prompt("შეიყვანეთ თქვენი ასაკი"));

if (isNaN(ourAge)) {
  console.log("Thats was not a valid number");
} else {
  console.log(`your age is ${ourAge}`);
}
