console.log('Conditional And Switch Case in JavaScript');

//Different operators
//a==b a is equal to b
//a>b  a is greater than b  
//a<b  a is lesser than b  
//a>=b  a is greater than or equal to b  
//a>=b  a is lesser than or equal to b  
//a===b a has same value and same type as b

//If statement
if (50>40){
    console.log("50 is greater than 40");
}
if (50<40){
    console.log("50 is lesser than 40");
}

//If else statement
let age=15;
// if (age>18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are not an adult");
// }

//Ternary operator to use if else
console.log(age==19? 'You are 19': 'You are not 19');


//else if statement
let salary=5000;
if (salary>4000) {
    console.log("Your salary greater than 4000");
} else if (salary<4000) {
    console.log("Your salary lesser than 4000");
}

//Switch Case
switch (age) {
    case 18:
        console.log("You are an adult");
        break;

    case 15:
        console.log("You are in teenage"); 
        break;   

    case 70:
        console.log("You are senior citizen");
        break;
    default:
        console.log("You are unknown age");
        break;
}