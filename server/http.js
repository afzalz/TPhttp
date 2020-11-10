const http = require('http')
const { emit } = require('process')
const product = require('./products')
const { handleGetRequest, handlePostRequest } = require('./middleware')
const {requestSupported} = require("./router");
const server = http.createServer(function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*")

    if(request.method === "GET")
    {
        console.log("get")
        handleGetRequest(request, response)

    }

    else if(request.method === "POST")
    {
        console.log("post")
        handlePostRequest(request, response)

    }

    else if(request.method === "DELETE")
    {

    }

    else if(request.method === "UPDATE")
    {

    }

    else
    {

    }



    
    
})

server.listen(3000, function(){
    console.log('server started...')
})