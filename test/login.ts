import fetch from "node-fetch"

fetch("http://localhost:2500/login", {
    method: "POST",
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": "annie",
        "password": "pom"
    })
})
.then(data => data.json())
.then(console.log)