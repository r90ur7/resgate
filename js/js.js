function start() { // inicio start()
  $("#inicio").hide();
  $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

  // variáveis do jogo
  var jogo = {};
  var TECLA = {
    W: 87,
    S: 83,
    D: 68
  }
  jogo.pressionou = [];
  // verifica se o usuário pressionou alguma tecla
$(document).keydown(function (e) { 
  jogo.pressionou[e.wich]=true;
});

$(document).keyup(function (e) {
  jogo.pressionou[e.wich]=false
});





  // game loop
  jogo.timer = setInterval(loop, 30);

  function loop() {
    movefundo();
    movejogador();
  } // fim loop()

  function movefundo() {
    esquerda = parseInt($('#fundoGame').css("background-position"));
    $('#fundoGame').css("background-position", esquerda - 1);
  } // fim movefundo()

  function movejogador(){
    if(jogo.pressionou[TECLA.W]){
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo - 10);
    }
  }
} // fim start()

