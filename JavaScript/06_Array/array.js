console.log("All About Arrays & Objects  in JS");

//two ways to create Array in JS
// let arr=[1,2,3,4,5,"John"];
let arr1=new Array(1,2,3,4,5,"John");
console.log(arr1);

let arr2=['1st element','2nd element','3rd elememt'];
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[arr2.length-1]);

//indexOf()
let students=['ABC','XYZ','GFR','HTJ'];
let a = students.indexOf('XYZ');
console.log(a);

//sort()
let age1=[65,78,88,98];
age1.sort();
console.log(age1);

//reverse()
let age2=[60,75,86,96];
age2.reverse();
console.log(age2);

//concat()
let color=['pink','purple','blue'];
let flower=['rose','lily','lotus'];
let colorflower=color.concat(flower);
console.log(colorflower);

//push()
// let city=['Mumbai','Delhi','New York'];
// city.push('London');
// console.log(city);

//Pop()
// let subject=['Cost','SE','CGA','JAVA','ES'];
// subject.pop('Cost');
// console.log(subject);

//Shift()
let subject=['Cost','SE','CGA','JAVA','ES'];
subject.shift();
console.log(subject);

//unshift()
let city=['Mumbai','Delhi','New York'];
city.unshift('London');
console.log(city);

//Two way create object in js

//1st way
// let user ={
//     name:'Tom',
//     age:19,
//     language:'JavaScript'
// }
// console.log(user);

//2nd way
let user=new Object();
user.name='john';
user.age=20;
user.language='Python';
console.log(user);
