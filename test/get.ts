import request from "request-promise"

request("http://localhost:2500/api")
    .then(console.log)