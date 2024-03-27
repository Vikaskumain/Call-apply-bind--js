const obj={
    name:"vikas kumain",
    age:"25"
}

function Callmethods (){
    return "hello" + this.name
}
// console.log(Callmethods())

// this is the way how to write a call methods
function Callmethods2(){
  return ` Hy my name is ${this.name} and my age is ${this.age} and my addres is ${this.addres}`
}
const obj1={
    name:"vicky kumain",
    age:"25",
    addres:["pin","249181"]
}
const result = Callmethods2.call(obj1)
// console.log(result)


// Apply methods 02
// this is the one way to write a code with apply methods
function Applymethod (){
    return `hello how are you iam ${this.day}  and what about you ${this.your}  where are you right now ${this.location} `
}
 const day={
    day:"Good",
    your:"Iam also good thanks for asking me ",
    location:"Uttrakhand-Tehri Garhwal"
 }
 const result1=Applymethod.apply(day)
//  console.log(result1)


function sayHello(day,status){
    return "Hello " + this.name + " today is " + day + " and feel "+ status;
  }
  
  var obj2 = {name: "vikaskumain"};
  
   const result3=sayHello.apply(obj,["tuesday", "good"]);   
// console.log(result3)


// Bind Methods>>>

// Bind Methods>>>

function binds(...name){
    console.log( `hello my name is ${this.name} and whats your name ${name}`)
   
}
const bindss={
    name:"sumit"
}
const bindsmethos =binds.bind(bindss,"john","hllo")
bindsmethos()

  

