function valid(){
	let x = document.forms["valid"];	
	for (var i = 1; i<x.length-3;i++) {
		if (x[i].value == ""){
			document.getElementById("validfeil").innerHTML="DU MÅ FYLLE UT HELE SKJEMAET!";
			return false;	
		}
	}
	if (x["fname"].value.length<2){
		document.getElementById("validfeil").innerHTML="Fornavnet må lenger!";
		return false;
	} 
	if (x["lname"].value.length<2){
		document.getElementById("validfeil").innerHTML="Etternavnet må lenger!";
		return false;
	} 
	if (x["adresse"].value.length<4){
		document.getElementById("validfeil").innerHTML="Ugyldig adresse";
		return false;
	} 
	if (x["postnr"].value<1000 ||x["postnr"].value>9999){
		document.getElementById("validfeil").innerHTML="Du må ha 4 siffer i Postnummer";
		return false;
	} 
	return true;
}
