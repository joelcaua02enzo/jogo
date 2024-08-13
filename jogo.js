let config={
    width: 1000,
    height: 500,
    scale: {autoCenter: Phaser.Scale.CENTER_BOTH},
    scene:{preload: preload,
        create: create,
        update: update,
    },
    physics:{
        default:"arcade",
        arcade:{
            gravity:{y:150},
        },
    },
};

let game = new Phaser.Game(config);

function preload (){
    preloadassts(this);
}
function create (){
    createassets(this);
}
function update (){
    updateGame(this);

}