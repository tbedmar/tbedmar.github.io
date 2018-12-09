//Toni Bedmar, INS Bellulla de Canovlelles, 2016

  
// Carrega el menu (nav) i el peu de la pàgina (footer)

function carregamenuipeu() { 
var pelpeu='Toni Bedmar, 2016<br>INS Bellulla de Canovelles'
document.getElementById("peu").innerHTML= pelpeu;  
}

// Calcula els primers menors o iguals que n 

function infor() { 

document.getElementById("informacio").style.display = "block";

}
function noinfor() { 

document.getElementById("informacio").style.display = "none";

}


// Calcula els primers menors o iguals que n 

function criba() { 

var n =document.getElementById("ene").value
n= parseInt(n);
var res = [1,2];
var lista = [];
	for (i=3;i <= n;i++){lista.push(i)}   

while (Math.pow(res[res.length-1],2) <= n) {
    p=res[res.length-1];
    for (i = 0; i <= lista.length; i++) {
    		if(lista[i] % p == 0 ){
		lista.splice(i, 1);
		}
	}
    res.push(lista[0])
    lista.shift()
	
    }

var final = res.concat(lista); 
return final;

}


function mostra(){

var n =document.getElementById("ene").value
var text="Los números primos menores o iguales que "+ n + " son:<br><br>";
document.getElementById("resultado").style.display = "block";
var final = criba ();
document.getElementById("resultado").innerHTML= text + final ;

}


function descomposicio(){

var n =document.getElementById("ene").value
n= parseInt(n);
var primers = criba ();
var descomp =[];
var descomp2 =[n];
var res =""
for (i = 1; i <= primers.length; i++) {
	while (n % primers[i] == 0 ){
		n= n / primers[i];
		descomp.push(primers[i]);
		descomp2.push(n);	
	}
}

var descomp3 = descomp;
var descompfinal = descomp.join(" · ");

var factors=[];
var expo=[];
j=1;
for (i = 0; i < descomp3.length; i++) {	
	
	if(descomp3[i]==descomp3[i+1]){j=j+1}
		else{
			factors.push(descomp[i]);
			expo.push(j);
			j=1}		
	
}

document.getElementById("resultado").style.display = "block";


var taularesulatat= '<table class="descomposicio"><tr><td >'+descomp2[0]+"</td><td style= background:gray;' rowspan="+1+descomp.length+"></td><td>" + descomp[0]+"</td></tr>";
for (i = 1; i < descomp.length; i++) {
taularesulatat=taularesulatat+"<tr><td>"+descomp2[i]+"</td><td>" + descomp[i]+"</td></tr>";
}
taularesulatat=taularesulatat+"<tr><td>1</td><td></td></tr></table><br>";

var m =document.getElementById("ene").value

taularesulatat=taularesulatat + m +  " = ";

taularesulatat=taularesulatat +descompfinal+" = " ;


for (i = 0; i < factors.length-1; i++) {
if (expo[i]==1){taularesulatat=taularesulatat+factors[i]+" · "}
else {taularesulatat=taularesulatat+factors[i]+"<sup>"+expo[i]+"</sup>"+" · "}
}

if (expo[i]==1){taularesulatat=taularesulatat+factors[factors.length-1]}
else {taularesulatat=taularesulatat+factors[factors.length-1]+"<sup>"+expo[factors.length-1]+"</sup>"}

;	
document.getElementById("resultado").innerHTML= taularesulatat;




}


