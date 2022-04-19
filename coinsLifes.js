var extraLife = function(xPos, yPos, size) {
    image(getImage("cute/Heart"), xPos, yPos, 50*size/100, 65*size/100);
};

var coinX = [];
var coinY = [];
var lifeX = [];
var lifeY = [];
var speed = [];


for (var i = 0; i < 10; i++) {
    coinX.push(random(30, 370));
    coinY.push(i * -300);
    lifeX.push(random(30, 370));
    lifeY.push(i * -1000);
    speed.push(1);
}

//var yPos = 0;
draw = function() {
    if (currentScene === 0) {
        splash();
    }
    else {
        gameScreen();
        for (var a = 0; a < coinY.length; a++) {
            gameCoin(coinX[a], coinY[a], 50);
            extraLife(lifeX[a], lifeY[a], 50);
            coinY[a] += speed[a];
            lifeY[a] += speed[a];
            if (lifeY[a] > 350) {
                lifeY[a] = 350;
            }
        }
    }
};
