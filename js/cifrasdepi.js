//Toni Bedmar, INS Bellulla de Canovlelles, 2016

  
// Carrega el menu (nav) i el peu de la pàgina (footer)

function carregamenuipeu() { 
var pelpeu='Toni Bedmar, 2017<br>INS Bellulla de Canovelles'
document.getElementById("peu").innerHTML= pelpeu;  
}



function criba() { 
BigNumber.config({ DECIMAL_PLACES: 20, ROUNDING_MODE: 4 })

var s=new BigNumber(0);
var a=new BigNumber(1);
var setze=new BigNumber(16);
var vuit=new BigNumber(8);
var un=new BigNumber(1);
var quatre=new BigNumber(4);
var dos=new BigNumber(2);
//a.toPrecision (20);
//s.toPrecision (20);
//var s=0;
//var a=0;
var n =document.getElementById("ene").value
n= parseInt(n);



for (var k=0; k<n; k++){
	//(1/16**k)*(4/(8*k+1)-2/(8*k+4)-1/(8*k+5)-1/(8*k+6)
	
        a=quatre.dividedBy(vuit.times(k).plus(1));
	a=a.minus(dos.dividedBy(vuit.times(k).plus(4)));
	a=a.minus(un.dividedBy(vuit.times(k).plus(5)));
	a=a.minus(un.dividedBy(vuit.times(k).plus(6)));
	a=a.times(un.dividedBy(setze.toPower(k)));
	s=s.plus(a);

}

return s;
}

var pi = '3.141592653589793238462643383279';
function mostra(){

var n =document.getElementById("ene").value
var text1="El valor exacto de $\\pi$ es: <br>"+pi+"<br>";
var text2="<br>El valor aproximado por el proceso numérico es: <br>";
document.getElementById("resultado").style.display = "block";
var final = criba ();
document.getElementById("resultado").innerHTML= text1 + text2 + final ;
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"resultado"]);

}



