
//Toni Bedmar, INS Bellulla de Canovlelles, 2016

// Càlcul de la TAE
 
function calculacapital() { 
  
  var c= document.getElementById("capital").value;
  var cf= document.getElementById("capitalfinal").value;
  var i= document.getElementById("interes").value;
  var k= document.getElementById("frequencia").value;
  var n= document.getElementById("anys").value;
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
  
  c= parseFloat(c);
  cf= parseFloat(cf);
  i= parseFloat(i);
  n= parseFloat(n);
  k= parseInt(k);
  
  index= 1 + i / (k*100)
  indexelevat = Math.pow(index,n*k)
  cf= c * indexelevat
  cf= Math.round(cf * 100) / 100
  
  document.getElementById("capitalfinal").value= cf;
  document.getElementById("resultado").style.display = "block";
  document.getElementById("rescapitalfinal").innerHTML="El capital final és " + cf + " €";
  document.getElementById("rescapital").innerHTML="";
  document.getElementById("resanys").innerHTML="";
}

function calculacapitalfinal() { 
  
  var c= document.getElementById("capital").value;
  var cf= document.getElementById("capitalfinal").value;
  var i= document.getElementById("interes").value;
  var k= document.getElementById("frequencia").value;
  var n= document.getElementById("anys").value;
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
  
  c= parseFloat(c);
  cf= parseFloat(cf);
  i= parseFloat(i);
  n= parseFloat(n);
  k= parseInt(k);
  
  index= 1 + i / (k*100)
  indexelevat = Math.pow(index,n*k)
  c= cf / indexelevat
  c= Math.round(c * 100) / 100
  
  document.getElementById("capital").value= c;
  document.getElementById("resultado").style.display = "block";
  document.getElementById("rescapital").innerHTML="El capital inicial era " + c + " €";
  document.getElementById("rescapitalfinal").innerHTML="";
  document.getElementById("resanys").innerHTML="";
}

function calculaanys() { 
  
  var c= document.getElementById("capital").value;
  var cf= document.getElementById("capitalfinal").value;
  var i= document.getElementById("interes").value;
  var k= document.getElementById("frequencia").value;
  var n= document.getElementById("anys").value;
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
  
  c= parseFloat(c);
  cf= parseFloat(cf);
  i= parseFloat(i);
  n= parseFloat(n);
  k= parseInt(k);
  
  index= 1 + i / (k*100)
  n= Math.log (cf /c)
  n= n/ Math.log (index)
  n= n/k
  nenter = Math.floor(n);
  mesos = (n - nenter)*12
  mesos = Math.round(mesos * 10) / 10
  n= Math.round(n * 10000) / 10000
  
  document.getElementById("anys").value= n;
  document.getElementById("resultado").style.display = "block";
  document.getElementById("resanys").innerHTML="El nombre d'anys és " + n + " = "+ nenter +" anys i "+mesos+" mesos";
  document.getElementById("rescapitalfinal").innerHTML="";
  document.getElementById("rescapital").innerHTML="";
}


