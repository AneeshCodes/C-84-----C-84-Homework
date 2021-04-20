var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
background_img = "racing.jpg"

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_X = 10;
car1_Y = 10;

car2_width = 120;
car2_height = 120;
car2_image = "car2.png";
car2_X = 10;
car2_Y = 100;

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_img;
    
    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = car1_image;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag,car1_X,car1_Y,car1_width,car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgtag,car2_X,car2_Y,car2_width,car2_height);
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e) {
    keyPressed = e.keyCode
    if(car1_X > 660){
        console.log('car1 won')
        document.getElementById('status').innerHTML = "Car 1 Won!!!"
    }
    if (keyPressed == '37') {
        left()
        console.log('left')
    }
    if (keyPressed == '38') {
        up()
        console.log('up')
    }
    if (keyPressed == '39') {
        right()
        console.log('right')
    }
    if (keyPressed == '40') {
        down()
        console.log('down')
    }

    if(car2_X > 660){
        console.log('car2 won')
        document.getElementById('status').innerHTML = "Car 2 Won!!!"
    }
    if (keyPressed == '65') {
        left2()
        console.log('left2')
    }
    if (keyPressed == '87') {
        up2()
        console.log('up2')
    }
    if (keyPressed == '68') {
        right2()
        console.log('right2')
    }
    if (keyPressed == '83') {
        down2()
        console.log('down2')
    }
}

function up() {
    if(car1_Y > 0) {
        car1_Y = car1_Y - 10;
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}

function down() {
    if(car1_Y < 510) {
        car1_Y = car1_Y + 10;
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}

function left() {
    if(car1_X > 0) {
        car1_X = car1_X - 10;
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}

function right() {
    if(car1_X < 700) {
        car1_X = car1_X + 10;
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}


function up2() {
    if(car2_Y > 0) {
        car2_Y = car2_Y - 10;
        uploadBackground()
        uploadcar2()
        uploadcar1()
    }
}

function down2() {
    if(car2_Y < 510) {
        car2_Y = car2_Y + 10;
        uploadBackground()
        uploadcar2()
        uploadcar1()
    }
}

function left2() {
    if(car2_X > 0) {
        car2_X = car2_X - 10;
        uploadBackground()
        uploadcar2()
        uploadcar1()
    }
}

function right2() {
    if(car2_X < 700) {
        car2_X = car2_X + 10;
        uploadBackground()
        uploadcar2()
        uploadcar1()
    }
}