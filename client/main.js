$(document).ready(function(){
   
   $.getJSON('http://localhost:3000/products', function(response) {
        for(i=0; i< response.articles.length; i++){
            $('.container').append('<h2>' + response.articles[i].name + 
            '</h2><li>' + response.articles[i].prix+ '$</li><li>Quantité: '+ response.articles[i].quantity+'</li>');
           
        }
      });    


})



