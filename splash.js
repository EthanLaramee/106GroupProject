var currentScene = 0; 
/*  0 = splash
    1 = game
    2 = help
    else = customize
*/
var direction = 0; //used to tell which way player is facing in game
/*  0 = right
    1 = left
*/

//variables for customizing player
var shirtColor = color(255, 0, 0);
var pantsColor = color(0, 0, 255);
var hairColor = color(153, 92, 0);



//Khan button class
{
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
    text(this.label, this.x+20, this.y+this.height/4);
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
}

//Edited Khan button class for customization buttons
//(A smaller button with centered text)
{
var SmallButton = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 100;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

SmallButton.prototype.draw = function() {
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, TOP);
    text(this.label, this.x+50, this.y+this.height/4);
};

SmallButton.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

SmallButton.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
}


//Abel's Bitmoji Code
{
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
    text("AFV", bitmojiX-(bitSize/150*35), bitmojiY+(bitSize/150*100)); //text
};

var drawBitmoji = function(bitmojiX, bitmojiY, bitSize){
    drawHead(bitmojiX, bitmojiY, bitSize);
    drawFace(bitmojiX, bitmojiY, bitSize);
    drawBody(bitmojiX, bitmojiY, bitSize);
    drawShirt(bitmojiX, bitmojiY, bitSize);
};
}

