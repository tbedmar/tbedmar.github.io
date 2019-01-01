//variables globals
var matriu= new Array (9);
var comptadrop=0;

//comprovació quadrat màgic
function comprovacio(){

var sf1= matriu[0]+matriu[1]+matriu[2]; //suma elements de la fila 1
var sf2= matriu[3]+matriu[4]+matriu[5]; //suma elements de la fila 2
var sf3= matriu[6]+matriu[7]+matriu[8]; //suma elements de la fila 3

var sc1= matriu[0]+matriu[3]+matriu[6]; //suma elements de la columna 1
var sc2= matriu[1]+matriu[4]+matriu[7]; //suma elements de la columna 2
var sc3= matriu[2]+matriu[5]+matriu[8]; //suma elements de la columna 3

var sd1= matriu[0]+matriu[4]+matriu[8]; //suma elements de la diagonal principal
var sd2= matriu[2]+matriu[4]+matriu[6]; //suma elements de la diagonal secundària

document.getElementById("comprovacio").style.display = "block";

var missatge= "La suma de les files és " + sf1+", "+sf2+" i "+sf3+"<br>"
missatge+="La suma de les columnes és ";
missatge+=sc1+", "+sc2+" i "+sc3+"<br> i la suma de les diagonals és " + sd1+" i "+sd2;



if(sf1 == sf2 && sf2 == sf3){missatge+="<br>La suma de les tres files és igual <br>";} 
else {
missatge+="<br>La suma de les files no és igual <img src='imatges/triste.png' width='50px' height'50px'></img> ";
document.getElementById("comprovacio").innerHTML= missatge;
return;
}

if(sc1 == sc2 && sc2 == sc3 && sf1 == sc1){missatge+="La suma de les tres columnes i de les tres files coincideixen <br>";} 
else {
missatge+="<br>Files i columnes no sumen el mateix <img src='imatges/triste.png' width='50px' height'50px'></img> ";
document.getElementById("comprovacio").innerHTML= missatge;
return;
}

if(sd1 == sd2 && sd1 == sf1){missatge+="La suma de les dues diagonals, de les files i de les columnes coincideixen: Felicitats! ";} 
else {
missatge+= "<br>Files, columnes i diagonals no sumen el mateix <img src='imatges/triste.png' width='50px' height'50px'></img>";
return;
}


document.getElementById("comprovacio").innerHTML= missatge;

}


function allowDrop(ev) {
  var lloc= ev.target.id; 
	for(var j=1; j<= 9; j++) {
		
		if (lloc == "dropo"+j){ev.preventDefault();};//només deixem anar si estem als dropos
}

}


function drag(ev) {  
  ev.dataTransfer.setData("text", ev.target.id);
 
}


function drop(ev) {
  var lloc= ev.target.id; //id del lloc on deixem anar
  var data = ev.dataTransfer.getData("text");//id del element arrossegat
  lloc= lloc.slice(5, 6)-1;
  matriu[lloc]=parseInt(data.slice(5, 6)); //omplim la matriu per a les comprovacions
  ev.target.appendChild(document.getElementById(data));
  ev.target.style.backgroundColor = "grey";
  //alert("Hem escrit un "+data.slice(5, 6))+" al lloc "+lloc.slice(5, 6));
  comptadrop+=1; 
  if(comptadrop == 9){comprovacio()}
  
  ev.target.delegateEvents(); //evitem que es pugui deixar anar a sobre d'un dropo més d'una vegada
  
}

function end(ev){					
        var id = ev.target.id; // Element arrossegat	
        document.getElementById(id).setAttribute("draggable", "false");//per evitar que es pugui tornar a arrossegar
}


window.addEventListener("load",dibuixataulas);

function dibuixataulas()
{

var x = document.getElementsByClassName("graella");
var items="";

	for(var j=1; j<= 9; j++)
		{	
		items+="<p class='item'id='dropo"+j+"' ondrop='drop(event)' ondragend='end(event)' ondragover='allowDrop(event)' ></p>";	
		}
x[0].innerHTML = items;

var items="";
	for(var i=1; i<= 9; i++)
		{
		items+="<p class='item' id='drago"+i+"' draggable='true' ondragstart='drag(event)' >"+i+"</p>";
		}
document.getElementsByClassName("graelladreta")[0].innerHTML = items;

}
