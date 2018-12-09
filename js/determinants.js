//Toni Bedmar, INS Bellulla de Canovlelles, 2016

// Prova funcions



//Toni Bedmar, INS Bellulla de Canovlelles, 2016

// Càlcul determinants



 
function generaTaula(){ 
  
columnes= document.getElementById("dimensio").value;
n = parseInt(columnes);



content = document.getElementById("contingut");

var taula = document.createElement("TABLE");
taula.border="2";

var instruccions = document.createElement("P");
var node = document.createTextNode("Introdueix els valors de la matriu de la que farem el determinant.");
instruccions.appendChild(node);
var espai = document.createElement("BR");

for (var i=0; i<n; i++){
	
	var tri = document.createElement("TR");

		for (var j=0; j<n; j++){  
    
		var tdj = document.createElement("TD");
		var a = document.createElement("INPUT");
   			
			a.setAttribute("type", "text");
			a.setAttribute("size", 2);
			a.setAttribute("name","a"+i+""+j);
			if(i== 0 && j== 0){
				a.focus();
				}			
			if(i== n-1 && j==n-1){
				a.setAttribute("onchange","mostrataula ()");
				}
			
			var sugerencia= "a"+(i+1)+""+(j+1);
			a.placeholder= sugerencia;
		tri.appendChild(tdj); 
		tdj.appendChild(a);

		}  
		    
                   
	taula.appendChild(tri);

}

	content.appendChild(instruccions);
	content.appendChild(espai);

	content.appendChild(taula);

}


function mostrataula () {

matriuValors= new Array(n);
	for (var i=0; i<n; i++){ 
		matriuValors[i]= new Array(n);
			for (var j=0; j<n; j++){ 
				matriuValors[i][j]=document.getElementsByName("a"+i+""+j)[0].value;
			}
	}

var espai = document.createElement("BR");

var resultat = document.createElement("P");

var node = document.createTextNode(det23());

resultat.appendChild(node);
content.appendChild(espai);
content.appendChild(resultat);



function det23(){

v= new Array(n);
	for (var i=0; i<n; i++){ 
		v[i]= new Array(n);
			for (var j=0; j<n; j++){ 
				v[i][j]= parseInt(matriuValors[i][j]);
				
			}
	}

switch (true){
		case (n==2):
		var det="El determinant d'aquesta matriu d'ordre 2, val ";
		det+=det2(v);
		return det;
		break;
		
		case (n==3):
		var det="El determinant d'aquesta matriu d'ordre 3, val ";
		det+=det3(v);
		return det;
		break;

		case (n==4):
		var det="El determinant d'aquesta matriu d'ordre 4, val ";
		det+=det4(v);
		return det;
		break;
		
		case (n > 4):
		var det="Determinant massa gran...";
		return det;
		break;

		}

}


}






