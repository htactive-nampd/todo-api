import fetch from "node-fetch"

fetch("http://localhost:2500/api", {
    method: "POST",
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "listId": "1",
        "title": "Delphia Ward",
        "desc": "desc 27",
        "order": 60
    })
})