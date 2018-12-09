//Representació Vectors 3D al pla
//Toni Bedmar, INS Bellulla de Canovlelles, 2015

//Esborrar
function esborra(){
	document.location.reload(true);
	var u1 = document.getElementById("u1").value=""; 
	var u2 = document.getElementById("u2").value=""; 
	var u3 = document.getElementById("u3").value="";
}

function pinta(){
//Dibuixem Eixos
	var canvas = document.getElementById("TRIANGLE");       
	var x=canvas.width;
	var y=canvas.height;
	var u1 = document.getElementById("u1").value; 
	var u2 = document.getElementById("u2").value; 
	var u3 = document.getElementById("u3").value;	
	if (canvas.getContext){
        var ctx = canvas.getContext('2d');
	ctx.translate(x/2,y/2);
	ctx.lineWidth = 4;
	ctx.strokeStyle = '#09c';	
	ctx.beginPath();
	ctx.lineTo(40, 25);
	ctx.lineTo(0,0);
	ctx.lineTo(-40,25);
	ctx.lineTo(0,0);
	ctx.lineTo(0,-40);
	ctx.stroke();
//Dibuixem les projeccions pels eixos
	//Recorregut per eix i	
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#352';
	ctx.moveTo(0,0);//Tornem al centre del canvas
	//Recorregut per eix i
	ctx.lineTo(-(u1*40),(u1*25));
	//Recorregut per eix j
	ctx.lineTo(-(u1*40)+u2*40,(u1*25)+u2*25);
	//Recorregut per eix k
	ctx.lineTo(-(u1*40)+u2*40,(u1*25)+u2*25-u3*40);
	ctx.stroke();
//Dibuixem el Vector	
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#d11';
	ctx.moveTo(0,0);//Inici al centre del canvas
	ctx.lineTo(-(u1*40)+u2*40,(u1*25)+u2*25-u3*40);
	ctx.stroke();
//Informació		
	ctx.fillStyle = '#09c';	
	ctx.fillText("Eixos de coordenades ", 200, 100);
	ctx.fillRect(175,95,18,5);
	ctx.fillStyle = '#352';	
	ctx.fillText("Projeccions sobre els eixos", 200, 120);
	ctx.fillRect(175,115,18,5);
	ctx.fillStyle = '#d11';	
	ctx.fillText("Vector ", 200, 140);
	ctx.fillRect(175,135,18,5);
//PuntaVector
	var v1=	-(u1*40)+u2*40;
	var v2=	(u1*25)+u2*25-u3*40;
	var angle=Math.atan(v2/v1); 
	ctx.translate(v1,v2);	
	if (v1 >= 0){	
		ctx.rotate((3/2)*Math.PI + angle);	
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.fillStyle = '#d11';
		ctx.moveTo(0, 0);
		ctx.lineTo(-3,-15);
		ctx.lineTo(3,-15);
		ctx.fill();
	}
if (v1 < 0){	
		ctx.rotate((1/2)*Math.PI + angle);	
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.fillStyle = '#d11';
		ctx.moveTo(0, 0);
		ctx.lineTo(-3,-15);
		ctx.lineTo(3,-15);
		ctx.fill();
	}


	
}
}


