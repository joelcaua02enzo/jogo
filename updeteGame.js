function updateGame(cena){
//movimento do jogador
if(teclado.left.isDown){
    player.setVelocityX(-200);
    player.anims.play("left", true);
}else if(teclado.right.isDown){
    player.setVelocityX(200);
    player.anims.play("right", true);
}else{
    player.setVelocityX(0);
    player.anims.play("parado", true);
}//if(teclado.up.isDown){
//      player.setVelocityY(-200);
//  }
}