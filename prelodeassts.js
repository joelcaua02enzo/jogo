/* funçao responsavel pelo carregamento dos sprites */
function preloadassts(cena){
    console.log(cena);
    /*cenario*/
    cena.load.image("fundo", "./assets/fundo.png");
    cena.load.image("plt", "./assets/plataforma.png");
    /*player*/
    cena.load.spritesheet("player", "./assets/player.png",{
        frameWidth: 32,
        frameHeight: 48,
    });
    //coletavel
    cena.load.image("star", "./assets/star.png");
    //bombas
    cena.load.image("bombs", "./assets/bomb.png");
}