var taInput, divOutput;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
	FwAlgo();
	divOutput.innerHTML+="Add your output here. Remove this!"
	//Get Input from 
}//end run

function FwAlgo(){
	//Implement your solution here


	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1
