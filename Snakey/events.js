//win condition
function winCondition(){
    if(score > 99){
        levelWin();
    }
}

//foodEvent() on foodCollision()
function foodEvent(){
    score = score + (1 * multiplier);
    snakeLength++;
    title.textContent = score;
    foodPopSound.play();
    //after eating food changes bonusType
    bonusRandomType();
    drawBonus();

    //after eating food theres a 25% chance to spawn surprise
    if(Math.floor(Math.random() * 4) + 1 === 1){
        isThereSurprise = true;
    }
}

//bonusEvent() on eventCollision()
function bonusEvent(){
    switch(bonusType){
        case 1:
            if(fps < 21){
                fps++;
                plusPopSound.play();
            }
            
        break;

        case 2:
            if(fps > 9){
                fps--;
                minusPopSound.play();
            } 
        break;

        case 3:
            multiplier++;
            multiplierPopSound.play();
        break;
    }
}

//surpriseEvent() on surpriseCollision()
function surpriseEvent(){
    switch(surpriseType){
        case 1:
            score = Math.round(score / 2);
            title.textContent = score;        
            surpriseBadSound.play();
        break;

        case 2:
            score = Math.round(score * 2);
            title.textContent = score;
            surpriseGoodSound.play();
        break;
    }
    
}

//randoms type of bonus
function bonusRandomType(){
    let temp = bonusType;
    bonusType = Math.floor(Math.random() * 3) + 1;
    if(temp === bonusType){
        bonusRandomType();
    }
}

//randoms type of surprise
function surpriseRandomType(){
    surpriseType = Math.floor(Math.random() * 2) + 1;
}

