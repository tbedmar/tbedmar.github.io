//Generador SEL
//Toni Bedmar, INS Bellulla de Canovlelles, 2017
//


function introcoef() {

//Matriu dels coeficients, generada de manera aleatòria	

columnes= document.getElementById("columnes").value;
n = parseInt(columnes);	
matriu= new Array (n);

for(var i=0; i<n; i++){
matriu[i]=new Array (n);

	for(var j=0; j<n; j++){
	matriu[i][j]=Math.floor(Math.random()*10000)%12*(-1)**(Math.floor(Math.random()*10)%2);

	}
}

incognites = ["x","y","z","t","u"];

document.getElementById("pinchable").style.display = "block";
document.getElementById("pinchable2").style.display = "block";

}
function introcoefAmbSolucions() {
	
//Matriu dels coeficients, generada de manera aleatòria	

var columnes= document.getElementById("columnes").value;
var n = parseInt(columnes);
//definim variable global matriu
matriu= new Array (n);

for(var i=0; i<n; i++){
matriu[i]=new Array (n);

	for(var j=0; j<n; j++){
	matriu[i][j]=Math.floor(Math.random()*10000)%15*(-1)**(Math.floor(Math.random()*10)%2);

	}

}

//Vector solucions, demana que l'usuari entri les solucions que vol pel sitema

var mostrasolucions="<p>";
incognites = ["x","y","z","t","u"];
mostrasolucions+='<p>Ara escriu les solucions que vols que tingui el SEL</p><br>';
mostrasolucions+="<p>"

for(var i=0; i<n; i++){

mostrasolucions+= incognites[i]+ "&nbsp;&nbsp; <input type=text value='' name='s'" +i+" size=2>&nbsp;&nbsp;&nbsp;";

}
mostrasolucions+='</p>';

document.getElementById("sol").innerHTML= mostrasolucions;
document.getElementById("pinchable2").style.display = "block";

}


//Mostrem la matriu ampliada del SEL  i el SEL

function mostraMatriuAmpliada_SEL() {

valSol= new Array (n);
for(var i=0; i<n; i++){
	valSol[i]= Math.floor(Math.random()*10000)%9*(-1)**(Math.floor(Math.random()*10)%2);
		}

//Calculem el vector dels termes independents

indep= new Array(n);


for(var i=0; i<n; i++){
indep[i]=0;
	for(var k=0; k<n; k++){
		indep[i]+=valSol[k]*matriu[i][k];
	}
}


//generem la matriu Ampliada amb LateX


var matriuAmpliada= "$\\left(\\begin{array}{";
matriuAmpliada+="ccc}";

	for(var i=0; i<n; i++){
		matriuAmpliada+="";
			for(var j=0; j<n-1; j++){
			matriuAmpliada+= matriu[i][j] + "&"}
		matriuAmpliada+=matriu[i][n-1] + "\\\\"
		}

	matriuAmpliada+="\\end{array}\\left|\\begin{array}{c}"
	for(var i=0; i<n-1; i++){
		matriuAmpliada+=indep[i]+"\\\\";
		};
matriuAmpliada+=indep[n-1]+"\\end{array}\\right.\\right)$"

//Mostrem la matriu ampliada
document.getElementById("matriuB").innerHTML= matriuAmpliada;
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"matriuB"]);

}


//codi Latex per a mostrar el SEL

function mostraSEL(){

var codi="$\\begin{cases} \\begin{array}{c}"
//Variable:

for(var j=0; j<n-1; j++){

switch (true){
		case (matriu[j][0]==0):
			
		break;
		
		case (matriu[j][0]==1):
			codi+= incognites[0];
		break;
		
		case (matriu[j][0]==-1):
			codi+="-" + incognites[0];
		break;		
		
		case (matriu[j][0]<-1):
			codi+= matriu[j][0]+incognites[0];
		break;
		
		case (matriu[j][0]>1):
			codi+= matriu[j][0]+incognites[0];
		break;
		}



	for(var i=1; i<n; i++){
	switch (true){
		case (matriu[j][i]==0):
			
		break;
		
		case (matriu[j][i]==1):
			codi+= "+" + incognites[i];
		break;
		
		case (matriu[j][i]==-1):
			codi+="-" + incognites[i];
		break;		
		
		case (matriu[j][i]<-1):
			codi+= matriu[j][i]+incognites[i];
		break;
		
		case (matriu[j][i]>1):
			codi+= "+" + matriu[j][i]+incognites[i];
		break;
		}	

	}

codi+= "="+indep[j]+"\\\\";
}

switch (true){
		case (matriu[n-1][0]==0):
			
		break;
		
		case (matriu[n-1][0]==1):
			codi+= incognites[0];
		break;
		
		case (matriu[n-1][0]==-1):
			codi+="-" + incognites[0];
		break;		
		
		case (matriu[n-1][0]<-1):
			codi+= matriu[n-1][0]+incognites[0];
		break;
		
		case (matriu[n-1][0]>1):
			codi+= matriu[n-1][0]+incognites[0];
		break;
		}	
for(var i=1; i<n; i++){
switch (true){
		case (matriu[n-1][i]==0):
			
		break;
		
		case (matriu[n-1][i]==1):
			codi+= "+" + incognites[i];
		break;
		
		case (matriu[n-1][i]==-1):
			codi+="-" + incognites[i];
		break;		
		
		case (matriu[n-1][i]<-1):
			codi+= matriu[n-1][i]+incognites[i];
		break;
		
		case (matriu[n-1][i]>1):
			codi+= "+" + matriu[n-1][i]+incognites[i];
		break;
		}
		
	}
codi+= "="+indep[n-1];

codi+=" \\end{array}\\end{cases}$";
 
document.getElementById("codiLateX").innerHTML= codi;

MathJax.Hub.Queue(["Typeset",MathJax.Hub,"codiLateX"]);


var codisol="Solució:  $\\quad ";

	for(var i=0; i<n; i++){
		codisol+=incognites[i]+"="+valSol[i]+"\\quad "; 
	}

codisol+=" $";

document.getElementById("codiLateXsolucions").innerHTML= codisol;
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"codiLateXsolucions"]);

}

