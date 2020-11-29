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
  var matrix_100 = [];
  var matrix_1 = [];
  var matrix_2 = [];
  var matrix_3 = [];
  var matrix_4 = [];
  var matrix_5 = [];
  var matrix_6 = [];
  var matrix_7 = [];
  var matrix_8 = [];
  var matrix_9 = [];
  var matrix_10 = [];

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


  

divOutput.innerHTML += "Random Array";
divOutput.innerHTML += "<br />";

for(var i=0; i<100; i++) {
    matrix_100[i] = [];
    divOutput.innerHTML += "[";
    for(var j=0; j<100; j++) {
      var numb = '';
      rand = Math.random();
      if (rand > 0.5) 
        numb = 1;
      else 
        numb = 0;
      matrix_100[i][j] = numb;
      divOutput.innerHTML += matrix_100[i][j] + ' ';
    }   
    divOutput.innerHTML += "]";
    divOutput.innerHTML += "<br />";
}




divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 1";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_1[i] = [];
    for(var j=0; j<4; j++) {
      var numb = matrix_100[i][j];
      matrix_1[i][j] = numb;
      //divOutput.innerHTML += matrix_1[i][j] + ' ';
    }   
}
console.log(matrix_1);
var count = matrix_1.length;
var result = matrix_1;
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

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 2";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_2[i] = [];
    for(var j=4; j<8; j++) {
      var numb = matrix_100[i][j];
      matrix_2[i][j] = numb;

    }   
}

for(var i=0; i<matrix_2.length; i++) {
  matrix_2[i] = matrix_2[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_2);
var count = matrix_2.length;
var result = matrix_2;

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

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 3";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_3[i] = [];
    for(var j=8; j<12; j++) {
      var numb = matrix_100[i][j];
      matrix_3[i][j] = numb;

    }   
}

for(var i=0; i<matrix_3.length; i++) {
  matrix_3[i] = matrix_3[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_3);
var count = matrix_3.length;
var result = matrix_3;

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


divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 4";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_4[i] = [];
    for(var j=12; j<16; j++) {
      var numb = matrix_100[i][j];
      matrix_4[i][j] = numb;

    }   
}

for(var i=0; i<matrix_4.length; i++) {
  matrix_4[i] = matrix_4[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_4);
var count = matrix_4.length;
var result = matrix_4;

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

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 5";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_5[i] = [];
    for(var j=16; j<20; j++) {
      var numb = matrix_100[i][j];
      matrix_5[i][j] = numb;

    }   
}

for(var i=0; i<matrix_5.length; i++) {
  matrix_5[i] = matrix_5[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_5);
var count = matrix_5.length;
var result = matrix_5;

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
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 6";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_6[i] = [];
    for(var j=20; j<24; j++) {
      var numb = matrix_100[i][j];
      matrix_6[i][j] = numb;

    }   
}

for(var i=0; i<matrix_6.length; i++) {
  matrix_6[i] = matrix_6[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_6);
var count = matrix_6.length;
var result = matrix_6;

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

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 7";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_7[i] = [];
    for(var j=24; j<28; j++) {
      var numb = matrix_100[i][j];
      matrix_7[i][j] = numb;

    }   
}

for(var i=0; i<matrix_7.length; i++) {
  matrix_7[i] = matrix_7[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_7);
var count = matrix_7.length;
var result = matrix_7;

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
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 8";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_8[i] = [];
    for(var j=28; j<32; j++) {
      var numb = matrix_100[i][j];
      matrix_8[i][j] = numb;

    }   
}

for(var i=0; i<matrix_8.length; i++) {
  matrix_8[i] = matrix_8[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_8);
var count = matrix_8.length;
var result = matrix_8;

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
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 9";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_9[i] = [];
    for(var j=32; j<36; j++) {
      var numb = matrix_100[i][j];
      matrix_9[i][j] = numb;

    }   
}

for(var i=0; i<matrix_9.length; i++) {
  matrix_9[i] = matrix_9[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_9);
var count = matrix_9.length;
var result = matrix_9;

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
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 10";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_10[i] = [];
    for(var j=36; j<40; j++) {
      var numb = matrix_100[i][j];
      matrix_10[i][j] = numb;

    }   
}

for(var i=0; i<matrix_10.length; i++) {
  matrix_10[i] = matrix_10[i].filter(function (el) {
    return el != null;
  });
}


console.log(matrix_10);
var count = matrix_10.length;
var result = matrix_10;

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









//DISPLAY
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

}//end sol1

alert('Performance Now : ' + performance.now());

}


