import fetch from "node-fetch"

fetch("http://localhost:2500/register", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: "uuw",
        password: "owo"
    })
})
.then(data => data.json())
.then(console.log)