function mostraCodiLateX(){

//codi Latex per a mostrar la matriu ampliada
var columnes= document.getElementById("columnes").value;
var n = parseInt(columnes);

//Calculem el vector dels termes independents

indep= new Array(n);
valSol= new Array(n);
for(var i=0; i<n; i++){
valSol[i]=document.getElementsByName("s")[i].value;
}

for(var i=0; i<n; i++){
indep[i]=0;
	for(var k=0; k<n; k++){
		indep[i]+=valSol[k]*matriu[i][k];
	}
}

//codi Latex per a mostrar el SEL
var codi="$\\begin{cases} \\begin{array}{c}"
//Variable:

for(var j=0; j<n-1; j++){

switch (true){
		case (matriu[j][0]==0):
			
		break;
		
		case (matriu[j][0]==1):
			codi+= incognites[0];
		break;
		
		case (matriu[j][0]==-1):
			codi+="-" + incognites[0];
		break;		
		
		case (matriu[j][0]<-1):
			codi+= matriu[j][0]+incognites[0];
		break;
		
		case (matriu[j][0]>1):
			codi+= matriu[j][0]+incognites[0];
		break;
		}



	for(var i=1; i<n; i++){
	switch (true){
		case (matriu[j][i]==0):
			
		break;
		
		case (matriu[j][i]==1):
			codi+= "+" + incognites[i];
		break;
		
		case (matriu[j][i]==-1):
			codi+="-" + incognites[i];
		break;		
		
		case (matriu[j][i]<-1):
			codi+= matriu[j][i]+incognites[i];
		break;
		
		case (matriu[j][i]>1):
			codi+= "+" + matriu[j][i]+incognites[i];
		break;
		}	

	}

codi+= "="+indep[j]+"\\\\";
}

switch (true){
		case (matriu[n-1][0]==0):
			
		break;
		
		case (matriu[n-1][0]==1):
			codi+= incognites[0];
		break;
		
		case (matriu[n-1][0]==-1):
			codi+="-" + incognites[0];
		break;		
		
		case (matriu[n-1][0]<-1):
			codi+= matriu[n-1][0]+incognites[0];
		break;
		
		case (matriu[n-1][0]>1):
			codi+= matriu[n-1][0]+incognites[0];
		break;
		}	
for(var i=1; i<n; i++){
switch (true){
		case (matriu[n-1][i]==0):
			
		break;
		
		case (matriu[n-1][i]==1):
			codi+= "+" + incognites[i];
		break;
		
		case (matriu[n-1][i]==-1):
			codi+="-" + incognites[i];
		break;		
		
		case (matriu[n-1][i]<-1):
			codi+= matriu[n-1][i]+incognites[i];
		break;
		
		case (matriu[n-1][i]>1):
			codi+= "+" + matriu[n-1][i]+incognites[i];
		break;
		}
		
	}
codi+= "="+indep[n-1];

codi+=" \\end{array}\\end{cases}$";

document.getElementById("codiLateX").innerHTML="<p>Codi Latex per al SEL:</p><br><p>"+ codi;


codi+="\\begin{quote} sol:$";
//aquesta és la part variable que s'ha de programar:
for(var i=0; i<n; i++){
	codi+=" \\quad "+incognites[i]+"="+valSol[i] ; 
}

codi+=" $\\end{quote}";

document.getElementById("codiLateXsolucions").innerHTML="<p>Codi Latex per al SEL, amb la solució:</p><br><p>"+ codi;

}


