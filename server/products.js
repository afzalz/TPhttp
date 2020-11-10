//===========Ancien Javascript==================

/*function Product(){

}


function getProduct(){
    return products;
}

function saveProduct(){
    
}

function updateProduct(){
    
}

function deleteProduct(){
    
}



Product.prototype.getProduct= getProduct;
Product.prototype.saveProduct= saveProduct;
Product.prototype.saveProduct= updateProduct;
Product.prototype.saveProduct= deleteProduct;*/


//===========Nouveau Javascript==================
const articles = require('./articles.json')

class Product{
    constructor(){
        this.products = articles
    }

    get getProduct(){
        return this.products;
    }


    saveProduct(products){
        const id = this.products.length + 1;
        this.products.push({id: id, ...products})
        this.products = this.products

    }
    updateProduct(){}
    deleteProduct(){}
}

module.exports = new Product()