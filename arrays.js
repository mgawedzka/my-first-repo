let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];
console.log(coffeeOrder);

let favsongs = [
    "Silent Night",
    "All I want for Christmas is you",
    "We belong together"

];
console.log(favsongs);

coffeeOrder[1] = "Ann - Vanilla latte";
console.log(coffeeOrder);

console.log(coffeeOrder.length);

coffeeOrder.push("Donna - espresso");
console.log(coffeeOrder);

coffeeOrder.pop();
console.log(coffeeOrder);

let favwebs = [
    "www.google.com",
    "www.facebook.com",
    "www.bbc.co.uk"
];
console.log(favwebs);

favwebs.push("www.yahoo.com","www.instagram.com");
console.log(favwebs);

favwebs.pop();
console.log(favwebs);

favwebs.shift();
console.log(favwebs);

favwebs.unshift ("www.wearecodenation.com");
console.log(favwebs);

var removedItem = favwebs.splice(1, 3);
console.log(favwebs);

favwebs.slice();
console.log(favwebs);

var array1 = ['one', 'two', 'three', 'four', 'five'];
var array2 = ['six', 'seven', 'eight', 'nine', 'ten'];

console.log (array1.concat (array2));

let drinks = ["Coffee", "Coke", "Fanta", "Tea", "Juice"]

console.log(drinks)
console.log(drinks.length)

let pos = drinks.indexOf("Coke")
console.log(pos)

let drinkCheck = (drink)=> {
    if(drinks.indexOf(drink) != -1){
        console.log('Yes ${drink} is in the list')
    } else {
        console.log('Sorry ${drink} is not on the list')
    }
}
drinkCheck ("Fanta")
