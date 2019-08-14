// ATM
//Gosia

cashdispense= 300
pin=3456
balance =300

if (pin == 3456 && cashdispense <= balance){
    console.log("dispensing cash")
} else {
    console.log("not dispensing cash")
}