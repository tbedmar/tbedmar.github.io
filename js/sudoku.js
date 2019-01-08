//variables globals
var matriu= new Array (9);
for(var j=0; j<= 8; j++) {matriu[j]=new Array (9);}

var segonamatriu= new Array (9);
for(var j=0; j<= 8; j++) {segonamatriu[j]=new Array (9);}





//Dibuixem les dues taules quan es carrga la pàgina

window.addEventListener("load",dibuixataulas);

function dibuixataulas()
{
var x = document.getElementsByClassName("graella");
	for(var j=0; j<= 8; j++)
		{
	var items="";
		for(var i=0; i<= 8; i++)
		{
			items+="<p class='item' id='dropo"+j+i+"' ondrop='dropclon(event)' ondragend='end(event)' ondragover='allowDrop(event)' ></p>";			
		}
	x[j].innerHTML = items;//dibuixem el tauler 9 per 9

}
var items="";
	for(var i=1; i<= 9; i++)
		{
		items+="<p class='item' id='drago"+i+"' draggable='true' ondragstart='drag(event)' >"+i+"</p>";
		}
document.getElementsByClassName("graelladreta")[0].innerHTML = items; //dibuixem la columna dels 9 númneros per col·locar

}


//Drag and Drop

var contador = 0; // Variable global per id element clonat.
		
//permetre arrossegar
function allowDrop(ev) {
  var lloc= ev.target.id;
   for(var j=0; j<= 8; j++) {
	for(var i=0; i<= 8; i++) {	
		if (lloc == "dropo"+j+i){ev.preventDefault();};//només deixem anar si estem als dropos
}

}
}

//arrossegar
function drag(ev) {  
  ev.dataTransfer.setData("text", ev.target.id);
}
//soltar i clonar
function dropclon(ev){
			ev.preventDefault();			
			var drag = document.getElementById(ev.dataTransfer.getData("text")); // Element arrossegat
			ev.target.style.backgroundColor = "grey";
			var clon = drag.cloneNode(true); // clonem
			clon.setAttribute("draggable", "false");
			clon.id = "ElemClonado" + contador; // canviem id, ha de ser únic
			contador += 1;	
    			var lloc= ev.target.id; //id del lloc on deixem anar
  			var data = ev.dataTransfer.getData("text");//id del element arrossegat

//omplim les matrius que ens serviran per controlar repeticions  			
			k= lloc.slice(5, 6); // índex submatriu on deixem anar, va de 0 a 8
			l= lloc.slice(6, 7); // índex posició dins la submatriu on deixem anar, va de 0 a 8
 			matriu[k][l]=data.slice(5, 6);
			i= 3*Math.floor(k/3)+ Math.floor(l/3);//index fila segona matriu comprovacions, va de 0 a 8
			j= 3*(k%3)+ (l%3);//index columna segona matriu comprovacions, va de 0 a 8
			segonamatriu[i][j]=data.slice(5, 6);
			
			
		
//comprovem repeticions dins la mateixa submatriu, fila o columna
			var contsub = 0;
			var contf = 0;
			var contc = 0;			
			for (var m=0; m<= 8; m++){	
				if(matriu[k][m] == matriu[k][l]) {contsub+=1;}	
			}
			for (var n=0; n<= 8; n++){	
				if(segonamatriu[i][n] == segonamatriu[i][j]) {contf+=1;}
			}
			for (var p=0; p<= 8; p++){	
				if(segonamatriu[p][j] == segonamatriu[i][j]) {contc+=1;}
			}
			
			if(contsub > 1 || contf > 1 || contc > 1) {clon.style.color="red";}	

//clonem			
			ev.target.appendChild(clon);
			ev.target.delegateEvents(); //evitem que es pugui deixar anar a sobre d'un dropo més d'una vegada


}


function end(ev){					
        var id = ev.target.id; // Element arrossegat	
        document.getElementById(id).setAttribute("draggable", "false");//per evitar que es pugui tornar a arrossegar
        var idclonat="ElemClonado"
	for (var i=0; i<= 18; i++){document.getElementById("ElemClonado"+i).setAttribute("draggable", "false");}
	//per evitar que es pugui tornar a arrossegar el clon
}

/*
Falta controlar las repeticiones de las filas y las columnas
y las repeticiones de los 9 cuadros.
*/
