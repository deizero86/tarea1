function setup(){
  
createCanvas(200, 200);
background(1225);
  
let c = color(255, 204, 0);
fill(c); 

let redValue = red(c); 
print(redValue); 
fill(redValue, 0, 0); 
rect(15, 20, 35, 60);
  
let d = color(124,252,0); 
fill(d);

let greenValue = green(d); 
print(greenValue); 
fill(0, greenValue, 0); 
rect(50, 20, 35, 60); 
  
let e = color(20, 75, 200); 
fill(e); 

let blueValue = blue(e); 
print(blueValue); 
fill(0, 0, blueValue); 
rect(85, 20, 35, 60); 

}
