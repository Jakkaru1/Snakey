//keyboard interface
function keyDown(event){
    if(keyBoard === true){
        switch(event.key){
            case "ArrowUp":
                if(velocityY !== 1){
                    direction = "up";
                    velocityX = 0;
                    velocityY = -1;
                    headImage.src = "./sprites/"+style+"/up.png";
                    keyBoard = false;
                };
                break;

            case "ArrowDown":
                if(velocityY !== -1){
                    direction = "down";
                    velocityX = 0;
                    velocityY = 1;
                    headImage.src = "./sprites/"+style+"/down.png";
                    keyBoard = false;
                };
                break;

            case "ArrowLeft":
                if(velocityX !== 1){
                    direction = "left";
                    velocityX = -1;
                    velocityY = 0;
                    headImage.src = "./sprites/"+style+"/left.png";
                    keyBoard = false;
                };
                break;

            case "ArrowRight":
                if(velocityX !== -1){
                    direction = "right";
                    velocityX = 1;
                    velocityY = 0;
                    headImage.src = "./sprites/"+style+"/right.png";
                    keyBoard = false;
                };
                break;
        
            default:
                //restart game
                if(!gameIsRunning){
                    location.reload();
                }
                break;
        }
    }else{
        keyBoard = false;
    }
}