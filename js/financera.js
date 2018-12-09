//Calculadora runner
//Toni Bedmar, INS Bellulla de Canovlelles, 2016

  

// Càlcul de la quota del crèdit 
function calculaquota() { 
  var c= document.getElementById("capital").value;     
  var n= document.getElementById("anys").value;
  var i= document.getElementById("interes").value;
  var k= document.getElementById("frequencia").value;

  
    if( isNaN(c) ) {
      alert("Capital no vàlid, introdueix un nombre");
      return;      
      }
    if( isNaN(n) ) {
      alert("Nombre d'anys no vàlid, introdueix un nombre");
      return;      
      }
    if( isNaN(i) ) {
      alert("Interès no vàlid, introdueix un nombre");
      return;      
      }
    if( isNaN(k) ) {
      alert("Freqüència no vàlid, introdueix un nombre");
      return;      
      }
  c= parseInt(c);
  n= parseInt(n);
  i= parseFloat(i);
  k= parseInt(k);
  index= 1 + i / (k*100)
  indexelevat = Math.pow(index,(n*k))
  quota= c * (index-1)*indexelevat / (indexelevat-1)
  quota= Math.round(quota * 100) / 100
 
  
  document.getElementById("resultado").style.display = "block";
  document.getElementById("resquota").innerHTML="La quota del crèdit és de  " + quota + "€";
   

  capitalpendent= c

var taulaamortitzacio='<table border="1">';
taulaamortitzacio+="<caption>Taula d'amortització del crèdit</caption>";
taulaamortitzacio+='<thead><td>n</td><td>Quota</td><td>QuotaInteres</td><td>QuotaCapital</td><td>CapitalPendent</td></thead>';

taulaamortitzacio+='<tr><td>0</td><td></td><td></td><td></td><td>'+ c +'</td></tr>';


for(var j=1; j<=n*k; j++){
  var quotainteres = capitalpendent * (index-1)
  quotainteres = Math.round(quotainteres * 100) / 100
  var quotacapital = quota - quotainteres
  quotacapital = Math.round(quotacapital * 100) / 100
  var capitalpendent= capitalpendent- quotacapital
  capitalpendent = Math.round(capitalpendent * 100) / 100
if (j % 2 == 1){
taulaamortitzacio+='<tr class="color"><td>'+ j +'</td><td>'+ quota +'</td><td>'+ quotainteres +'</td><td>'+ quotacapital +'</td><td>'+ capitalpendent +'</td></tr>';}
else{
taulaamortitzacio+='<tr><td>'+ j +'</td><td>'+ quota +'</td><td>'+ quotainteres +'</td><td>'+ quotacapital +'</td><td>'+ capitalpendent +'</td></tr>';
}
} 

taulaamortitzacio+='</table>';
document.getElementById("taula").innerHTML= taulaamortitzacio;
  
  
}

