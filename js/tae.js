
//Toni Bedmar, INS Bellulla de Canovlelles, 2016

// Càlcul de la TAE
 
function calculaTAE() { 
  
  var i= document.getElementById("interes").value;
  var k= document.getElementById("frequencia").value;
  var t= document.getElementById("TAE").value;
    if( isNaN(t) ) {
      alert("T.A.E. no vàlida, introdueix un nombre");
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
  
  i= parseFloat(i);
  t= parseFloat(i);
  k= parseInt(k);
  index= 1 + i / (k*100)
  indexelevat = Math.pow(index,k)
  t= 100 * (indexelevat-1)
  t= Math.round(t * 10000) / 10000
  document.getElementById("TAE").value=t;
  document.getElementById("resultado").style.display = "block";
  document.getElementById("restae").innerHTML="La T.A.E. és del " + t+ " %";
}

function calculaINTERES() {   
  var i= document.getElementById("interes").value;
  var k= document.getElementById("frequencia").value;
  var t= document.getElementById("TAE").value; 
    if( isNaN(t) ) {
      alert("T.A.E. no vàlida, introdueix un nombre");
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
  
  i= parseFloat(i);
  t= parseFloat(t);
  k= parseInt(k);
  i=1+(t/100)	
  i= Math.pow(i,1/k);
  i=i-1
  i=100*k*i
  i= Math.round(i * 10000) / 10000
  document.getElementById("interes").value=i;
  document.getElementById("resultado").style.display = "block";
  document.getElementById("resinteres").innerHTML="L'interès és del " + i + " %";
}


