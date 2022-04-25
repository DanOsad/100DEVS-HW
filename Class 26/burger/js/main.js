document.querySelector('button').addEventListener('click', makeAPICall)

function randomNum(){
    return Math.floor(Math.random()*333)
}

function makeAPICall(){
    let url = `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${randomNum()}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            document.querySelector('h2').innerText = `Burger of the day: ${data.name}`
            document.querySelector('#se').innerText = `Season: ${data.season}`
            document.querySelector('#ep').innerText = `Episode: ${data.episode}`
        })
        .catch(err=>{
            console.log(`error ${err}`)
        })
}