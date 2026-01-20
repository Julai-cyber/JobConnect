$(document).ready(function () {
  
  $("#candidato").click(function () {
    $("#candidato").css("border", "2px solid #3498db");
    $("#empresa").css("border", "2px solid #e1e8ed");
    
    $("#campo-candidato").show();
    $("#campo-empresa").hide();
  });

  $("#empresa").click(function () {
    $("#empresa").css("border", "2px solid #3498db");
    $("#candidato").css("border", "2px solid #e1e8ed");
    
    $("#campo-empresa").show();
    $("#campo-candidato").hide();
  });

  
  let modalAtivo = null;

  // ☰ abrir menu (mobile)
  $("#menu, #btn-menu").click(function () {
   modalAtivo = $(".modal:visible").attr("id"); // guarda a tela atual
    $(".modal").hide();
    $("#areaMenu").show();
  });

  $("#botaoFechar").click(function () {
    $("#areaMenu").hide();
    
   if (modalAtivo) {
        $("#" + modalAtivo).show();
    }
  });

  $(".navLink").click(function (e) {
    e.preventDefault();
    let tela = $(this).data("modal");
    
    $(".modal").hide();
    $("#" + tela).show();

    $(".navItem").removeClass("active");
    $(this).parent().addClass("active");
    
    if ($(window).width() < 768) {
      $("#areaMenu").hide();
    }
  });
 
});
