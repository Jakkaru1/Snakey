//keyboard interface
function keyDown(event){
    switch(event.key){
        case "ArrowUp":
            if(velocityY !== 1){
                direction = "up";
                velocityX = 0;
                velocityY = -1;
                headImage.src = "./sprites/"+style+"/up.png";
            };
            break;

        case "ArrowDown":
            if(velocityY !== -1){
                direction = "down";
                velocityX = 0;
                velocityY = 1;
                headImage.src = "./sprites/"+style+"/down.png";
            };
            break;

        case "ArrowLeft":
            if(velocityX !== 1){
                direction = "left";
                velocityX = -1;
                velocityY = 0;
                headImage.src = "./sprites/"+style+"/left.png";
            };
            break;

        case "ArrowRight":
            if(velocityX !== -1){
                direction = "right";
                velocityX = 1;
                velocityY = 0;
                headImage.src = "./sprites/"+style+"/right.png";
            };
            break;
        
        default:
            //restart game
            if(!gameIsRunning){
                location.reload();
            }
            break;
    }
}