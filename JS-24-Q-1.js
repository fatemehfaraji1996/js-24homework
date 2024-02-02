//? Question-3: Follow these steps:
//todo-1: Write a Factory function (function name must be: createPerson).
//todo-2: The createPerson factory function accepts three parameters: name, age, and profession
//todo-3: Define a method (method name must be: introduce) on the object. This method must return this structure: "Hi, my name is (name). I'm (age) years old and work as a (profession)."
//todo-4: Then display below outputs using the function createPerson with these parameters: (name: John Doe, age: 30, profession: Web Developer, or our personal information).
/**
 * Output: John Doe
 * Output: 30
 * Output: Web Developer
 * Output: Hi, my name is John Doe. I'm 30 years old and work as a Web Developer.
 *
 */

//!Answer:
// function makeUser(username, email) {
//     const user = {};
  
//     user.name = username;
//     user.emailAddress = email;
  
//     user.info = function () {
//       const { name, emailAddress } = this;
//       return `user ${name} has this email : ${emailAddress}`;
//     };
  
//     user.login = function () {
//       return `${this.name} has just logged in`;
//     };
  
//     user.email = function () {
//       return ` the user email is : ${this.emailAddress}`;
//     };
  
//     return user;
//   }
// console.log(makeUser("f","www","info")); 


// console.log("pp");

function createPerson(name,age,profession) {
  let objPerson={}
   objPerson.name=name
   objPerson.age=age
   objPerson.profession=profession
   objPerson.info=function(){
    const {name,age,profession}=this;
    return`hi im${this.name}im${this.age}yearse old and work as a ${this.profession}`
   }
return objPerson
}
console.log(createPerson('fatemeh','20','programer'));