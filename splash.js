var currentScene = 0;

//Khan button class    
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(255, 217, 0);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+25, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var drawHead = function(bitmojiX, bitmojiY, bitSize) {
    noStroke();
    //drawHead
    fill(141, 85, 36); //skin color
    ellipse(bitmojiX+(bitSize/150*0),bitmojiY+(bitSize/150*0), bitSize/150*83, bitSize/150*100); //head
    fill(255, 255, 255);
    arc(bitmojiX-(bitSize/150*43), bitmojiY+(bitSize/150*37), bitSize/150*28, bitSize/150*55, 0, 361); //left chisel
    arc(bitmojiX+(bitSize/150*43), bitmojiY+(bitSize/150*37), bitSize/150*28, bitSize/150*55, 0, 361); //right chisel
    fill(0, 0, 0);
    quad(bitmojiX-(bitSize/150*58), bitmojiY-(bitSize/150*5), bitmojiX-(bitSize/150*48), bitmojiY-(bitSize/150*38), bitmojiX-(bitSize/150*26), bitmojiY-(bitSize/150*47), bitmojiX-(bitSize/150*36), bitmojiY-(bitSize/150*1)); //left hair
    quad(bitmojiX+(bitSize/150*35), bitmojiY-(bitSize/150*3), bitmojiX+(bitSize/150*24), bitmojiY-(bitSize/150*51), bitmojiX+(bitSize/150*38), bitmojiY-(bitSize/150*45), bitmojiX+(bitSize/150*59), bitmojiY-(bitSize/150*7)); //right hair
    ellipse(bitmojiX-(bitSize/150*3), bitmojiY-(bitSize/150*38), bitSize/150*87, bitSize/150*38); //top hair
};

var drawFace = function(bitmojiX, bitmojiY, bitSize) {
    //drawFace
    noStroke();
    arc(bitmojiX-(bitSize/150*16),bitmojiY-(bitSize/150*8),bitSize/150*18,bitSize/150*6,171,360); //eyebrow right
    arc(bitmojiX+(bitSize/150*12),bitmojiY-(bitSize/150*8),bitSize/150*18,bitSize/150*6,171,360); //eyebrow left
    fill(255,255,255);
    ellipse(bitmojiX-(bitSize/150*15), bitmojiY+(bitSize/150*0), bitSize/150*15, bitSize/150*12); // left eye(white)
    ellipse(bitmojiX+(bitSize/150*12), bitmojiY+(bitSize/150*0), bitSize/150*15, bitSize/150*12); // right eye(white)
    fill(92, 64, 51);
    ellipse(bitmojiX+(bitSize/150*15), bitmojiY+(bitSize/150*0), bitSize/150*5, bitSize/150*5); //left pupil
    ellipse(bitmojiX-(bitSize/150*12), bitmojiY+(bitSize/150*0), bitSize/150*5, bitSize/150*5); //right pupil
    strokeWeight(bitSize/150*2);
    stroke(0, 0, 0);
    fill(141, 85, 36);
    bezier(bitmojiX-(bitSize/150*2),bitmojiY+(bitSize/150*3),bitmojiX+(bitSize/150*17),bitmojiY+(bitSize/150*23),bitmojiX-(bitSize/150*8),bitmojiY+(bitSize/150*22),bitmojiX-(bitSize/150*4),bitmojiY+(bitSize/150*15)); //nose
    fill(255, 255, 255); //teeth
    arc(bitmojiX+(bitSize/150*2),bitmojiY+(bitSize/150*28),bitSize/150*30,bitSize/150*13,1,180); //mouth
};

