/*const routerPathGet = []
const routerPathPost = []
const routerPathDelete = []
const routerPathUpdate= []

function Router(){}*/

const { request } = require('http');
const { handleErrorRequest } = require('./middleError')
const routerPathGet = ['/products']
const routerPathPost = ['/products']
const requestSupportedMethodV = ["POST", "GET", "DELETE"]


 /*class Router{
    constructor(){
        this.routerPathGet = []
        this.routerPathPost = []
        this.routerPathUpdate = []
        this.routerPathDelete = []
    }

    isExistGetPath(res, url){
        if(this.routerPathGet.indexOf(url))
        {
            return
        }
        

        else{
            handleErrorRequest(res, 404, '${req.url}')
     
         }
    }
}*/

function Router(){}

function requestSupportedMethod(res, method){
    if(requestSupportedMethodV.indexOf(url) !== -1){
        return true;

    }

}


function isExistGetPath(res, url){
    if(routerPathGet.indexOf(url) !== -1){
        return true;

    }
    handleErrorRequest(res, 404, `${url} n'existe pas`);
    
}


function isExistPostPath(res, url){
    if(routerPathPost.indexOf(url) !== -1){
        return true
    }
    else{
        handleErrorRequest(res, 404, `${url} n'existe pas`);
    }
}

Router.prototype.isExistGetPath = isExistGetPath
Router.prototype.isExistPostPath = isExistPostPath
Router.prototype.requestSupportedMethod = requestSupportedMethod

module.exports= new Router()
