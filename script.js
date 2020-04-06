function jokes(){  
          $.ajax({
              url: 'https://api.icndb.com/jokes/random',
              dataType: 'json',
              success: function(result){
                  var jokes = $("#resultat");
                $.each(result, function(index, elemento){
                    jokes.text(elemento.joke); 
                });
              },
              error: function(){
                  console.log("Error 404");
              }
          });
}