var drawBody = function(bitmojiX, bitmojiY, bitSize) {
    //drawBody
    strokeWeight(bitSize/150*1);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    quad(bitmojiX-(bitSize/150*61), bitmojiY+(bitSize/150*163), bitmojiX-(bitSize/150*57), bitmojiY+(bitSize/150*44), bitmojiX+(bitSize/150*3), bitmojiY+(bitSize/150*53),bitmojiX+(bitSize/150*7), bitmojiY+(bitSize/150*164)); //shirt
    quad(bitmojiX+(bitSize/150*68), bitmojiY+(bitSize/150*166), bitmojiX+(bitSize/150*63), bitmojiY+(bitSize/150*43), bitmojiX+(bitSize/150*3), bitmojiY+(bitSize/150*53),bitmojiX+(bitSize/150*5), bitmojiY+(bitSize/150*164)); //shirt
    noStroke();
    fill(255, 255, 255);
    quad(bitmojiX-(bitSize/150*29), bitmojiY+(bitSize/150*166), bitmojiX-(bitSize/150*28), bitmojiY+(bitSize/150*45), bitmojiX+(bitSize/150*4), bitmojiY+(bitSize/150*50),bitmojiX+(bitSize/150*7), bitmojiY+(bitSize/150*168)); //shirt
    quad(bitmojiX+(bitSize/150*37), bitmojiY+(bitSize/150*168), bitmojiX+(bitSize/150*38), bitmojiY+(bitSize/150*45), bitmojiX+(bitSize/150*3), bitmojiY+(bitSize/150*50),bitmojiX+(bitSize/150*3), bitmojiY+(bitSize/150*168)); //shirt
    fill(0, 0, 0);
    arc(bitmojiX+(bitSize/150*0), bitmojiY+(bitSize/150*47), bitSize/150*25, bitSize/150*10, 0, 180); //facial hair
};

var drawShirt = function(bitmojiX, bitmojiY, bitSize) {
    //drawShirt
    strokeWeight(bitSize/150*4);
    stroke(9, 135, 0);
    fill(255, 255, 255);
    arc(bitmojiX+(bitSize/150*1),bitmojiY+(bitSize/150*53),bitSize/150*43,bitSize/150*85,1,180); //green chain
    strokeWeight(bitSize/150*2);
    stroke(255, 166, 0);
    fill(255, 255, 255);
    arc(bitmojiX+(bitSize/150*1),bitmojiY+(bitSize/150*54),bitSize/150*29,bitSize/150*41,1,180); //gold chain
    noStroke();
    fill(255, 166, 0);
    rect(bitmojiX+(bitSize/150*0), bitmojiY+(bitSize/150*75), bitSize/150*2, bitSize/150*8); //cross Y
    rect(bitmojiX-(bitSize/150*3), bitmojiY+(bitSize/150*77), bitSize/150*8, bitSize/150*2); //cross X
    fill(0, 0, 0);
    textSize(bitSize/150*42);
    text("AFV", bitmojiX-(bitSize/150*35), bitmojiY+(bitSize/150*138)); //text
};

var drawBitmoji = function(bitmojiX, bitmojiY, bitSize){
    drawHead(bitmojiX, bitmojiY, bitSize);
    drawFace(bitmojiX, bitmojiY, bitSize);
    drawBody(bitmojiX, bitmojiY, bitSize);
    drawShirt(bitmojiX, bitmojiY, bitSize);
};

var bitmojiHeadShape = function (bitmojiX, bitmojiY,bitmojiSize) {
    noStroke();
    fill(255,224,189);//head skin tone
    ellipse(bitmojiX,bitmojiY,85*(bitmojiSize/100),bitmojiSize); //head
    fill(255, 255, 255); //white for cheek bones
    arc(bitmojiX-(45*bitmojiSize/100),bitmojiY+(32*bitmojiSize/100),30*(bitmojiSize/100),55*(bitmojiSize/100),0,360); //left cheek
    arc(bitmojiX+(45*bitmojiSize/100),bitmojiY+(32*bitmojiSize/100),(30*bitmojiSize/100),(55*bitmojiSize/100),0,360); //right cheek
    fill(255,224,189); //skin tone
    arc(bitmojiX-(30*bitmojiSize/100),bitmojiY+(23*bitmojiSize/100),(4*bitmojiSize/100),(25*bitmojiSize/100),0,360); //rounds out left cheek
    arc(bitmojiX+(30*bitmojiSize/100),bitmojiY+(23*bitmojiSize/100),(4*bitmojiSize/100),(25*bitmojiSize/100),0,360); //rounds out right cheek
    stroke(255, 255, 255); //white for jaw line
    strokeWeight(4*bitmojiSize/100);
    line(bitmojiX-(36*bitmojiSize/100),bitmojiY+(37*bitmojiSize/100),bitmojiX+(6*bitmojiSize/100),bitmojiY+(59*bitmojiSize/100)); //left jaw line
    line(bitmojiX-(6*bitmojiSize/100),bitmojiY+(59*bitmojiSize/100),bitmojiX+(36*bitmojiSize/100),bitmojiY+(37*bitmojiSize/100)); //right jaw line
};

