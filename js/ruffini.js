//Regla de Ruffini
//Toni Bedmar, INS Bellulla de Canovlelles, 2014

//Introducció dels coeficients
function introcoef()
{
	
var g= document.getElementById("grau").value;

var taulapolinomi='<table>';
taulapolinomi+='<p>Ara escriu els coeficients del polinomi a la fila de dalt i el divisor a la segona fila</p>';
taulapolinomi+='<br>';
taulapolinomi+='<tr><td>&nbsp;<td style="width:3px; background: maroon;" rowspan=5>'
for(var i=0; i<=g; i++){
taulapolinomi+="<td><input type=text value=' ' name='D'" + i +" size=2></td>";
}
taulapolinomi+="<tr><td>&nbsp;<td>&nbsp;";
taulapolinomi+="<tr><td><input id='a' value=''  size='1'></td>";
taulapolinomi+='<tr><td colspan='+g+2+' bgcolor=gray style="height: 5px; background: maroon;">';
taulapolinomi+="<tr><td>&nbsp;";
for(var i=0; i<=g; i++){
taulapolinomi+="<td><input type=text value=' ' name='q'" + i +" size=2></td>";
}
taulapolinomi+="</table>";
document.getElementById("polinomi").innerHTML= taulapolinomi;
		
	
}

//Calcula
function calcula() {

var div= document.getElementById("a").value;
      
        
if( isNaN(div) ) {
     			 alert("El divisor ha de ser un nombre ");
     				return;
				}

//distingim els casos especials de grau 0, 1 i 2 

var dim= document.getElementById("grau").value;

var polresultat= "El polinomi quocient \u00E9s Q(x)=";

		


var coef= new Array(dim+1);
var compcoef= new Array(dim+1);
	for (var i=0; i<=dim; i++){
		
		compcoef[i]= document.getElementsByName("D")[i].value;
	if( isNaN(compcoef[i]) ) {
     			 alert("Els coeficients han de ser nombres ");
     				return;
				}
		coef[i]= eval(document.getElementsByName("D")[i].value);
	}
	
var res= new Array(dim+1);
	res[0]=coef[0];
	document.getElementsByName("q")[0].value= res[0];
	for (var i=1; i<=dim; i++){	
	res[i]=div*res[i-1]+coef[i];
	document.getElementsByName("q")[i].value= res[i];

	}
document.getElementsByName("q")[dim].style.backgroundColor = "yellow";
residu= document.getElementsByName("q")[dim].value

//presentació de resultats

	for (var i=0; i<(dim-2); i++){
	switch (true){
		case (res[i]==1):
		polresultat+="x<sup>"+ (dim-i-1) + "</sup> + ";
		break;
		
		case (res[i]==0):
		//polresultat+="x<sup>"+ (dim-i-1) + "</sup> + ";
		break;		
		
		default:
		polresultat+=res[i]+"x<sup>"+ (dim-i-1) + "</sup> + ";
		break;
		}

	}
//terme en x
		switch (true){
		case (res[dim-2]==1):
		polresultat+="x<sup>"+ (dim-i-1) + "</sup> + ";
		break;
		
		case (res[dim-2]==0):
		//polresultat+="x<sup>"+ (dim-i-1) + "</sup> + ";
		break;		
		
		default:
		polresultat+=res[dim-2]+"x+";
		break;
		}
//terme independent
polresultat+=res[dim-1];
polresultat+="  i el residu \u00E9s "+res[dim];

document.getElementById("resultat").style.display = "block";
document.getElementById("resultat").innerHTML= polresultat;


}

