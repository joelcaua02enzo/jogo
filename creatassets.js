/*cria e mostra os elementos do jogo na tela */
function createassets (cena){
    /*cenario*/
    cena.add.image( 500, 210, "fundo");
    cena.add.image( 500, 479, "plt");
    /*jogador*/
    //cena.add.image( 500, 435, "player");
    player=cena.physics.add.sprite( 500, 435, "player");
    player.setCollideWorldBounds(true);
    player.setBounce(0.3);
    plataforma = cena.physics.add.staticGroup();
    plataforma.create(500, 479,"plt");
    animacao(cena);
    player.anims.play("parado", true);
    /*esterla:coletaveo*/
    var pos = Phaser.Math.FloatBetween(100,900);
    star=cena.physics.add.sprite(pos, 0, "star");
    star.setBounce(0.3);
    //bomb
    bombs=cena.physics.add.group();
    /*colisor*/
    cena.physics.add.collider(player, plataforma);
    cena.physics.add.collider(star, plataforma);
    cena.physics.add.overlap(star, player, coletastar);
    cena.physics.add.collider(bombs, plataforma);
    cena.physics.add.collider(bombs, player, findejogo);
    //teclado
    teclado = cena.input.keyboard.createCursorKeys();
    /*HUD*/
    var configitxt={
        fonteSize:"30px"
    }
    pontostxt = cena.add.text(20,20,"pontos: 0",configitxt);

}
function findejogo(){
    player.setVisible(false);
    var configitxt={
        fonteSize:"30px"
    }
    player.cena.add.text(350,250,"fin de jogo",configitxt);
    player.cena.input.once("pointerdown",(player)=>{
     player.cena.star("reset");
    })
}
function coletastar(star,player){
let pos = Phaser.Math.FloatBetween(100,900);
star.setX(pos);
star.setY(-4);
star.setVelocityY(0);
pontos=pontos+6;
pontostxt.setText("pontos: "+ pontos);
//grador de bombs
let bomb = bombs.create(pos, 0, "bombs")
bomb.setBounce(1);
bomb.setCollideWorldBounds(true);
bomb.setVelocity(50);
}

function animacao(cena){
var parado = {
key:"parado",
frames: [{key:"player", frame:4}],
}
cena.anims.create(parado);
var left = {
    key:"left",
    frames: cena.anims.generateFrameNumbers("player",{start: 0,
     end: 3}),
     frameRate:8,
     repeat:-1
    }
    
    cena.anims.create(left);

    var right = {
        key:"right",
        frames: cena.anims.generateFrameNumbers("player",{start: 5,
         end: 8}),
         frameRate:8,
         repeat:-1
        }
        
        cena.anims.create(right);
}