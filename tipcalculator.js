// Functions
const calculateTip = () => {
	//Store data input
	let billAmount = document.getElementById("amount").value;
	let serviceQuality = document.getElementById("service").value;
	let numPpl = document.getElementById("people").value
	
// 	Validations
	//Checks to see if billAmount or serviceQuality is empty 	
	if(billAmount === '' || serviceQuality == 0){
		return window.alert('Bill amount or service quality is empty!');
	}
	
	//Checks if ppl is empty or less than or equal to 1
	if(numPpl === '' || numPpl <= 1){
		numPpl = 1; 
		
		document.getElementById('each').style.display = 'none';
	} else {
		document.getElementById('each').style.display = 'block'
	}
	
	//Tip math equation 	
	let total = (billAmount * serviceQuality) / numPpl;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);
	
	//Displays tip
	document.getElementById('totalTip').style.display = "block";
	document.getElementById('tip').innerHTML = total;
};


// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// click calling function
document.getElementById("calculate").onclick = function (){
	calculateTip();
};