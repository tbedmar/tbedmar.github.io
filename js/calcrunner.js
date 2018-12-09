//Calculadora runner
//Toni Bedmar, INS Bellulla de Canovlelles, 2015
// Funció que calcula el pas 
function calculapas() {
  
  var d= document.getElementById("distancia").value;
  var h= document.getElementById("horas").value;
  var m= document.getElementById("minutos").value;
    if( isNaN(d) ) {
      alert("Distancia no válida, introduce un número");
      return;      
      }
    if( isNaN(h) ) {
      alert("Tiempo no válido, introduce un número entero");
      return;      
      }
    if( isNaN(m) ) {
      alert("Tiempo no válido, introduce un número entero");
      return;      
      }
  h= parseInt(h);
  m= parseInt(m);
  t=60 * h + m;
  pas= t / d;
  pas0 = parseInt(pas); 
  pas1 = 60 *(pas - pas0);
  pas2 = parseInt(pas1); 
  document.getElementById("resultado").style.display = "block";
  document.getElementById("respasminuts").innerHTML="Tienes que correr a " + pas0 + " minutos y " + pas2 + " segundos el Km";
   
}

// Funció que calcula la distancia 
function distancia() {
  
  var d2= document.getElementById("distancia2").value;
  var mpas= document.getElementById("minutospaso").value;
  var spas= document.getElementById("segundospaso").value;
    if( isNaN(d2) ) {
      alert("Distancia no válida, introduce un número");
      return;      
      }
    if( isNaN(mpas) ) {
      alert("Introduce un número entero para los minutos");
      return;      
      }
   if( isNaN(spas) ) {
      alert("Introduce un número entero para los segundos");
      return;      
      }
  mpas= parseInt(mpas);
  spas= parseInt(spas);
  d2= parseInt(d2);
  mpas= mpas + (spas / 60);
  tempstotal= (mpas * d2);
  hores= parseInt(tempstotal / 60);
  minuts0= (tempstotal - 60 * hores);
  minuts= parseInt(tempstotal - 60 * hores);
  segons= parseInt(60 * (minuts0 - minuts));
  if(hores < 1) {
  document.getElementById("resultado2").style.display = "block";
  document.getElementById("respasminuts2").innerHTML="Tardarás " + minuts + " minutos y " + segons + " segundos";
  return;
  }
  document.getElementById("resultado2").style.display = "block";
  document.getElementById("respasminuts2").innerHTML="Tardarás " + hores + " horas, " + minuts + " minutos y " + segons + " segundos";
  
  
}

