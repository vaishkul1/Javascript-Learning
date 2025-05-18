"use strict";    //treat all code as newer version of js

//alert("yoo");   // cant use. we are using nodejs not the browser
let state = null

/*
number, big int, string, boolean
null: standalone value. it is not undefined it is "Null"()Empty!
undefined
symbol: unique
 */

console.log(typeof null);   // o/p-> object
console.log(typeof undefined);  //o/p -> undefined
//******************************* 

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
