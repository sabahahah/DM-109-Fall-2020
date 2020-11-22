var taInput, divOutput;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
	console.log("Running Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
	FwAlgo();
	//Get Input from 
}//end run

function FwAlgo(){
  var input_array = [];

  var input_val = taInput.value;

  var array_1 = input_val.split('\n');

  

  for (
    var i = 0; 
    i < array_1.length;
     i++
    ) 
  {

    input_array[i] = array_1[i].split(',');

  }

  var box = input_array;

  for(
    var i = 0; 
    i < input_array.length; 
    i++
    )
  {

    for(
      var j=0;
      j<input_array.length;
      j++
      )
    {

      box[i][j] = parseInt(input_array[i][j]);

    }

  }


  var count = box.length;

  var result = box;


  for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }
}
  function display(result){

  var count = result.length;

  for (
    var i = 0;
     i< count;
      i++)
  {

    divOutput.innerHTML += "<br />";

    for (
      var j = 0;
      j<count;
      j++
      )
    {

      divOutput.innerHTML += result[i][j];

      divOutput.innerHTML += " ";

    }

  }
	//Mention reference where you got the solution
  // Ref : Book
}//end sol1
