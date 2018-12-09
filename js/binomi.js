//Binomi de Newton
//Toni Bedmar, INS Bellulla de Canovlelles, 2015
//Esborrar
function neteja(){
	document.location.reload(true);
	var a = document.getElementById("coef_a").value=""; 
	var b = document.getElementById("coef_b").value=""; 
	var n = document.getElementById("exponent").value="";
}

//Factorial
function Calculafactorial(n) {
factorial = 1; 
for(i=2;i<=n;i++) 
    factorial = factorial * i; 
return factorial
}

//Combinatori
function Calculacombinatori(n,k) {

return combinatori
}

//Calcula
function calcula() {
var n= document.getElementById("exponent").value;
      
        if( isNaN(n) ) {
     			 alert("L'exponent ha de ser un nombre natural");
     				return;
				}
var polresultat= "El polinomi resultant \u00E9s:<p>   ";
var a = document.getElementById("coef_a").value; 
var b = document.getElementById("coef_b").value; 
var res= new Array(n);
	res[0]=a+"<sup>"+n+"</sup>"+"+";
	polresultat+=res[0];
	var factorial_n = Calculafactorial(n);
	for (var i=1; i<n; i++){	
	var factorial = Calculafactorial(i);
	var factorial_nmenysi = Calculafactorial(n-i);
	res[i]=factorial_n/((factorial)*(factorial_nmenysi));
	polresultat+=res[i]+a+"<sup>"+i+"</sup>"+b+"<sup>"+(n-i)+"</sup>"+"+";
	res[n]=b+"<sup>"+n+"</sup>";
	}

//presentació de resultats
polresultat+=res[n];
document.getElementById("resultat").style.display = "block";
document.getElementById("resultat").innerHTML= polresultat;


}

