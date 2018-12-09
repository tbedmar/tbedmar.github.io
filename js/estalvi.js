//Calculadora runner
//Toni Bedmar, INS Bellulla de Canovlelles, 2016

  

// Càlcul de la quota del crèdit 
function calculaaportacio() { 
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
  aportacio= c * (index-1)/ (index * (indexelevat-1) ) 
  aportacio= Math.round(aportacio * 100) / 100

  document.getElementById("aportacio").value= aportacio;
  
  document.getElementById("resultado").style.display = "block";
  document.getElementById("resaportacio").innerHTML="L'aportació al pla d'estalvi és de  " + aportacio + "€";
   

  
}

function calculaestalvi() { 
  var a= document.getElementById("aportacio").value;     
  var n= document.getElementById("anys").value;
  var i= document.getElementById("interes").value;
  var k= document.getElementById("frequencia").value;

  
    if( isNaN(a) ) {
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
  a= parseInt(a);
  n= parseInt(n);
  i= parseFloat(i);
  k= parseInt(k);
  index= 1 + i / (k*100)
  indexelevat = Math.pow(index,(n*k))
  capital= a * index * (indexelevat-1) / (index-1)
  capital= Math.round(capital * 100) / 100
 
  document.getElementById("capital").value= capital;
  document.getElementById("resultado").style.display = "block";
  document.getElementById("resestalvi").innerHTML="El capital estalviat és de  " + capital + "€";
   

  
}


