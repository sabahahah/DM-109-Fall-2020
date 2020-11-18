var taInput = "", divOutput;
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
	 values = FwAlgo();
	for(var i = 0; i < 4; i++)
	{
		divOutput.innerHTML+=values[i] + '<br />';

	}
	//Get Input from
}//end run

function FwAlgo(){
	var value = taInput.value.split('\n');

	var graph = [];
	for (i = 0; i < 4; ++i) {
		graph.push([]);
		for (j = 0; j < 4; ++j)
			graph[i].push(i == j ? 0 : 9999999);
	}

	for (i = 1; i < 4; ++i) {
		graph[0][i] = graph[i][0] = parseInt(value[i]);
	}

	for (k = 0; k < 4; ++k) {
		for (i = 0; i < 4; ++i) {
			for (j = 0; j < 4; ++j) {
				if (graph[i][j] > graph[i][k] + graph[k][j])
					graph[i][j] = graph[i][k] + graph[k][j]
			}
		}
	}

	return graph;
	// refernce : https://titanwolf.org/Network/Articles/Article?AID=d244e440-0d8c-4d97-9965-8b6c4b3b3b55#gsc.tab=0
}//end sol1