var bitmojiHair = function(bitmojiX, bitmojiY,bitmojiSize) {
    noStroke();
    fill(150, 88, 0); //hair color
    quad(bitmojiX-(45*bitmojiSize/100),bitmojiY-(5*bitmojiSize/100),bitmojiX-(34*bitmojiSize/100),bitmojiY-(49*bitmojiSize/100),bitmojiX-(16*bitmojiSize/100),bitmojiY-(39*bitmojiSize/100),bitmojiX-(39*bitmojiSize/100),bitmojiY+(bitmojiSize/100)); //left side hair part
    quad(bitmojiX-(30*bitmojiSize/100),bitmojiY-(33*bitmojiSize/100),bitmojiX-(19*bitmojiSize/100),bitmojiY-(56*bitmojiSize/100),bitmojiX+(40*bitmojiSize/100),bitmojiY-(44*bitmojiSize/100),bitmojiX+(31*bitmojiSize/100),bitmojiY-(22*bitmojiSize/100)); //top hair part
    quad(bitmojiX+(37*bitmojiSize/100),bitmojiY-(44*bitmojiSize/100),bitmojiX+(45*bitmojiSize/100),bitmojiY-(2*bitmojiSize/100),bitmojiX+(37*bitmojiSize/100),bitmojiY+(1*bitmojiSize/100),bitmojiX+(26*bitmojiSize/100),bitmojiY-(25*bitmojiSize/100)); //right side hair part
};

var bitmojiEyes = function(bitmojiX, bitmojiY,bitmojiSize) {
    noStroke();
    fill(255, 255, 255); //eye color
    ellipse(bitmojiX-(15*bitmojiSize/100),bitmojiY+(2*bitmojiSize/100),(15*bitmojiSize/100),(10.5*bitmojiSize/100)); //left eye
    ellipse(bitmojiX+(15*bitmojiSize/100),bitmojiY+(2*bitmojiSize/100),(15*bitmojiSize/100),(10.5*bitmojiSize/100)); //right eye
    fill(134, 199, 219);
    ellipse(bitmojiX-(15*bitmojiSize/100),bitmojiY+(2*bitmojiSize/100),(8*bitmojiSize/100),(8*bitmojiSize/100)); //left blue eye color
    ellipse(bitmojiX+(15*bitmojiSize/100),bitmojiY+(2*bitmojiSize/100),(8*bitmojiSize/100),(8*bitmojiSize/100)); //right blue eye color
    fill(0, 0, 0);
    ellipse(bitmojiX-(15*bitmojiSize/100),bitmojiY+(2*bitmojiSize/100),(3*bitmojiSize/100),(3*bitmojiSize/100)); //left pupil
    ellipse(bitmojiX+(15*bitmojiSize/100),bitmojiY+(2*bitmojiSize/100),(3*bitmojiSize/100),(3*bitmojiSize/100)); //right pupil
};

var bitmojiEyebrows = function(bitmojiX,bitmojiY,bitmojiSize) {
    stroke(150,88,0); //eyebrow color
    strokeWeight(3*bitmojiSize/100); //eyebrow width
    line(bitmojiX-(25*bitmojiSize/100),bitmojiY-(5*bitmojiSize/100),bitmojiX-(19*bitmojiSize/100),bitmojiY-(8*bitmojiSize/100)); //left-left eyebrow
    line(bitmojiX-(19*bitmojiSize/100),bitmojiY-(8*bitmojiSize/100),bitmojiX-(7*bitmojiSize/100),bitmojiY-(6*bitmojiSize/100));//left-middle eyebrow
    line(bitmojiX+(7*bitmojiSize/100),bitmojiY-(6*bitmojiSize/100),bitmojiX+(19*bitmojiSize/100),bitmojiY-(8*bitmojiSize/100)); //right-middle eyebrow
    line(bitmojiX+(19*bitmojiSize/100),bitmojiY-(8*bitmojiSize/100),bitmojiX+(25*bitmojiSize/100),bitmojiY-(5*bitmojiSize/100)); //right-right eyebrow
};

