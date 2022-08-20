const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassBtn = document.getElementById("pass-1-btn")
let secondPassBtn = document.getElementById("pass-2-btn")
let firstPass = ""
let secondPass = ""
let passLength = 15

function getRandomPass() {
    firstPass = generatePass()
    secondPass = generatePass()
    firstPassBtn.textContent = firstPass
    secondPassBtn.textContent = secondPass
}

function generatePass(){
    let pass = ""
    for (let i = 0; i < passLength; i++) {
        pass += characters[getRandomNumber()]
    }   
    return pass
}

function getRandomNumber(){
    return Math.floor(Math.random() * characters.length)
}

function copyPass1() {
    copyPass(firstPass)
}

function copyPass2() {
    copyPass(secondPass)
}

function copyPass(pass) {
     navigator.clipboard.writeText(pass)
}