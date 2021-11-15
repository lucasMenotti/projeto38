var arco , planoFundo;
var imagemArco, imagemFlecha, imagem_balaoVerde, imagem_balaoVermelho, imagem_balaoRosa ,imagem_balaoAzul, imagemPlanoFundo,pontuacao = 0, grupoFlechas;
var bVermelho, bVerde, bAzul;

function preload(){
  
  imagemPlanoFundo = loadImage("background0.png");
  imagemFlecha = loadImage("arrow0.png");
  imagemArco = loadImage("bow0.png");
  imagem_balaoVermelho = loadImage("red_balloon0.png");
  imagem_balaoAzul = loadImage("blue_balloon0.png");
  imagem_balaoVerde = loadImage("green_balloon0.png");
  imagem_balaoRosa = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //criando plano de fundo background
  cenario = createSprite(0,0,400,400);
  cenario.addImage(imagemPlanoFundo);
  cenario.scale = 2.5
  
  // criando arco para lançar a fecha
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;
  
  bVermelho = new Group();
  bVerde = new Group();
  bAzul = new Group();
  grupoFlechas = new Group();
  
}

function draw() {
 background(0);
  // movendo o solo
    cenario.velocityX = -3 

    if (cenario.x < 0){
      cenario.x = cenario.width/2;
      
    }
  
  //movendo o arco
  arco.y = World.mouseY
  
   // lançar flecha quando tecla de espaço é pressionada
  if (keyDown("space")) {
    criarFlecha();
    
  }
  
  //criando balões contínuos
  var selecionar_balao = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (selecionar_balao == 1) {
      balaoVermelho();
    }else if (selecionar_balao == 2){
      balaoVerde();
    }else if (selecionar_balao == 3){
      balaoAzul();
    }else if (selecionar_balao == 4)
      balaoRosa();
  }
  drawSprites();
  textSize = 20;
  text ("pontuacao :"+pontuacao,270,30);
  
  
  
   if (grupoFlechas.isTouching(bVermelho)){
    bVermelho.destroyEach();
    grupoFlechas.destroyEach();
    pontuacao = pontuacao+1;
    
  }
   if (grupoFlechas.isTouching(bAzul)){
    bAzul.destroyEach();
    grupoFlechas.destroyEach();
    pontuacao = pontuacao+3;
   }
   if (grupoFlechas.isTouching(bVerde)){
    bVerde.destroyEach();
    grupoFlechas.destroyEach();
    pontuacao = pontuacao+2;
}
}

// Criando flechas para o arco
 function criarFlecha() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(imagemFlecha);
  arrow.x = 360;
  arrow.y=arco.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  grupoFlechas.add(arrow);
}


function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX = 0;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
  bVermelho.add(vermelho);

}

function balaoAzul() {
  var azul = createSprite(0,Math.round(random(20, 370)),10,10);
  azul.addImage(imagem_balaoAzul);
  azul.velocityX = 0;
  azul.lifetime = 150;
  azul.scale = 0.1;
  bAzul.add(azul);
}

function balaoVerde() {
  var verde = createSprite(0,Math.round(random(20, 370)),10,10);
  verde.addImage(imagem_balaoVerde);
  verde.velocityX = 0;
  verde.lifetime = 150;
  verde.scale = 0.1;
  bVerde.add(verde);
}

function balaoRosa() {
  var rosa = createSprite(0,Math.round(random(20, 370)),10,10);
  rosa.addImage(imagem_balaoRosa);
  rosa.velocityX = 0;
  rosa.lifetime = 150;
  rosa.scale = 0.1;
  
}
function Play(){
  camera.position.x = bVermelho.x;
}