var bitmojiNose = function(bitmojiX,bitmojiY,bitmojiSize) {
    noFill();
    stroke(54, 54, 54); //nose outline color, slightly darker than skin
    strokeWeight(1*bitmojiSize/100);
    bezier(bitmojiX+(bitmojiSize/100),bitmojiY+(5*bitmojiSize/100),bitmojiX+(21*bitmojiSize/100),bitmojiY+(27*bitmojiSize/100),bitmojiX-(8*bitmojiSize/100),bitmojiY+(25*bitmojiSize/100),bitmojiX-(4*bitmojiSize/100),bitmojiY+(20*bitmojiSize/100)); //Nose
};

var bitmojiMouth = function(bitmojiX,bitmojiY,bitmojiSize) {
    fill(255, 255, 255); //white for teeth
    stroke(252, 96, 145); //pink for lip color
    strokeWeight(2*bitmojiSize/100); //set lip thickness
    arc(bitmojiX,bitmojiY+(29*bitmojiSize/100),(30*bitmojiSize/100),(13*bitmojiSize/100),0,180); //mouth
    line(bitmojiX-(16*bitmojiSize/100),bitmojiY+(28*bitmojiSize/100),bitmojiX+(15*bitmojiSize/100),bitmojiY+(28*bitmojiSize/100)); //top of mouth
};

var hatShape = function(bitmojiX,bitmojiY,bitmojiSize) {
    strokeWeight(2*bitmojiSize/100);
    fill(102, 102, 102); //grey for hat
    stroke(102, 102, 102); //grey for top of hat
    arc(bitmojiX,bitmojiY-(44*bitmojiSize/100),(72*bitmojiSize/100),(50*bitmojiSize/100),-180,0);
    strokeWeight(30*bitmojiSize/100); //size of line width for fold of hat
    stroke(0, 0, 0); //black for bottom fold of hat
    line(bitmojiX-(37*bitmojiSize/100),bitmojiY-(30*bitmojiSize/100),bitmojiX+(36*bitmojiSize/100),bitmojiY-(30*bitmojiSize/100)); //bottom fold of hat
    strokeWeight(5*bitmojiSize/100);
    line(bitmojiX-(31*bitmojiSize/100),bitmojiY-(55*bitmojiSize/100),bitmojiX+(30*bitmojiSize/100),bitmojiY-(55*bitmojiSize/100)); //top line on hat
    strokeWeight(2.5*bitmojiSize/100);
    ellipse(bitmojiX,bitmojiY-(77*bitmojiSize/100),(20*bitmojiSize/100),(20*bitmojiSize/100)); //puff on top of hat
};

var hatText = function(bitmojiX,bitmojiY,bitmojiSize) {
    fill(255, 0, 0); //red for top text
    textSize(13*bitmojiSize/100);
    text("WWEWG",bitmojiX-(27*bitmojiSize/100),bitmojiY-(40*bitmojiSize/100),(100*bitmojiSize/100),(60*bitmojiSize/100)); //top text for hat
    fill(255, 255, 255); //white for bottom text
    textSize(10*bitmojiSize/100);
    text("HOCKEY",bitmojiX-(20*bitmojiSize/100),bitmojiY-(28*bitmojiSize/100),(100*bitmojiSize/100),(60*bitmojiSize/100)); //bottom text for hat
    };

var jacketHood = function(bitmojiX,bitmojiY,bitmojiSize) {
    noStroke();
    fill(97, 97, 97);
    arc(bitmojiX,bitmojiY+(65*bitmojiSize/100),(80*bitmojiSize/100),(28*bitmojiSize/100),-180,0); //hood of jacket
};

var neck = function(bitmojiX,bitmojiY,bitmojiSize){
    noStroke();
    fill(255, 224, 189); //skin tone
    rect(bitmojiX-(15*bitmojiSize/100),bitmojiY+(38*bitmojiSize/100),(29*bitmojiSize/100),(26*bitmojiSize/100)); //neck
    fill(255, 224, 187); //skin tone
    triangle(bitmojiX-(15*bitmojiSize/100),bitmojiY+(63*bitmojiSize/100),bitmojiX+(14*bitmojiSize/100),bitmojiY+(63*bitmojiSize/100),bitmojiX,bitmojiY+(81*bitmojiSize/100)); //v-neck from jacket
    strokeWeight(2*bitmojiSize/100);
    stroke(115, 115, 115); //grey for shadow
    arc(bitmojiX,bitmojiY+(46*bitmojiSize/100),(30*bitmojiSize/100),(5*bitmojiSize/100),0,180); //neck shadow
};

