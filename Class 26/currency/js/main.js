//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', makeAPICall)


function makeAPICall(){
    let currencyFrom = document.querySelector('#curr1').value.toLowerCase()
    let currencyTo = document.querySelector('#curr2').value.toLowerCase()
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom}/${currencyTo}.json`
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            document.querySelector('h2').innerText = data[`${currencyTo}`]
        })
        .catch(err=>{
            console.log(`error ${err}`)
        })
}