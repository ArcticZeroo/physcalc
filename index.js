//PVCR Calculations    
	function solve(){
var solved = false
var circuit = new Object();
    circuit.power = document.getElementById("power").value;
    circuit.voltage = document.getElementById("voltage").value;
    circuit.currentt = document.getElementById("current").value;
    circuit.resistance = document.getElementById("resistance").value;
// Outputs original values into the console for debugging
    console.log("Original Values: Current, " + circuit.currentt + "; Voltage, " + circuit.voltage + "; Power, " + circuit.power + "; Resistance, " + circuit.resistance)
//Converts to correct size
	var curSize = 1
	if(document.getElementById("currentConversion").value == "micro"){
		curSize = 1000000
	}
	else{
		curSize = 1
	}
	circuit.currentt =  circuit.currentt / curSize
	if(circuit.power == 0 && circuit.resistance == 0 && circuit.currentt == 0 && circuit.voltage == 0){
		alert("No information submitted, solve failed!")
	}
    if(circuit.power != 0){
        if(circuit.voltage != 0){
            console.warn("Power and Voltage running, time is " + Date())
            circuit.currentt = circuit.power/circuit.voltage
            console.log("New Value of Current: " + circuit.currentt)
            circuit.resistance = circuit.voltage/circuit.currentt
            console.log("New Value of Resistance: " + circuit.resistance)        
            document.getElementById("current").value = circuit.currentt
            document.getElementById("resistance").value = circuit.resistance
            solved = true;
        }
        else if(circuit.currentt != 0){
                        console.warn("Power and Current running, time is " + Date())
            circuit.voltage = circuit.power/circuit.currentt
            console.log("New Value of Voltage: " + circuit.voltage)
            circuit.resistance = circuit.voltage/circuit.currentt
            console.log("New Value of Resistance: " + circuit.resistance)        
            document.getElementById("voltage").value = circuit.voltage
            document.getElementById("resistance").value = circuit.resistance
            solved = true;
        }
        else{
            alert("Not enough information! Fill in at least 2 boxes and try again!");
            solved = true;
        }
    }
    if(circuit.currentt != 0 && solved == false){
        if(circuit.voltage != 0){
            console.warn("Current and Voltage running, time is " + Date())
            circuit.power = circuit.currentt*circuit.voltage
            console.log("New Value of Current: " + circuit.currentt)
            circuit.resistance = circuit.voltage/circuit.currentt
            console.log("New Value of Resistance: " + circuit.resistance)        
            document.getElementById("power").value = circuit.power
            document.getElementById("resistance").value = circuit.resistance
            solved = true;
        }
        else if(circuit.resistance != 0){
            console.warn("Current and Resistance running, time is " + Date())
            circuit.voltage = circuit.currentt*circuit.resistance
            console.log("New Value of Voltage: " + circuit.voltage)
            circuit.power = circuit.voltage*circuit.currentt
            console.log("New Value of Power: " + circuit.power)        
            document.getElementById("power").value = circuit.power
            document.getElementById("voltage").value = circuit.voltage
            solved = true;
        }
        else{
            alert("Not enough information! Fill in at least 2 boxes and try again!")
            solved = true;
        }
    };
    if(circuit.resistance != 0 && solved == false){
        if(circuit.voltage != 0){
console.warn("Resistance and Voltage running, time is " + Date())
            circuit.currentt = circuit.voltage/circuit.resistance
            console.log("New Value of Current: " + circuit.currentt)
            circuit.power = circuit.voltage*circuit.currentt
			console.log("New Value of Power: " + circuit.power)
			document.getElementById("current").value = circuit.currentt
            document.getElementById("power").value = circuit.power
			solved = true;
        }
        else{
            alert("Not enough information! Fill in at least 2 boxes and try again!")
            solved = true;
        }
    }
    if(solved = false){
        alert("Solve failed!")
    }
}
//Energy Calculation
function energy(){
	var rating = document.getElementById("powerKWH").value;
	var unit = document.getElementById("KWHConversion").value;
	var seconds = document.getElementById("seconds").value;
	var minutes = document.getElementById("minutes").value * 60;
	var hours = document.getElementById("hours").value * 3600;
	var days = document.getElementById("days").value * 86400;
	var months = document.getElementById("months").value * 2592000;
	var years = document.getElementById("years").value * 31536000;
	var price = document.getElementById("ppKWH").value;
	var solveStatus = false;
if(months < 0 || days < 0 || years < 0 || hours < 0 || minutes < 0 || seconds < 0){
	alert("The calculation failed due to negative numbers! Please fix and try again.");
	var solveStatus = true;
	var usage = NaN;
}
else if(months == 0 && days == 0 && years == 0 && hours == 0 && minutes == 0 && seconds == 0){
	alert("No values were entered! Please fix and try again.");
	var solveStatus = true;
	var usage = NaN;
}
else{
	var usage = (rating*seconds)+(rating*minutes)+(rating*hours)+(rating*days)+(rating*months)+(rating*years)
}
if(unit == "kwh" && solveStatus == false){
	var usage = usage / 3600000
	document.getElementById("unit").innerHTML = "KwH";
	document.getElementById("usage").value = usage;
	}
else{
	document.getElementById("unit").innerHTML = "J";
	document.getElementById("usage").value = usage;
}
if(solveStatus == false && price > 0){
	if(unit == "kwh"){
		var cost = price*usage
		document.getElementById("cost").value = "$" + cost
	}	
}
}
function togglediv1(id, id2) {
    var div = document.getElementById(id);
	var div2 = document.getElementById(id2)
    div.style.display = div.style.display == "none" ? "block" : "none";
	div2.value = div2.value == "-" ? "+" : "-";
}
// Loads roboto font
WebFontConfig = {
    google: { families: [ 'Roboto::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