var jacketSleeves = function (bitmojiX, bitmojiY,bitmojiSize) {
    noStroke();
    fill(61, 61, 61);
    quad(bitmojiX-(49*bitmojiSize/100),bitmojiY+(64*bitmojiSize/100),bitmojiX-(74*bitmojiSize/100),bitmojiY+(80*bitmojiSize/100),bitmojiX-(78*bitmojiSize/100),bitmojiY+(114*bitmojiSize/100),bitmojiX-(49*bitmojiSize/100),bitmojiY+(114*bitmojiSize/100)); //left jacket sleeve
    quad(bitmojiX+(49*bitmojiSize/100),bitmojiY+(64*bitmojiSize/100),bitmojiX+(74*bitmojiSize/100),bitmojiY+(80*bitmojiSize/100),bitmojiX+(78*bitmojiSize/100),bitmojiY+(114*bitmojiSize/100),bitmojiX+(49*bitmojiSize/100),bitmojiY+(114*bitmojiSize/100)); //right jacket sleeve
};

var jacketChest = function (bitmojiX, bitmojiY,bitmojiSize) {
    fill(48, 48, 48); //black for jacket
    rect(bitmojiX-(50*bitmojiSize/100),bitmojiY+(64*bitmojiSize/100),(100*bitmojiSize/100),(50*bitmojiSize/100)); //jacket
    strokeWeight(3.5*bitmojiSize/100);
    stroke(255, 255, 255); //white for jacket strings
    line(bitmojiX-(24*bitmojiSize/100),bitmojiY+(66*bitmojiSize/100),bitmojiX-(24*bitmojiSize/100),bitmojiY+(100*bitmojiSize/100)); //left jacket string
    line(bitmojiX+(24*bitmojiSize/100),bitmojiY+(66*bitmojiSize/100),bitmojiX+(24*bitmojiSize/100),bitmojiY+(100*bitmojiSize/100)); //right jacket string
};


//combining functions for bitmoji into bigger pieces
var jacket = function(bitmojiX,bitmojiY,bitmojiSize) {
    jacketSleeves(bitmojiX, bitmojiY, bitmojiSize);
    jacketChest(bitmojiX, bitmojiY, bitmojiSize);
    jacketHood(bitmojiX, bitmojiY, bitmojiSize);
};

var hat = function(bitmojiX,bitmojiY,bitmojiSize) {
    hatShape(bitmojiX, bitmojiY, bitmojiSize);
    hatText(bitmojiX, bitmojiY, bitmojiSize);
};

var face = function(bitmojiX,bitmojiY,bitmojiSize) {
    bitmojiHeadShape(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiHair(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiEyes(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiEyebrows(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiNose(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiMouth(bitmojiX, bitmojiY, bitmojiSize);
};

var drawBitmojiEthan = function(bitmojiX,bitmojiY,bitmojiSize) {
    face(bitmojiX, bitmojiY, bitmojiSize);
    hat(bitmojiX, bitmojiY, bitmojiSize);
    jacket(bitmojiX, bitmojiY, bitmojiSize);
    neck(bitmojiX, bitmojiY, bitmojiSize);
};

var gameScreen = function() {
    background(0, 0, 0);
};

var helpScreen = function() {
    background(255, 0, 255);
};

//start button to change from splash to info screen
var startButton = new Button({
    x: 38,
    y: 330,
    label: "START",
    onClick: function() {
        currentScene = 1;
        gameScreen();
    }
});

var helpButton = new Button({
    x: 216,
    y: 330,
    label: "HELP",
    onClick: function() {
        currentScene = 2;
        helpScreen();
    }
});

var splash = function() {
    background(150, 0, 0);
    textSize(35);
    fill(255, 255, 255);
    text("Final Project", 110, 60);
    text('Click "Start" to play', 60, 315);
    noStroke();
    rect(15, 87, 371, 175);
    drawBitmoji(105, 136, 100);
    drawBitmojiEthan(285, 164, 82);
    startButton.draw();
    helpButton.draw();
};

mouseClicked = function() {
    if (currentScene === 0) //if the current scene is splash make startButton clickable
        {startButton.handleMouseClick();}
        {helpButton.handleMouseClick();}
};

splash();