//Ethan's Bitmoji Code
{
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

var bitmojiNeck = function(bitmojiX,bitmojiY,bitmojiSize){
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
var bitmojiJacket = function(bitmojiX,bitmojiY,bitmojiSize) {
    jacketSleeves(bitmojiX, bitmojiY, bitmojiSize);
    jacketChest(bitmojiX, bitmojiY, bitmojiSize);
    jacketHood(bitmojiX, bitmojiY, bitmojiSize);
};

var bitmojiHat = function(bitmojiX,bitmojiY,bitmojiSize) {
    hatShape(bitmojiX, bitmojiY, bitmojiSize);
    hatText(bitmojiX, bitmojiY, bitmojiSize);
};

var bitmojiFace = function(bitmojiX,bitmojiY,bitmojiSize) {
    bitmojiHeadShape(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiHair(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiEyes(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiEyebrows(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiNose(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiMouth(bitmojiX, bitmojiY, bitmojiSize);
};

var drawBitmojiEthan = function(bitmojiX,bitmojiY,bitmojiSize) {
    bitmojiFace(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiHat(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiJacket(bitmojiX, bitmojiY, bitmojiSize);
    bitmojiNeck(bitmojiX, bitmojiY, bitmojiSize);
};
}


//Defines game character with color changing options (right facing)
{
var rightMarioFace = function (xPos, yPos, size, hairColor) {
    noStroke();
    fill(255, 210, 160); //skin tone of character
    rect(xPos, yPos, 150*size/100, 125*size/100); //face
    rect(xPos + 50*size/100, yPos + 100*size/100, 25*size/100, 25*size/100); //chin
    rect(xPos - 25*size/100, yPos + 25*size/100, 25*size/100, 50*size/100); //ears
    rect(xPos + 150*size/100, yPos + 25*size/100, 50*size/100, 50*size/100); //nose
    rect(xPos + 200*size/100, yPos + 50*size/100, 25*size/100, 25*size/100);
    fill(hairColor); //hair color of character
    rect(xPos + 100*size/100, yPos + 75*size/100, 100*size/100,25*size/100); //mustache
    rect(xPos + 125*size/100, yPos + 50*size/100, 25*size/100, 25*size/100);
    rect(xPos - 25*size/100, yPos, 75*size/100, 25*size/100); //head hair
    rect(xPos - 50*size/100, yPos + 25*size/100, 25*size/100, 75*size/100); 
    rect(xPos - 25*size/100, yPos + 75*size/100, 25*size/100, 25*size/100);
    rect(xPos, yPos + 25*size/100, 25*size/100, 50*size/100); //sideburns
    rect(xPos + 25*size/100, yPos + 50*size/100, 25*size/100, 25*size/100);
    fill(0, 0, 0); //eye color of character
    rect(xPos + 100*size/100, yPos, 25*size/100, 50*size/100); //eyes
};

var rightMarioHat = function (xPos, yPos, size, shirtColor) {
    noStroke();
    fill(shirtColor);
    rect(xPos - 25*size/100, yPos - 25*size/100, 225*size/100, 25*size/100);
    rect(xPos, yPos - 50*size/100, 125*size/100, 25*size/100);
};

var rightMarioShirt = function (xPos, yPos, size, shirtColor) {
    noStroke();
    fill(shirtColor);
    rect(xPos - 25*size/100, yPos + 125*size/100, 25*size/100, 100*size/100); //left sleeve
    rect(xPos, yPos + 125*size/100, 25*size/100, 75*size/100);
    rect(xPos - 50*size/100, yPos + 150*size/100, 25*size/100, 50*size/100);
    rect(xPos - 75*size/100, yPos + 175*size/100, 25*size/100, 25*size/100);
    rect(xPos + 50*size/100, yPos + 125*size/100, 75*size/100, 50*size/100); //chest
    rect(xPos + 125*size/100, yPos + 150*size/100, 75*size/100, 50*size/100); //right sleeve
    rect(xPos + 200*size/100, yPos + 175*size/100, 25*size/100, 25*size/100);
    rect(xPos + 150*size/100, yPos + 200*size/100, 25*size/100, 25*size/100);
    rect(xPos + 125*size/100, yPos + 125*size/100, 50*size/100, 25*size/100);
};

var rightMarioJeans = function(xPos, yPos, size, pantColor) {
    noStroke();
    fill(pantColor);
    rect(xPos + 25*size/100, yPos + 125*size/100, 25*size/100, 75*size/100); //straps
    rect(xPos + 100*size/100, yPos + 125*size/100, 25*size/100, 75*size/100);
    rect(xPos + 50*size/100, yPos + 175*size/100, 50*size/100, 25*size/100);
    rect(xPos, yPos + 200*size/100, 150*size/100, 75*size/100); //legs
    rect(xPos + 25*size/100, yPos + 125*size/100, 25*size/100, 75*size/100);
    rect(xPos - 25*size/100, yPos + 250*size/100, 75*size/100, 50*size/100);
    rect(xPos + 100*size/100, yPos + 250*size/100, 75*size/100, 50*size/100);
    fill(255, 255, 0); //pants buttons
    rect(xPos + 25*size/100, yPos + 200*size/100, 25*size/100, 25*size/100);
    rect(xPos + 100*size/100, yPos + 200*size/100, 25*size/100, 25*size/100);
};

var rightMarioHands = function(xPos, yPos, size) {
    noStroke();
    fill(255, 210, 160); //skintone of character
    rect(xPos - 75*size/100, yPos + 200*size/100, 50*size/100, 75*size/100); //left hand
    rect(xPos - 25*size/100, yPos + 225*size/100, 25*size/100, 25*size/100);
    rect(xPos + 175*size/100, yPos + 200*size/100, 50*size/100, 75*size/100); //right hand
    rect(xPos + 150*size/100, yPos + 225*size/100, 25*size/100, 25*size/100);
};

var rightMarioShoes = function(xPos, yPos, size) {
    noStroke();
    fill(140, 75, 0);
    rect(xPos - 50*size/100, yPos + 300*size/100, 75*size/100, 50*size/100); //left shoe
    rect(xPos - 75*size/100, yPos + 325*size/100, 25*size/100, 25*size/100);
    rect(xPos + 125*size/100, yPos + 300*size/100, 75*size/100, 50*size/100); //right shoe
    rect(xPos + 200*size/100, yPos + 325*size/100, 25*size/100, 25*size/100);
};

var rightMario = function(xPos, yPos, size) {
    //NOTE: center of character is at back of neck
    rightMarioFace(xPos, yPos, size, hairColor);
    rightMarioHat(xPos, yPos, size, shirtColor);
    rightMarioShirt(xPos, yPos, size, shirtColor);
    rightMarioJeans(xPos, yPos, size, pantsColor);
    rightMarioHands(xPos, yPos, size);
    rightMarioShoes(xPos, yPos, size);
}; //combines character parts
} // rightMario(xPos, yPos, size)
{
var leftMarioFace = function (xPos, yPos, size) {
    noStroke();
    fill(255, 210, 160); //skin tone of character
    rect(xPos, yPos, 150*size/100, 125*size/100); //face
    //rect(xPos + 50*size/100, yPos + 100*size/100, 25*size/100, 25*size/100); //chin
    rect(xPos + 150*size/100, yPos + 25*size/100, 25*size/100, 50*size/100); //ears
    rect(xPos - 50*size/100, yPos + 25*size/100, 50*size/100, 50*size/100); //nose
    rect(xPos - 75*size/100, yPos + 50*size/100, 25*size/100, 25*size/100);
    fill(hairColor); //hair color of character
    rect(xPos + -50*size/100, yPos + 75*size/100, 100*size/100,25*size/100); //mustache
    rect(xPos, yPos + 50*size/100, 25*size/100, 25*size/100); //top mustache
    rect(xPos + 100*size/100, yPos, 75*size/100, 25*size/100); //head hair
    rect(xPos + 175*size/100, yPos + 25*size/100, 25*size/100, 75*size/100); 
    rect(xPos + 150*size/100, yPos + 75*size/100, 25*size/100, 25*size/100);
    rect(xPos + 125*size/100, yPos + 25*size/100, 25*size/100, 50*size/100); //sideburns
    rect(xPos + 100*size/100, yPos + 50*size/100, 25*size/100, 25*size/100);
    fill(0, 0, 0); //eye color of character
    rect(xPos + 25*size/100, yPos, 25*size/100, 50*size/100); //eyes
};

var leftMarioHat = function (xPos, yPos, size) {
    noStroke();
    fill(shirtColor);
    rect(xPos - 50*size/100, yPos - 25*size/100, 225*size/100, 25*size/100);
    rect(xPos + 25*size/100, yPos - 50*size/100, 125*size/100, 25*size/100);
};

var leftMarioShirt = function (xPos, yPos, size) {
    noStroke();
    fill(shirtColor);
    rect(xPos - 25*size/100, yPos + 125*size/100, 25*size/100, 100*size/100); //left sleeve
    rect(xPos, yPos + 125*size/100, 25*size/100, 75*size/100);
    rect(xPos - 50*size/100, yPos + 150*size/100, 25*size/100, 50*size/100);
    rect(xPos - 75*size/100, yPos + 175*size/100, 25*size/100, 25*size/100);
    rect(xPos + 50*size/100, yPos + 125*size/100, 75*size/100, 50*size/100); //chest
    rect(xPos + 125*size/100, yPos + 150*size/100, 75*size/100, 50*size/100); //right sleeve
    rect(xPos + 200*size/100, yPos + 175*size/100, 25*size/100, 25*size/100);
    rect(xPos + 150*size/100, yPos + 200*size/100, 25*size/100, 25*size/100);
    rect(xPos + 125*size/100, yPos + 125*size/100, 50*size/100, 25*size/100);
};

var leftMarioJeans = function(xPos, yPos, size) {
    noStroke();
    fill(pantsColor);
    rect(xPos + 25*size/100, yPos + 125*size/100, 25*size/100, 75*size/100); //straps
    rect(xPos + 100*size/100, yPos + 125*size/100, 25*size/100, 75*size/100);
    rect(xPos + 50*size/100, yPos + 175*size/100, 50*size/100, 25*size/100);
    rect(xPos, yPos + 200*size/100, 150*size/100, 75*size/100); //legs
    rect(xPos + 25*size/100, yPos + 125*size/100, 25*size/100, 75*size/100);
    rect(xPos - 25*size/100, yPos + 250*size/100, 75*size/100, 50*size/100);
    rect(xPos + 100*size/100, yPos + 250*size/100, 75*size/100, 50*size/100);
    fill(255, 255, 0); //pant buttons
    rect(xPos + 25*size/100, yPos + 200*size/100, 25*size/100, 25*size/100);
    rect(xPos + 100*size/100, yPos + 200*size/100, 25*size/100, 25*size/100);
};

var leftMarioHands = function(xPos, yPos, size) {
    fill(255, 210, 160); //skintone of character
    rect(xPos - 75*size/100, yPos + 200*size/100, 50*size/100, 75*size/100); //left hand
    rect(xPos - 25*size/100, yPos + 225*size/100, 25*size/100, 25*size/100);
    rect(xPos + 175*size/100, yPos + 200*size/100, 50*size/100, 75*size/100); //right hand
    rect(xPos + 150*size/100, yPos + 225*size/100, 25*size/100, 25*size/100);
};

var leftMarioShoes = function(xPos, yPos, size) {
    noStroke();
    fill(140, 75, 0);
    rect(xPos - 50*size/100, yPos + 300*size/100, 75*size/100, 50*size/100); //left shoe
    rect(xPos - 75*size/100, yPos + 325*size/100, 25*size/100, 25*size/100);
    rect(xPos + 125*size/100, yPos + 300*size/100, 75*size/100, 50*size/100); //right shoe
    rect(xPos + 200*size/100, yPos + 325*size/100, 25*size/100, 25*size/100);
};

var leftMario = function(xPos, yPos, size) {
    //NOTE: center of character is at back of neck
    leftMarioFace(xPos, yPos, size);
    leftMarioHat(xPos, yPos, size);
    leftMarioShirt(xPos, yPos, size);
    leftMarioJeans(xPos, yPos, size);
    leftMarioHands(xPos, yPos, size);
    leftMarioShoes(xPos, yPos, size);
}; //combines character parts
} // leftMario(xPos, yPos, size)


//Defines arrow shape, which is resizable (used on help screen)
var virticalArrow = function(xPos, yPos, size) {
    noStroke();
    fill(0, 0, 0);
    triangle(xPos - 82*size/100, yPos + 100*size/100, xPos - 70*size/100, yPos + 120*size/100*size/100, xPos - 58*size/100, yPos + 100*size/100);
    rect(xPos - 74*size/100, yPos + 80*size/100,8*size/100,25*size/100);
};


//Defines coin used to earn points in the game
var gameCoin = function(xPos, yPos, size) {
    noStroke();
    fill(255, 230, 0);
    ellipse(xPos, yPos, 50*size/100, 50*size/100); //outer rim of coin
    fill(250, 255, 0);
    ellipse(xPos, yPos, 45*size/100, 45*size/100); //inner part of coin
    fill(0, 0, 0);
    textSize(35*size/100);
    text("$",xPos - 9*size/100, yPos - 21*size/100); //text shown on top of coin
};
/*for some reason coin only works after using buttons on splash screen, otherwise the text will be outside of it*/

//Defines barrel that user must avoid, otherwise will lose a life.
var gameBarrel = function(xPos, yPos, size) {
    
    stroke(0, 0, 0);
    fill(158, 87, 0);
    rect(xPos, yPos, 90*size/100, 60*size/100, 20*size/100);
    line(xPos + 6*size/100, yPos + 5*size/100, xPos + 83*size/100, yPos + 5*size/100);
    line(xPos + 2*size/100, yPos + 15*size/100, xPos + 89*size/100, yPos + 15*size/100);
    line(xPos + 1*size/100, yPos + 30*size/100, xPos + 89*size/100, yPos + 30*size/100);
    line(xPos + 2*size/100, yPos + 45*size/100, xPos + 89*size/100, yPos + 45*size/100);
    line(xPos + 6*size/100, yPos + 55*size/100, xPos + 85*size/100, yPos + 55*size/100);
    noStroke();
    textSize(40*size/100);
    fill(255, 0, 0);
    text("TNT",xPos + 6*size/100, yPos + 6*size/100, 90*size/100, 60*size/100);
};

//Defines heart that user can collect as an extra life in the game.
var lifeHeart = function(xPos, yPos, size) {
    image(getImage("cute/Heart"), xPos, yPos, 50*size/100, 65*size/100);
};


//Defines the different types of clouds that will move across the sky
var cloudType1 = function(xPos, yPos) {
    noStroke();
    fill(255, 255, 255);
    ellipse(xPos, yPos,80,50);
    ellipse(xPos - 37, yPos + 6,40,33);
    ellipse(xPos + 38, yPos + 10,45,25);
};

var cloudType2 = function(xPos, yPos) {
    noStroke();
    fill(255, 255, 255);
    ellipse(xPos + 100, yPos + 100,70,40);
    ellipse(xPos + 70, yPos + 95,44,26);
    ellipse(xPos + 130, yPos + 104,44,26);
};

var cloudType3 = function(xPos, yPos) {
    noStroke();
    fill(255, 255, 255);
    ellipse(xPos + 181, yPos + 30,90,30);
    ellipse(xPos + 139, yPos + 35,35,18);
    ellipse(xPos + 193, yPos + 19,40,20);
    ellipse(xPos + 207, yPos + 38,44,20);
};



var gameScreen = function() {
    background(174, 236, 245); //sky color
    cloudType1(100,100);
    cloudType2(150,65); //at somepoint I want to make the clouds move across the screen
    cloudType3(125,40);
    for (var i = 0; i < 10; i++) {
        image(getImage("cute/StoneBlock"), -20 + 55*i, 357, 60, 50); //stone floor
    }
    image(getImage("cute/WallBlockTall"),-45,280,70,116); //left wall
    image(getImage("cute/WallBlockTall"),375,280,70,116); //right wall
    //walls will act as bounds to our character later on
};


var gameOverHome = new Button({
    x: 280,
    y: 100,
    label: "HOME",
    onClick: function() {
        currentScene = 0;
    }
});

var gameOverRetry = new Button({
    
});

var gameOverScreen = function() {
    
};



//The buttons used in the Customize Screen
{
//Home button to change from CUSTOMIZE screen to SPLASH screen
var customizeHomeButton = new Button({
    x: 280,
    y: 5,
    label: "RETURN",
    onClick: function() {
        currentScene = 0;
    }
});

var redShirtButton = new SmallButton({
    x: 20,
    y: 195,
    label: "RED",
    onClick: function() {
        shirtColor = color(255, 0, 0);
    }
});

var greenShirtButton = new SmallButton({
    x: 20,
    y: 260,
    label: "GREEN",
    onClick: function() {
        shirtColor = color(20, 168, 0);
    }
});

var blackShirtButton = new SmallButton({
    x: 20,
    y: 325,
    label: "BLACK",
    onClick: function() {
        shirtColor = color(0, 0, 0);
    }
});

var bluePantsButton = new SmallButton({
    x: 150,
    y: 195,
    label: "BLUE",
    onClick: function() {
        pantsColor = color(0, 0, 255);
    }
});

var tanPantsButton = new SmallButton({
    x: 150,
    y: 260,
    label: "TAN",
    onClick: function() {
        pantsColor = color(194, 142, 0);
    }
});

var blackPantsButton = new SmallButton({
    x: 150,
    y: 325,
    label: "BLACK",
    onClick: function() {
        pantsColor = color(0, 0, 0);
    }
});

var brownHairButton = new SmallButton({
    x: 280,
    y: 195,
    label: "BROWN",
    onClick: function() {
        hairColor = color(153, 92, 0);
    }
});

var blondeHairButton = new SmallButton({
    x: 280,
    y: 260,
    label: "BLONDE",
    onClick: function() {
        hairColor = color(214, 200, 45);
    }
});

var blackHairButton = new SmallButton({
    x: 280,
    y: 325,
    label: "BLACK",
    onClick: function() {
        hairColor = color(0, 0, 0);
    }
});
}

var customizeScreen = function() {
    background(174, 236, 245);
    rightMario(108,30,31);
    textSize(21);
    fill(0, 0, 0);
    text("Shirt",10,155,120,40);
    text("Pants",140,155,120,40);
    text("Hair",270,155,120,40);
    noStroke();
    fill(shirtColor);
    rect(10,180,120,210);
    fill(pantsColor);
    rect(140,180,120,210);
    fill(hairColor);
    rect(270,180,120,210);
    customizeHomeButton.draw();
    redShirtButton.draw();
    greenShirtButton.draw();
    blackShirtButton.draw();
    bluePantsButton.draw();
    tanPantsButton.draw();
    blackPantsButton.draw();
    brownHairButton.draw();
    blondeHairButton.draw();
    blackHairButton.draw();
    
};


//Home button to change from HELP screen to SPLASH screen
var helpHomeButton = new Button({
    x: 65,
    y: 320,
    label: "RETURN",
    onClick: function() {
        currentScene = 0;
    }
});

var helpScreen = function() {
    background(255, 158, 143);
    noStroke();
    fill(255, 255, 255);
    rect(15,65,250,315,5);
    fill(0, 0, 0);
    textSize(30);
    text("HOW TO PLAY:",20,15);
    textSize(15);
    text("Using the arrow keys on your keyboard avoid the falling barrels and collect the coins. For every coin you collect you earn 5 points, but if you hit a barrel you will lose a life. Be careful, because you only have 3 lives, along with some extra lives. When you lose all of your lives the game will end and you will have the option to retry or return to the menu.", 30,75,230,195);
    virticalArrow(400,90,100);
    rightMario(305,255,35);
    gameCoin(330,125,100);
    helpHomeButton.draw();
};



//start button to change from SPLASH to GAME screen
var startButton = new Button({
    x: 125,
    y: 225,
    label: "START",
    onClick: function() {
        currentScene = 1;
    }
});

//help button to change from SPLASH to HELP screen
var helpButton = new Button({
    x: 125,
    y: 280,
    label: "HELP",
    onClick: function() {
        currentScene = 2;
    }
});

//customize button to change from SPLASH to CUSTOIZE screen
var customizeButton = new Button({
    x: 125,
    y: 335,
    label:"CUSTOMIZE",
    onClick: function() {
        currentScene = 3;
    }
});


var splash = function() {
    noStroke();
    background(150, 0, 0);
    textSize(35);
    fill(255, 255, 255);
    text("Barrel Dodger", 90, 10);
    noStroke();
    rect(0,221,width,height);
    drawBitmoji(60, 280, 84);
    drawBitmojiEthan(340, 301, 61);
    startButton.draw();
    helpButton.draw();
    customizeButton.draw();
};


mouseClicked = function() {
    if (currentScene === 0) {//if the current scene is splash make startButton clickable
        startButton.handleMouseClick();
        helpButton.handleMouseClick();
        customizeButton.handleMouseClick();
    }
    else if (currentScene === 2) {
        helpHomeButton.handleMouseClick();
    }
    else if (currentScene === 3) {
        customizeHomeButton.handleMouseClick();
        redShirtButton.handleMouseClick();
        greenShirtButton.handleMouseClick();
        blackShirtButton.handleMouseClick();
        bluePantsButton.handleMouseClick();
        tanPantsButton.handleMouseClick();
        blackPantsButton.handleMouseClick();
        brownHairButton.handleMouseClick();
        blondeHairButton.handleMouseClick();
        blackHairButton.handleMouseClick();
    }
};





//defines Coin constructor for "coins"
{
var Coin = function(x, y) {
    this.x = x;
    this.y = y;
};

Coin.prototype.draw = function() {
    gameCoin(this.x, this.y, 50);
};
}

//defines Lives constructor for "extraLives"
{
var Lives = function(x, y) {
    this.x = x;
    this.y = y;
};

Lives.prototype.draw = function() {
    lifeHeart(this.x, this.y, 50);
};
}

//defines Barrel constructor for "barrels"
{
var Barrel = function(x, y) {
    this.x = x;
    this.y = y;
};

Barrel.prototype.draw = function() {
    gameBarrel(this.x, this.y, 75);
};
}




var possibleCoins = 10;
var coins = [];
var extraLives = [];
var barrels = [];
var speed = []; //used later in game to make barrels fall faster and harder for player
var currentLives = 3;

for (var i = 0; i < possibleCoins; i++) {
    coins.push(new Coin(random(30,370),(i * -225)));
    extraLives.push(new Lives(random(30, 370),(-800 - 500 * i * i)));//by using i*i we make the hearts spread further apart, so you get less extra lives later on in the game making it harder
    barrels.push(new Barrel(random(30,370),(i * -300)));
    speed.push(round(random(1,2)));
}






//define game character using objects
{
var PlayerCharacter = function(x, y, size) {
    this.x = x;
    this.y = y;
    this.score = 0;
    this.size = size;
    this.speed = 1;
    this.currentLives = 3;
}; //PlayerCharcater class cuntion

PlayerCharacter.prototype.draw = function() {
    this.x = constrain(this.x, 35, 340);
    if (direction === 0) {
        rightMario(this.x, this.y, this.size);
    }
    else {
        leftMario(this.x, this.y, this.size);
    }
};

PlayerCharacter.prototype.left = function() {
    this.x -= this.speed;
};

PlayerCharacter.prototype.right = function() {
    this.x += this.speed;
};


PlayerCharacter.prototype.checkForCoinGrab = function (coins) {
    if (coins.x > this.x - 11 && coins.x < this.x + 34 && coins.y < this.y + 26 && coins.y > this. y - 34) {
        this.score += 5;
        coins.x = 600;
    } //When hit, player gains 5 points from score and moves off screen
};

PlayerCharacter.prototype.checkForBarrelGrab = function (barrels) {  
    if (barrels.x > (this.x - 11) && barrels.x < (this.x + 34) && barrels.y < (this.y + 26) && barrels.y > (this.y - 34)) {
        this.score -= 10;
        currentLives -= 1;
        barrels.x = 600;
    } //When hit, player loses 10 points, loses 1 life, and moves off screen
};

PlayerCharacter.prototype.checkForExtraLifeGrab = function (extraLives) {  
    if (extraLives.x > this.x - 11 && extraLives.x < this.x + 34 && extraLives.y < this.y + 26 && extraLives.y > this.y - 34) {
        currentLives += 1;
        extraLives.x = 600;
    } //collects, moves off screen, and gives extra live to "currentLives" variable
};


}

var player = new PlayerCharacter(200,330,15); //Game Character




//Character's position in game
var splashRollerXPos = [0,110,250,-150];


draw = function() {
    if (currentScene === 0) {
        splash();
        for (var i = 0; i < 4; i++) {
            splashRollerXPos[i] += 1;
            if (splashRollerXPos[i] === 430) {
                splashRollerXPos[i] = -120;
            }
        }
        rightMario(splashRollerXPos[0], 85, 32);
        gameCoin(splashRollerXPos[1] + 50, 135, 220);
        gameBarrel(splashRollerXPos[2], 94, 130);
        image(getImage("space/healthheart"),splashRollerXPos[3], 85, 100, 100);
    }
    else if (currentScene === 1) {
        gameScreen();
        if (keyIsPressed && keyCode === RIGHT) {
            direction = 0;
            player.right();
        }  
        else if (keyIsPressed && keyCode === LEFT) {
            direction = 1;
            player.left();
        }
        /*
        else if (keyIsPressed && keyCode === 16 && (keyCode === LEFT || keyCode === RIGHT)) {
            player.speed = 2;
        }
        else if (keyReleased && keyCode === 16) {
                player.speed = 1;
        }
        */
        
        player.draw();
        
        for (var j = 0; j < possibleCoins; j++) {
            coins[j].draw();
            player.checkForCoinGrab(coins[j]);
            barrels[j].draw();
            player.checkForBarrelGrab(barrels[j]);
            extraLives[j].draw();
            player.checkForExtraLifeGrab(extraLives[j]);
            if (extraLives[j].y > 350) {
                extraLives[j].y = 350; //extra lives do not fall off of the screen, they stop
            }
            if (barrels[3].y > 450) {
                barrels[j].y += 1.5 * speed[j];
                coins[j].y += 1;
                extraLives[j].y += 1;
            }
            else {
                barrels[j].y += speed[j];
                coins[j].y += 1;
                extraLives[j].y += 1;
            }
        }
        
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(0, 0, width, 30);
        noStroke();
        textSize(20);
        fill(0, 0, 0);
        text("Score: " + player.score, 30, 3);
        text("Lives: ", 175, 3);
        for (var k = 0; k < currentLives; k++) {
            lifeHeart(235 + 26 * k, -2, 50);
        }
        if (currentLives === 0) {
            currentScene = 4;
        }
    }
    else if (currentScene ===2) {
        helpScreen();
    }
    else if (currentScene === 3) {
        customizeScreen();
    }
    else if (currentScene === 4) {
        gameOverScreen();
    }
};

