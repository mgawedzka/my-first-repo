//Practice Functions
//Gosia Gawedzka 13.08.2019


const reverseString = (s) =>{
return s.split("").reverse().join("")
}
console.log("Hello World")
console.log(reverseString("Helllo World"))

const addThreeNumbers = (num1, num2, num3) =>{
    console.log("I am adding your three numbers")
    return num1 + num2 + num3
}
const hello = () =>{
    console.log("Hello")
}

const displayName = (name)=>{
    console.log(`${name}`)
}
const displayGreeting = (name)=> {
    hello()
    displayName(name)
}
hello()

let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding){
        console.log("Stopping the grind");
        coffeeIsGrinding = false; 
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();

function hello2 (){
    console.log("Hello")
}
hello2 ()
displayName("Gosia")


const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal (200, 50447921);

let accnumber  =50449921;
const cashWithdrawal1 = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`)
}

const addUp = (num1, num2) => {
    return num1 + num2
}
addUp (7,3);
console.log(addUp(2,5))

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder("pineapple", "pepper")


const multi = (num1, num2) => {
    return num1 * num2;
}
console.log(multi (2, 3));