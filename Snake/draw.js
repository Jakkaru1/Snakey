//konstruktor
function draw(){
    drawBackground();
    drawGrid();
    drawFood();
    drawBonus();
    if (isThereSurprise === true){
        drawSurprise();
    };
    drawBody();
    drawHead();
}