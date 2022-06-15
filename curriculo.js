$(document).ready(function(){
    $("#hide").click(function(){
      $(".pagebody").hide();
    });
    $("#show").click(function(){
      $(".pagebody").show();
    });
  });

$(document).ready(function(){
  $.get("http://127.0.0.1:3200/getProjectData", function(resultado){
      var objeto = JSON.parse(resultado);
      console.log(objeto);

      for(i = 0; i < Object.keys(objeto).length; i ++){
        $("#projetos").append("<p>" + objeto[i].Nome + " - <span style='font-weight: 900'>" + objeto[i].Data + "</span>" + "</p>");
      }
  });
});