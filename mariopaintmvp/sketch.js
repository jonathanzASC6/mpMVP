function setup(){
createCanvas (500, 500);
background(255, 0, 0)
}

function draw(){
fill(value);
rect(25, 25, 50, 50);
triangle (150, 200, 250, 0, 350, 200)
}

function random(){
    for (let i = 0; i < 100; i++){ 
        let r = random(50);
        stroke(r * 5)
        line(50, i, 50 + r, i );
    }
}

function mouseDragged(){
    random(ellipse (mouseX, mouseY, mouseY, mouseY));
    value = value +5;
    if (value > 255){
        value = 0;
    }

}

