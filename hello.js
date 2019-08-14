console.log("Hello World")
console.log("Hello Stu")
console.log("Hello".length)
console.log("hello".toUpperCase());
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
console.log(" |  |")
console.log(" |  |")
console.log(" |  |")
console.log("-----------")
console.log(" |  |")
console.log("All Around the World".slice(7,8).toUpperCase())
console.log("All Around the World".charAt(7).toUpperCase())

console.log("All Around the World"[7].toUpperCase())

let town = "Cambridge"
console.log("You live in" + town)
town = "Manchester"
console.log("Stu lives in" + town)
town = "London"
console.log("Yvonne lives in " + town)
console.log(town.charAt(2))
let number1= 15
let number2= 20
let answer=number1 + number2
console.log(answer)
answer++
console.log(answer)

town = "Paris"
console.log(`Bob lives in ${town} and is happy`)
console.log("Bob lives in " + town + " and is happy")

let name ="Gosia"
let age = 33
let colour= "green"

console.log("My name is " + name + " and I am " + age + " years old and my favourite colour is " + colour) 

let breakfast = "eggs"
let lunch = "sandwich"
let dinner = "chicken"
let today = "eggs for breakfast, sandwich for lunch, chicken for dinner"
console.log (today)
let tomorrow = "orange for breakfast, spaghetti for lunch, fish for dinner"
console.log (tomorrow)

let birthdate = 1986
let todaydata = 2019
let numberofdays = (todaydata - birthdate) * 365

console.log (numberofdays) 

console.log("   |   | ")
console.log(" x | o | ")

let birthDate = new Date (1986, 5, 26)
let todayX = Date.now()
console.log(birthDate.getTime())
console.log(todayX)
let diff = todayX - birthDate.getTime()
console.log(diff)
let daydiff = diff/(1000 * 60 * 60 * 24)
console.log(daydiff)
let birthday = new Date (2020,05, 26)
let newDiff= birthday.getTime () - todayX
let newDayDiff = newDiff/(1000 * 60 * 60 * 24)
console.log(`It is ${newDayDiff} till your birthday :)`)

let christmasDate =new Date (2019, 12, 24)

//Practice If Statements
//Gosia Gawedzka 13/08/2019

let weather = "sunny"

if (weather == "sunny"){
    console.log("Better pack the sunscreen")
} else if (weather == "rain"){
    console.log("Better pack the rain stop thing")
}else{
    console.log("OK have a good day")
}

//Write a program with an age to see if someone is served in a pub
// or not (18 years old)

let legalage = 18
let customerage= 50

if (legalage == 18){
console.log ("Someone can be served in a pub")
} else if (customerage == 50){
    console.log("Can not be served in a pub")
}
    //Dodgy Stans Niteclub
    //Female <25 get in for free
    //Female > 35 £150
    //Male <25 £10
    //Male >35 £150
    //Anyone else £ 15

let gender = "female"
age = 19

if (gender == "female" && age < 25){
    console.log("You get in free")
}else if (gender == "female" && age > 35){
    console.log("£150")
}else if (gender == "male"&& age < 25){
    console.log ("£10")
}else if (gender =="male" && age > 35){
    console.log("£150")
}else{
    console.log("£15")
}

let day = "Saturday";
if (day == "Saturday" || day =="Sunday"){
    console.log("It's weekend!");
}
else {
    console.log("When's weekend?");
}

let security = "password"
characters = 8
if (security == "password" && characters < 8){
    console.log ("Password too short")
}
else if (security == "password" && characters >= 8){
    console.log("log the password")
}


let num = "divisable"

if (num == "divisable" ){
    console.log("This number is divisable by 3 and 5")
} 
else {
    console.log("This number is not divisable by 3 and 5")
}


num = "D3"

if (num == "D3"){
    console.log("Fizz")
}
else if (num =="D5"){
    console.log("Buzz")
}
else if (num =="D3&5"){
    console.log("Fizz buzz")
} else {
    console.log ("num")

}


let s= "Hello World"
let s1= s.split("")
console.log(s1)
let s2=s1.reverse()
console.log(s2)
let s3= s2.join("")
console.log(s3)

let reverse = "Hello World".split("").reverse().join("")
console.log(reverse)



