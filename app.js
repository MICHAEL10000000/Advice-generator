const dice = document.querySelector(".dice")
const adviceBox = document.querySelector(".advice")
const advicetext = adviceBox.querySelector("span")
const adviceNumber = document.querySelector(".number")



dice.addEventListener("click", () => {
    number = Math.floor(Math.random() *10)
    console.log(number)
    fetch("https://api.adviceslip.com/advice")
        .then(Response => Response.json())
        .then(data => {
            const {id, advice} = data.slip
            advicetext.innerHTML = advice
            adviceNumber.innerHTML = id 
        })
})