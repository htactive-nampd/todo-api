import request from "request-promise"

request("http://localhost:2500/api/2", {
    headers: {
        "authorization" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFubmllIiwiaWF0IjoxNTg0ODk1NTUxfQ.zTulJO2mn1_SW2EM-DoWDWHw5SlO2MTt-q063dhYqDY'
    }
})
    .then(console.log)