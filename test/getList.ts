import request from "request-promise"

request("http://localhost:2500/api/2")
    .then(console.log)