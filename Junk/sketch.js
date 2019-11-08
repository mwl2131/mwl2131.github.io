function setup() {
	createCanvas(900,300); 
}

function draw() {
	let i = 0;
	
	background(100);

	for (i = second(); i > 0; i--) {
		fill(200, 255 - i*4.25, i*4.25);
		if (i == second()) {
			circle(750, 150, 2.5*i);
		}
		if ( i % 5 == 0 ){
			circle(750, 150, 2.5*i);
		}
	}
	for (i = minute(); i > 0; i--) {
		fill(i*4.25, 150, 255 - i*4.25);
		if (i == minute()) {
			circle(450, 150, 2.5*i);
		}
		if ( i % 5 == 0 ){
			circle(450, 150, 2.5*i);
		}
	}
	for (i = ((hour() + 11) % 12) + 1; i > 0; i--) {
		
		if (hour() > 12 || hour() == 0) {
			fill(255, 255 - i*17,200 - i*14);
		}
		else {
			fill(255 - i*14, 255 - i*7,200);
		}
		circle(150, 150, 12.5*i);
		
	}

}
