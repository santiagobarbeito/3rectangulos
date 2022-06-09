function setup() {
  velocidad_rotacion=0.005;
  transparency=125;
  specularity=255;
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  orbitControl();
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  background(0);
  ambientLight(240);
  directionalLight(255, 0, 0, 1, 0, 0);
  directionalLight(0, 255, 0, 0, 1, 0);
  directionalLight(0, 0, 255, 0, 0,1);
  
  push();
  specularMaterial(specularity);
  fill(255,0,0, transparency);
  translate(0,0,0);
  rotateZ(frameCount * -1.03*velocidad_rotacion);
  rotateX(frameCount * velocidad_rotacion);
  rotateY(frameCount * velocidad_rotacion);
  box(windowWidth/3, 0.05*width, 0.05*width); 
  pop();
  
  push();
  specularMaterial(specularity);
  fill(0,255,0, transparency);
  translate(0,0,0);
  rotateZ(frameCount * velocidad_rotacion);
  rotateX(frameCount * -velocidad_rotacion);
  rotateY(frameCount * velocidad_rotacion);
  box(windowWidth/3, 0.05*width, 0.05*width); 
  pop();
  
  push();
  specularMaterial(specularity);
  translate(0,0,0);
  fill(0,0,255 , transparency);
  rotateZ(frameCount * velocidad_rotacion);
  rotateX(frameCount * 2.17* velocidad_rotacion);
  rotateY(frameCount * velocidad_rotacion);
  box(windowWidth/3, 0.05*width, 0.05*width);
  pop();
}

class Module{
  constructor (x, y, z, unit, speed){
    this.x=x;
    this.y=y;
    this.z=z;
    this.speed=speed;
    this.unit=unit;
    this.xDir=1;
    this.yDir=1;
  }
}