let names = ["a", "b","c","d","e", "f","g", "h", "i", "j", "k"]

const pickRandom = (i) => {
    return Math.floor (Math.random()*i)
}

//console.log(pickRandom(5))
let pickedName = names[pickRandom(11)]
console.log(pickedName)

const retrunNamer = (names)=> {
    let randomNumber = pickRandom (names.length)
    let pickedName = names[randomNumber]
    names.splice(randomNumber, 1)    
        return randomNumber)
}

console.log(returnName(names))