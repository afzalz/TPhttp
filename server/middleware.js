const products = require("./products");
const { handleErrorRequest } = require('./middleError')
const {isExistGetPath, isExistPostPath} = require('./router');
const { RSA_NO_PADDING } = require("constants");
const path = require('path');
const { url } = require("inspector");
const url_product = "/products"
const url_addproduct = "/addproducts"


class Middleware{
    handleGetRequest(req, res){
        res.setHeader('Content-type', 'application/json; charset=UTF-8')
        res.statusCode = 200;
        if(isExistGetPath(res, req.url)){
            if(req.url === url_product)
            {

                res.end(JSON.stringify(products.getProduct))
            }else if(req.url === "/"){
                res.end(JSON.stringify({root: 'chemin racine'}));
            }

        }

        
    
        
    }

    handlePostRequest(req, res){
        res.statusCode = 201;
        if(isExistPostPath(res, req.url)){
            if(req.url === url_addproduct)
            {

                req.on('data', function(data){
                    products.saveProduct(JSON.parse(data))
                })
            }

        }

    }

}

module.exports = new Middleware()