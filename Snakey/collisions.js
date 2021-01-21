//wall collision
function wallCollision(){
    if(snakePosX > canvas.width - tileSize){
        snakePosX = 0;
    }

    if(snakePosX < 0){
        snakePosX = canvas.width;
    }

    if(snakePosY > canvas.height - tileSize){
        snakePosY = 0;
    }

    if(snakePosY < 0){
        snakePosY = canvas.height;
    }
}

//body collision
function bodyCollision(){
    body.forEach((snakePart) => {
        if(snakePosX === snakePart.x && snakePosY === snakePart.y){
            gameOver();
        }
    });
}

//food collision
function foodCollision(){
    if(snakePosX === foodPosX && snakePosY === foodPosY){
        foodEvent();
        resetFood();
    }
}

//bonus collision
function bonusCollision(){
    if(snakePosX === bonusPosX && snakePosY === bonusPosY){
        bonusEvent();
        resetBonus(); 
    }
}

//surprise collision
function surpriseCollision(){
    if(snakePosX === surprisePosX && snakePosY === surprisePosY){
        if(isThereSurprise === true){surpriseEvent()}
        isThereSurprise = false;
        resetSurprise();
    }
}
