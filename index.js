let count = 0
let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")

let userName = "Luis Molina"
let greeting = "Welcome back "
welcomeEl.textContent = greeting + userName

function increment() {
    count += 1
    console.log(count)
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    count = 0
    countEl.textContent = count
}
