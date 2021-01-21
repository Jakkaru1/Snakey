let sounds = true;

let foodPopSound = new sound("./sounds/foodPop.mp3");
let multiplierPopSound = new sound("./sounds/multiplierPop.mp3");
let plusPopSound = new sound("./sounds/plusPop.mp3");
let minusPopSound = new sound("./sounds/minusPop.mp3");
let surpriseGoodSound = new sound("./sounds/surpriseGood.mp3");
let surpriseBadSound = new sound("./sounds/surpriseBad.mp3");


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}