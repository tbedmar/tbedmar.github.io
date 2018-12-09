//Resolució de triangles
//Toni Bedmar, INS Bellulla de Canovlelles, 2015

//Neteja
function neteja() {
document.getElementById("hipotenusa").value="";
document.getElementById("catet b").value="";
document.getElementById("catet c").value="";
document.getElementById("angle B").value="";
document.getElementById("angle C").value="";
document.getElementById("esquematriangle").style.display = "block";
document.getElementById("TRIANGLE").style.display = "none";
document.location.reload(true);
}
//Calcula
function calcula() {
var hipo= document.getElementById("hipotenusa").value;
if( isNaN(hipo) ) {alert("Els costats han de ser nombres");return;};
var catet_b= document.getElementById("catet b").value;
if( isNaN(catet_b) ) {alert("Els costats han de ser nombres");return;};
var catet_c= document.getElementById("catet c").value;
if( isNaN(catet_c) ) {alert("Els costats han de ser nombres");return;};
var angleB= document.getElementById("angle B").value;
if( isNaN(angleB) ) {alert("Els angles han de ser nombres");return;};
var angleC= document.getElementById("angle C").value;
if( isNaN(angleC) ) {alert("Els angles han de ser nombres");return;};

document.getElementById("esquematriangle").style.display = "none";
document.getElementById("TRIANGLE").style.display = "block";


//Distingim casos

//Dos costats: 3 casos

if( catet_b > 0 & catet_c > 0 ) {
	//Donats dos catets
	document.getElementById("hipotenusa").value=(Math.sqrt(catet_b*catet_b+catet_c*catet_c));
	document.getElementById("angle B").value=(180/Math.PI*Math.atan(catet_b/catet_c));
	var angleB= document.getElementById("angle B").value;
	document.getElementById("angle C").value=90-angleB;
};

if(catet_c > 0 & hipo > 0  ) {
    	//Donats el catet c i la hipotenusa
	document.getElementById("catet b").value=(Math.sqrt(hipo*hipo-catet_c*catet_c));
	document.getElementById("angle B").value=(180/Math.PI*Math.asin(catet_c/hipo));
	var angleB= document.getElementById("angle B").value;
	document.getElementById("angle C").value=90-angleB;
};

if( catet_b > 0 & hipo > 0  ) { 
	//Donats el catet b i la hipotenusa
	document.getElementById("catet c").value=(Math.sqrt(hipo*hipo-catet_b*catet_b));
	document.getElementById("angle B").value=(180/Math.PI*Math.asin(catet_b/hipo));
	var angleB= document.getElementById("angle B").value;
	document.getElementById("angle C").value=90-angleB;
};


//Un angle i un costat: 6 casos

if( angleB > 0 & hipo > 0) { 
	//Donats l'angle B i la hipotenusa
	document.getElementById("angle C").value=90-angleB;
	document.getElementById("catet b").value=(hipo*Math.sin (Math.PI/180*angleB));
	document.getElementById("catet c").value=(hipo*Math.cos (Math.PI/180*angleB));
	
};

if( angleB > 0 & catet_b > 0) { 
	//Donats l'angle B i el catet b
	document.getElementById("angle C").value=90-angleB;
	document.getElementById("catet c").value=(catet_b/Math.tan (Math.PI/180*angleB));
	document.getElementById("hipotenusa").value=(catet_b/Math.sin (Math.PI/180*angleB));
	
};

if( angleB > 0 & catet_c > 0) { 
	//Donats l'angle B i el catet c
	document.getElementById("angle C").value=90-angleB;
	document.getElementById("catet b").value=(catet_c*Math.tan (Math.PI/180*angleB));
	var angleC= document.getElementById("angle C").value;
	document.getElementById("hipotenusa").value=(catet_c/Math.sin (Math.PI/180*angleC));
	
};	

if( angleC > 0 & hipo > 0) { 
	//Donats l'angle B i la hipotenusa
	document.getElementById("angle B").value=90-angleC;
	document.getElementById("catet b").value=(hipo*Math.sin (Math.PI/180*angleC));
	document.getElementById("catet c").value=(hipo*Math.cos (Math.PI/180*angleC));
	
};

if( angleC > 0 & catet_b > 0) { 
	//Donats l'angle C i el catet b
	document.getElementById("angle B").value=90-angleC;
	document.getElementById("catet c").value=(catet_b*Math.tan (Math.PI/180*angleC));
	var angleB= document.getElementById("angle C").value;
	document.getElementById("hipotenusa").value=(catet_b/Math.sin (Math.PI/180*angleB));
	
};

if( angleC > 0 & catet_c > 0) { 
	//Donats l'angle C i el catet c
	document.getElementById("angle B").value=90-angleC;
	document.getElementById("catet b").value=(catet_c/Math.tan (Math.PI/180*angleC));
	document.getElementById("hipotenusa").value=(catet_c/Math.sin (Math.PI/180*angleC));
	
};	

//Dibuixem triangle a escala i l'ajustem al canvas

var canvas = document.getElementById("TRIANGLE");
        if (canvas.getContext){
        var ctx = canvas.getContext('2d');
	var b= document.getElementById("catet b").value;
	var c= document.getElementById("catet c").value;	
	ctx.font = 'italic 16px arial';
	ctx.beginPath();
	ctx.moveTo(400,190);//Inici triangle, punt fix.
	switch (true){
		case (c/b <= 1/2):
			ctx.lineTo(25,190);
			ctx.lineTo(25, 190-c*400/b);
			ctx.lineTo(400,190);//Tanquem tornant al punt inicial
			ctx.stroke();
			ctx.fillText("A", 15, 200);
			ctx.fillText("b", 200, 200);
			ctx.fillText("B", 15, 185-c*400/b);
			ctx.fillText("c", 15, (190+(190-c*400/b))/2);
			ctx.fillText("C", 410, 200);
			ctx.fillText("a", 200, (190+(190-c*400/b))/2-10);
			//ctx.fillText("c/b < 1/2", 200, 100);
		break;
		case (1/2 < c/b && c/b <= 1):
			ctx.lineTo(400-b*200/c,190);
			ctx.lineTo(400-b*200/c,25);
			ctx.lineTo(400,190);//Tanquem tornant al punt inicial
			ctx.stroke();
			ctx.fillText("A", 390-b*200/c, 200);
			ctx.fillText("b", ((390-b*200/c)+(410))/2, 200);
			ctx.fillText("B", 390-b*200/c, 15);
			ctx.fillText("c", 390-b*200/c, 215/2);
			ctx.fillText("C", 410, 200);
			ctx.fillText("a", ((390-b*200/c)+(410))/2, 215/2-10);
			//ctx.fillText("1/2 < c/b < 1/2", 200, 40);
		break;
		
		case (1 < c/b && c/b <= 2):
			ctx.lineTo(400-c*200/b,190);
			ctx.lineTo(400-c*200/b,25);
			ctx.lineTo(400,190);//Tanquem tornant al punt inicial
			ctx.stroke();
			ctx.fillText("A", 390-c*200/b, 200);
			ctx.fillText("c", ((390-c*200/b)+(410))/2, 200);
			ctx.fillText("C", 390-c*200/b, 15);
			ctx.fillText("b", 390-c*200/b, 215/2);
			ctx.fillText("B", 410, 200);
			ctx.fillText("a", ((390-c*200/b)+(410))/2, 215/2-10);
			//ctx.fillText("1 < c/b < 2", 200, 40);
		break;		
		default:
			ctx.lineTo(25,190);
			ctx.lineTo(25, 190-b*400/c);
			ctx.lineTo(400,190);//Tanquem tornant al punt inicial
			ctx.stroke();
			ctx.fillText("A", 15, 200);
			ctx.fillText("c", 200, 200);
			ctx.fillText("C", 15, 185-b*400/c);
			ctx.fillText("b", 15, (190+(190-b*400/c))/2);
			ctx.fillText("B", 410, 200);
			ctx.fillText("a", 200, (190+(190-b*400/c))/2-10);
			//ctx.fillText("c/b >2", 200, 40);
		break;
		}

}


}


