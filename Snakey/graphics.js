//metody

//draw background
function drawBackground(){
    rectangle("#335599", 0, 0, canvas.width, canvas.height);
}

//draw grid
function drawGrid(){
    for(let i = 0; i < tileCountX; i++){
        for(let j = 0; j < tileCountY; j++){
            rectangle("#ffffff", tileSize * i, tileSize * j, tileSize - 1, tileSize - 1); //dat prec - 1 a zmiznu mriezky
        };
    };
}

//draw food
function drawFood(){
    ctx.drawImage(foodImage, foodPosX, foodPosY, tileSize - 1, tileSize - 1);   
}

//draw bonus
function drawBonus(){
    switch(bonusType){
        case 1:
            bonusImage.src = "./sprites/"+style+"/plus.png";
            ctx.drawImage(bonusImage, bonusPosX, bonusPosY, tileSize - 1, tileSize - 1); 
        break;

        case 2:
            bonusImage.src = "./sprites/"+style+"/minus.png";
            ctx.drawImage(bonusImage, bonusPosX, bonusPosY, tileSize - 1, tileSize - 1); 
        break;

        case 3:
            bonusImage.src = "./sprites/"+style+"/multiplier.png";
            ctx.drawImage(bonusImage, bonusPosX, bonusPosY, tileSize - 1, tileSize - 1); 
        break;

        case 4:
            bonusImage.src = "./sprites/"+style+"/reverse.png";
            ctx.drawImage(bonusImage, bonusPosX, bonusPosY, tileSize - 1, tileSize - 1); 
        break;
    }
         
}

function drawSurprise(){
    ctx.drawImage(surpriseImage, surprisePosX, surprisePosY, tileSize - 1, tileSize - 1); 
}

//draw body
function drawBody(){
    body.forEach(snakePart => ctx.drawImage(bodyImage, snakePart.x, snakePart.y, tileSize - 1, tileSize - 1));
}

//draw head
function drawHead(){
    ctx.drawImage(headImage, snakePosX, snakePosY, tileSize - 1, tileSize - 1);
}

//draw rectangle
function rectangle(color, x, y, width, height){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}



