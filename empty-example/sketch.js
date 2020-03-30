function setup() { // !!! replace void !!!
  createCanvas(400, 400); // !!!replace size(width, height); !!!!
}

function draw() { // !!! replace void !!!
  var cx = map(mouseX, 0, width, 0, 255); // !!! replace float !!!
  var cy = map(mouseY, 0, height, 0, 255); // !!! replace float !!!
  var nsize = width/8+cos(mouseY*PI/180)*width/16; // !!! replace float !!!
  // 基本型
  fill(cx,cy,150,50);
  circle(mouseX,mouseY,nsize);
}