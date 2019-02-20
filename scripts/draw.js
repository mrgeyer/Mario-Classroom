var h = 400;
var w = 675;
var paintColor = color(17, 0, 255);
var brushSize = 8;
var isDraw = 0;
var clear = true;
var type = false;
var typeCursorX = -1;
var typeCursorY = -1;
var letter = 'A';
var bs = 30; 	// brush size
var xh = 0.8; // exponent height
var exMode = 'off'; // exponent Mode
var exSize = 20; // exponentSize
var regTS = 40; // regular text size
var ts = regTS;	// text size
var backspace = false;




void setup() { 
  size(w, h);
}
/*
function setWH() {
	w = document.getElementById("wid").value;
	h = document.getElementById("hei").value;
	setup();
}
*/


void draw() {

	if (clear) {
		background(0,0,0);
		clear = false;
		typeCursorX = -1;
		typeCursorY = -1;
	}

    // red
    fill(250, 0, 0);
    rect(w-bs,0,bs,bs);
    

    // blue
    fill(51, 0, 255);
    rect(w-bs,bs,bs,bs);
    

    // yellow
    fill(255, 255, 0);
    rect(w-bs,2*bs,bs,bs);
    

    // green
    fill(0, 255, 38);
    rect(w-bs,3*bs,bs,bs);
    

    // purple
    fill(213, 0, 255);
    rect(w-bs,4*bs,bs,bs);
    
	// brushSize
	noStroke();
    fill(0,0,0);
    rect(w-bs,5*bs,bs,bs);
    rect(w-bs,6*bs,bs,bs);
    rect(w-bs,7*bs,bs,bs);
    fill(255,255,255);
    // +
    rect(w-.6*bs,5.4*bs,.2*bs,.6*bs);
    rect(w-.8*bs,5.6*bs,.6*bs,.2*bs);
    // -
    rect(w-.8*bs,7.4*bs,.6*bs,.2*bs);
    textSize(.8*bs);
    text(brushSize, w-.9*bs,7*bs);  

	//erasers
	stroke(0,0,0);
	fill(0,0,0);
	rect(w-bs,8*bs,bs,bs);
	fill(255,0,0);
	textSize(.8*bs);
	text("e", w-.9*bs, 8.8*bs);  
	text("E", w-.9*bs, 10*bs);  

	if (isDraw === 1) {
		noStroke();
		fill(paintColor);
		rect(mouseX-brushSize, mouseY-brushSize, brushSize, brushSize);
	}


	if (type) {
		fill(paintColor);
		textSize(ts);
		text(letter, typeCursorX, typeCursorY);
		textFont("Courier New");
		type = false;
		}
	
	if (backspace) {
		fill(color(0,0,0));
		rect(typeCursorX, typeCursorY, ts, ts);
		backspace = false;
		}


}


void keyPressed() {
	if (key == CODED) {
		if (keycode == BACKSPACE) {
			backspace = true;
			typeCursorX -= ts;
		}
	} else {
		if (key == '_') {
			typeCursorY = typeCursorY + ts*xh;

		} else if (key == '^') {
			typeCursorY = typeCursorY - ts*xh;

		} else {
			letter = key;
			type = true;
			if (typeCursorX === -1) {
				typeCursorX = mouseX;
				typeCursorY = mouseY;
			} else if (typeCursorX > w-bs-ts*1.3) {
				typeCursorX = 0;
				typeCursorY = typeCursorY + ts;
			} else {
				typeCursorX = typeCursorX + ts/1.3;

			}
		}
	}	
}


void mouseReleased() {
	isDraw = 0;
}

void mousePressed() {
 	if(mouseX < w-bs) {
		typeCursorX = mouseX;
		typeCursorY = mouseY;
    	isDraw = 1;
	}
}





 void mouseClicked() {
	if (mouseX > w-50) {
		if (mouseY > 5*bs && mouseY < 6.5*bs && brushSize < 96) {
			brushSize += 4;
			ts = brushsize*10;
		}
		if (mouseY < 8.5*bs && mouseY > 7*bs  && brushSize > 4) {
			brushSize -= 4;
			ts = brushsize*10;
		}

		// red
		if (mouseY < bs) {
		    paintColor = color(255, 0, 0);
		}

		// blue
		if (mouseY > bs && mouseY < 2*bs) {
		    paintColor = color(51, 0, 255);
		}

		// yellow
		if (mouseY > 2*bs && mouseY < 3*bs) {
		    paintColor = color(255, 255, 0);
		}

		// green
		if (mouseY > 3*bs && mouseY < 4*bs) {
		    paintColor = color(0, 255, 38);
		}

		// purple
		if (mouseY > 4*bs && mouseY < 5*bs) {
		    paintColor = color(213, 0, 255);
		}
		
		// ssmall eraser
		if (mouseY > 8*bs && mouseY < 9.5*bs) {
		    //brushSize = brushSize*10;
		    paintColor = color(0,0,0);
		}
		
		// large eraser
		if (mouseY > 9.5*bs && mouseY < 11*bs) {
		    clear = true;
		}
	}
}
