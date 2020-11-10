$(document).ready(function(){
   
    let form = $('form')

    form.on("submit", function(e){
       

        let product = {
            name : $("#product_name").val(),
            quantity : $("#quantity").val(),
            img : $("#img_url").val(),
            categorie :$("#categorieSelect").val(),
            prix :$("#price").val()
        }


        $.ajax
    ({
        type: "POST",
        url: 'http://localhost:3000/products',
        dataType: 'json',
        data: JSON.stringify(product),
        success: function () {

        alert("Thanks!"); 
        }
    })

    })
    
 
 })
 
 
 
 