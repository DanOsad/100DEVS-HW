document.querySelector('button').addEventListener('click', makeAPICall)


function makeAPICall(){
    let urlToBeShortened = document.querySelector('input').value.toLowerCase()
    const url = `https://gotiny.cc/api`
    let body = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: `${urlToBeShortened}` })
    }
    fetch(url, body)
        .then(res=>res.json())
        .then(data=>{
            let shortURL = `https://gotiny.cc/${data[0].code}`
            document.querySelector('h2').innerText = 'URL: '
            document.querySelector('#link').setAttribute('href', shortURL)
            document.querySelector('#link').innerText = shortURL
        })
        .catch(err=>{
            console.log(`error ${err}`)
        })
}