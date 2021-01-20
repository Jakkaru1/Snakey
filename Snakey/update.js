//konstruktor
function update(){
    snakePosX += snakeSpeed * velocityX;
    snakePosY += snakeSpeed * velocityY;

    wallCollision();
    bodyCollision();
    
    //body push
    body.push({x: snakePosX, y: snakePosY});
    
    //body slice forget earliest parts of snake
    body = body.slice(-1 * snakeLength);

    foodCollision();
    bonusCollision();
    surpriseCollision();
    winCondition();
    keyBoard = true;
}

//random food position
function resetFood(){
    //game over nowhere to go
    if(snakeLength === tileCountX * tileCountY){
        gameOver();
    }

    //random coordinates
    foodPosX = Math.floor(Math.random() * tileCountX) * tileSize;
    foodPosY = Math.floor(Math.random() * tileCountY) * tileSize;
    
    //dont spawn food on snakes head
    if(foodPosX === snakePosX && foodPosY === snakePosY){
        resetFood();
    }

    //dont spawn food on snakes body
    if(body.some((snakePart) => snakePart.x === foodPosX && snakePart.y === foodPosY)){
        resetFood();
    }   

    //dont spawn food on bonus
    if(foodPosX === bonusPosX && foodPosY === bonusPosY){
        resetFood();
    }

    //dont spawn food on surprise
    if(foodPosX === surprisePosX && foodPosY === surprisePosY){
        resetFood();
    }
}

//random bonus position
function resetBonus(){
    //random coordinates
    bonusPosX = Math.floor(Math.random() * tileCountX) * tileSize;
    bonusPosY = Math.floor(Math.random() * tileCountY) * tileSize;
    //random event from 1 to 3
    bonusRandomType();
    

    //dont spawn bonus on snakes head
    if(bonusPosX === snakePosX && bonusPosY === snakePosY){
        resetBonus();
    }

    //dont spawn bonus on snakes body
    if(body.some((snakePart) => snakePart.x === bonusPosX && snakePart.y === bonusPosY)){
        resetBonus();
    } 
    
    //dont spawn bonus on food
    if(bonusPosX === foodPosX && bonusPosY === foodPosY){
        resetBonus();
    }

    //dont spawn bonus on surprise
    if(bonusPosX === surprisePosX && bonusPosY === surprisePosY){
        resetBonus();
    }
      
}

//random surprise position
function resetSurprise(){
    //random coordinates
    surprisePosX = Math.floor(Math.random() * tileCountX) * tileSize;
    surprisePosY = Math.floor(Math.random() * tileCountY) * tileSize;
    //random event
    surpriseRandomType()

    //dont spawn surprise on snakes head
    if(surprisePosX === snakePosX && surprisePosY === snakePosY){
        resetSurprise();
    }

    //dont spawn surprise on snakes body
    if(body.some((snakePart) => snakePart.x === surprisePosX && snakePart.y === surprisePosY)){
        resetSurprise();
    }   

    //dont spawn surprise on food
    if(surprisePosX === foodPosX && surprisePosY === foodPosY){
        resetSurprise();
    }

    //dont spawn surprise on bonus
    if(surprisePosX === bonusPosX && surprisePosY === bonusPosY){
        resetSurprise();
    }
}





