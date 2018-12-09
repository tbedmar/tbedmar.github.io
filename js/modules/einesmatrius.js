//Toni Bedmar, INS Bellulla de Canovlelles, 2016

// Una prova amb mòduls

// utilitats per a calcular determinants



function det2 (a){
	var det = a[0][0]*a[1][1]-a[0][1]*a[1][0];

	return det;
	}




function det3 (a){
	
	var det= a[0][0]*a[1][1]*a[2][2];
	   det+= a[0][1]*a[1][2]*a[2][0];
	   det+= a[0][2]*a[1][0]*a[2][1];
	   det-= a[0][2]*a[1][1]*a[2][0];
	   det-= a[0][1]*a[1][0]*a[2][2];
	   det-= a[1][2]*a[2][1]*a[0][0];	
	
	return det;
	}


function det4 (a){

//desenvolupa pels adjunts de la primera fila

	//Hauria de buscar una forma alternativa de trobar els menors, fent ús de slice...	
	var menor00= new Array(3)
		for (var i=0; i<3; i++){
			menor00[i]=[a[i+1][1],a[i+1][2],a[i+1][3]]; 
			}

	var menor01= new Array(3);
		for (var i=0; i<3; i++){
			menor01[i]=[a[i+1][0],a[i+1][2],a[i+1][3]]; 
			}
 
	var menor02= new Array(3);
		for (var i=0; i<3; i++){
			menor02[i]=[a[i+1][0],a[i+1][1],a[i+1][3]]; 
			}
		
	var menor03= new Array(3);
		for (var i=0; i<3; i++){
			menor03[i]=[a[i+1][0],a[i+1][1],a[i+1][2]]; 
			}
		

	var det= a[0][0]*det3(menor00)-a[0][1]*det3(menor01)+a[0][2]*det3(menor02)-a[0][3]*det3(menor03);
		
		return det;

}


