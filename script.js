//...1 / create a variable called %carName% ,assing the value volvo to it,

let carName = "Volvo";
//output 
console.log(carName);//Volvo
//====================================================================================================


//...2 /On one single line, declare three variables with the following names and values:
let firstName = "jone";
let lastNamme = "Doe";
let age = 35;


//output demo
let concat = firstName.concat(" ", lastNamme, " ", age);
console.log(concat);//jone Doe 35
console.log("frist name: " + firstName + "\n" + "lastname :" + lastNamme + "\n" + "age :" + age + "\n")//fristnaem:jone, lastName:Doe, age:35

//===================================================================================================



//...3/ Use the correct assignment operator that will result in x being 50 (same as x = x * y). 
//type 1 like this
x = 50;
y = 5;
x *= y;
console.log(x) //250

// type 2 like this
let x1 = 50;
let y1 = 5;
let z = x1 *= y1;

//out put demo
console.log(z);//250

//======================================================================================================




//....4/ Use comments to describe the correct data type of the following variables:

//number
let length = 16;
console.log(typeof length); //number

//string
let lastName = "johnson";
console.log(typeof lastName);//string

//object
const X = {
    fristName: "John",
    lastName: "Doe"
};
console.log(typeof X)// object

//==========================================================================================================




//..5./.Execute the function named myFunction.
function myFunction() {
    console.log(alert("Hello World"))
    //or alert("hello world")
}
myFunction();
//hello world window alert

//===============================================================================================================




// ..6./Create an object called person with name = John, age = 50, Then, access the object to;

let person = {
    Name: "John",
    age: 50,

}
console.log(alert(person.Name+ " is " + person.age));
console.log(alert(` ${person.Name} is ${person.age}`))
//out put same 
//==============================================================================================================



//..7./The <button> element should do something when someone clicks on it. Try to fix it!

function clickbutton(){
    document.getElementById('demo').innerHTML = alert("button was clicked")
}

//==============================================================================================================



//8/...Array Related Question 
const car = ["Volvo", "jeep", "Mercedes"];
console.log(alert(car.length))//output:3
// Change the first item of Brand to "Ford".

const carBrand=["Volvo", "Jeep", "Mercedes"];
let Change = carBrand;
Change[0]="Ford";

console.log(alert(carBrand))


// =================================================================================================


// ...9/  Math Related Problems
// 1. Use the correct Math method to create a random number.
let x = Math.random();
console.log(x)//all tiem output random number ;

let y = Math.PI;
console.log(y);

// 2. Use the correct Math method to return the largest number of 10 and 20.

let Z = Math.max(10, 20);
console.log(Z)

// or 
let num_1 = 10; num_2 = 20;
let maxnum = Math.max(num_1, num_2);
console.log(maxnum);

//3.  Use the correct Math method to get the square root of 9.
let s = Math.sqrt(9);
console.log(s);

//===============================================================================================





//10. comparison operator related problems! 

// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
let num_x = 10;
let num_y = 5;

console.log(alert(num_x > num_y))

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let Age = 118;

let result = Age <= 19 ? alert("too young") : alert("Old enough")
console.log(result)