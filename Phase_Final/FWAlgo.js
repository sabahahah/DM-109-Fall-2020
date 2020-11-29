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
  divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>";
  FwAlgo();
  //Get Input from 
}//end run

function FwAlgo(){
  alert('Please wait its working');
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
  var matrix_11 = [];
  var matrix_12 = [];
  var matrix_13 = [];
  var matrix_14 = [];
  var matrix_15 = [];
  var matrix_16 = [];
  var matrix_17 = [];
  var matrix_18 = [];
  var matrix_19 = [];
  var matrix_20 = [];
  var matrix_21 = [];
  var matrix_22 = [];
  var matrix_23 = [];
  var matrix_24 = [];
  var matrix_25 = [];
  var matrix_26 = [];
  var matrix_27 = [];
  var matrix_28 = [];
  var matrix_29 = [];
  var matrix_30 = [];
  var matrix_31 = [];
  var matrix_32 = [];
  var matrix_33 = [];
  var matrix_34 = [];
  var matrix_35 = [];
  var matrix_36 = [];
  var matrix_37 = [];
  var matrix_38 = [];
  var matrix_39 = [];
  var matrix_40 = [];


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

/* Current Plotly.js version */
console.log( Plotly.BUILD );
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



divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 11";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_11[i] = [];
    for(var j=36; j<40; j++) {
      var numb = matrix_100[i][j];
      matrix_11[i][j] = numb;

    }   
}

for(var i=0; i<matrix_11.length; i++) {
  matrix_11[i] = matrix_11[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_11);
var count = matrix_11.length;
var result = matrix_11;

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
divOutput.innerHTML += "Extracted Array warshall applied 12";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_12[i] = [];
    for(var j=0; j<4; j++) {
      var numb = matrix_100[i][j];
      matrix_12[i][j] = numb;

    }   
}

for(var i=0; i<matrix_12.length; i++) {
  matrix_12[i] = matrix_12[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_12);
var count = matrix_12.length;
var result = matrix_12;

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
divOutput.innerHTML += "Extracted Array warshall applied 13";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_13[i] = [];
    for(var j=4; j<8; j++) {
      var numb = matrix_100[i][j];
      matrix_13[i][j] = numb;

    }   
}

for(var i=0; i<matrix_13.length; i++) {
  matrix_13[i] = matrix_13[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_13);
var count = matrix_13.length;
var result = matrix_13;

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
divOutput.innerHTML += "Extracted Array warshall applied 14";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_14[i] = [];
    for(var j=8; j<12; j++) {
      var numb = matrix_100[i][j];
      matrix_14[i][j] = numb;

    }   
}

for(var i=0; i<matrix_14.length; i++) {
  matrix_14[i] = matrix_14[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_14);
var count = matrix_14.length;
var result = matrix_14;

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
divOutput.innerHTML += "Extracted Array warshall applied 15";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_15[i] = [];
    for(var j=12; j<16; j++) {
      var numb = matrix_100[i][j];
      matrix_15[i][j] = numb;

    }   
}

for(var i=0; i<matrix_15.length; i++) {
  matrix_15[i] = matrix_15[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_15);
var count = matrix_15.length;
var result = matrix_15;

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
divOutput.innerHTML += "Extracted Array warshall applied 16";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_16[i] = [];
    for(var j=16; j<20; j++) {
      var numb = matrix_100[i][j];
      matrix_16[i][j] = numb;

    }   
}

for(var i=0; i<matrix_16.length; i++) {
  matrix_16[i] = matrix_16[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_16);
var count = matrix_16.length;
var result = matrix_16;

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
divOutput.innerHTML += "Extracted Array warshall applied 17";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_17[i] = [];
    for(var j=20; j<24; j++) {
      var numb = matrix_100[i][j];
      matrix_17[i][j] = numb;

    }   
}

for(var i=0; i<matrix_17.length; i++) {
  matrix_17[i] = matrix_17[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_17);
var count = matrix_17.length;
var result = matrix_17;

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
divOutput.innerHTML += "Extracted Array warshall applied 18";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_18[i] = [];
    for(var j=24; j<28; j++) {
      var numb = matrix_100[i][j];
      matrix_18[i][j] = numb;

    }   
}

for(var i=0; i<matrix_18.length; i++) {
  matrix_18[i] = matrix_18[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_18);
var count = matrix_18.length;
var result = matrix_18;

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
divOutput.innerHTML += "Extracted Array warshall applied 19";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_19[i] = [];
    for(var j=28; j<32; j++) {
      var numb = matrix_100[i][j];
      matrix_19[i][j] = numb;

    }   
}

for(var i=0; i<matrix_19.length; i++) {
  matrix_19[i] = matrix_19[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_19);
var count = matrix_19.length;
var result = matrix_19;

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
divOutput.innerHTML += "Extracted Array warshall applied 20";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_20[i] = [];
    for(var j=32; j<36; j++) {
      var numb = matrix_100[i][j];
      matrix_20[i][j] = numb;

    }   
}

for(var i=0; i<matrix_20.length; i++) {
  matrix_20[i] = matrix_20[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_20);
var count = matrix_20.length;
var result = matrix_20;

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
divOutput.innerHTML += "Extracted Array warshall applied 21";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_21[i] = [];
    for(var j=36; j<40; j++) {
      var numb = matrix_100[i][j];
      matrix_21[i][j] = numb;

    }   
}

for(var i=0; i<matrix_21.length; i++) {
  matrix_21[i] = matrix_21[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_21);
var count = matrix_21.length;
var result = matrix_21;

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
divOutput.innerHTML += "Extracted Array warshall applied 22";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_22[i] = [];
    for(var j=0; j<4; j++) {
      var numb = matrix_100[i][j];
      matrix_22[i][j] = numb;

    }   
}

for(var i=0; i<matrix_22.length; i++) {
  matrix_22[i] = matrix_22[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_22);
var count = matrix_22.length;
var result = matrix_22;

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
divOutput.innerHTML += "Extracted Array warshall applied 23";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_23[i] = [];
    for(var j=4; j<8; j++) {
      var numb = matrix_100[i][j];
      matrix_23[i][j] = numb;

    }   
}

for(var i=0; i<matrix_23.length; i++) {
  matrix_23[i] = matrix_23[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_23);
var count = matrix_23.length;
var result = matrix_23;

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
divOutput.innerHTML += "Extracted Array warshall applied 24";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_24[i] = [];
    for(var j=12; j<16; j++) {
      var numb = matrix_100[i][j];
      matrix_24[i][j] = numb;

    }   
}

for(var i=0; i<matrix_24.length; i++) {
  matrix_24[i] = matrix_24[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_24);
var count = matrix_24.length;
var result = matrix_24;

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
divOutput.innerHTML += "Extracted Array warshall applied 25";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_25[i] = [];
    for(var j=16; j<20; j++) {
      var numb = matrix_100[i][j];
      matrix_25[i][j] = numb;

    }   
}

for(var i=0; i<matrix_25.length; i++) {
  matrix_25[i] = matrix_25[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_25);
var count = matrix_25.length;
var result = matrix_25;

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
divOutput.innerHTML += "Extracted Array warshall applied 26";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_26[i] = [];
    for(var j=20; j<24; j++) {
      var numb = matrix_100[i][j];
      matrix_26[i][j] = numb;

    }   
}

for(var i=0; i<matrix_26.length; i++) {
  matrix_26[i] = matrix_26[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_26);
var count = matrix_26.length;
var result = matrix_26;

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
divOutput.innerHTML += "Extracted Array warshall applied 27";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_27[i] = [];
    for(var j=24; j<28; j++) {
      var numb = matrix_100[i][j];
      matrix_27[i][j] = numb;

    }   
}

for(var i=0; i<matrix_27.length; i++) {
  matrix_27[i] = matrix_27[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_27);
var count = matrix_27.length;
var result = matrix_27;

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
divOutput.innerHTML += "Extracted Array warshall applied 28";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_28[i] = [];
    for(var j=28; j<32; j++) {
      var numb = matrix_100[i][j];
      matrix_28[i][j] = numb;

    }   
}

for(var i=0; i<matrix_28.length; i++) {
  matrix_28[i] = matrix_28[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_28);
var count = matrix_28.length;
var result = matrix_28;

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
divOutput.innerHTML += "Extracted Array warshall applied 29";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_29[i] = [];
    for(var j=32; j<36; j++) {
      var numb = matrix_100[i][j];
      matrix_29[i][j] = numb;

    }   
}

for(var i=0; i<matrix_29.length; i++) {
  matrix_29[i] = matrix_29[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_29);
var count = matrix_29.length;
var result = matrix_29;

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
divOutput.innerHTML += "Extracted Array warshall applied 30";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_30[i] = [];
    for(var j=36; j<40; j++) {
      var numb = matrix_100[i][j];
      matrix_30[i][j] = numb;

    }   
}

for(var i=0; i<matrix_30.length; i++) {
  matrix_30[i] = matrix_30[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_30);
var count = matrix_30.length;
var result = matrix_30;

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
divOutput.innerHTML += "Extracted Array warshall applied 31";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_31[i] = [];
    for(var j=0; j<4; j++) {
      var numb = matrix_100[i][j];
      matrix_31[i][j] = numb;

    }   
}

for(var i=0; i<matrix_31.length; i++) {
  matrix_31[i] = matrix_31[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_31);
var count = matrix_31.length;
var result = matrix_31;

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
divOutput.innerHTML += "Extracted Array warshall applied 32";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_32[i] = [];
    for(var j=4; j<8; j++) {
      var numb = matrix_100[i][j];
      matrix_32[i][j] = numb;

    }   
}

for(var i=0; i<matrix_32.length; i++) {
  matrix_32[i] = matrix_32[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_32);
var count = matrix_32.length;
var result = matrix_32;

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
divOutput.innerHTML += "Extracted Array warshall applied 33";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_33[i] = [];
    for(var j=8; j<12; j++) {
      var numb = matrix_100[i][j];
      matrix_33[i][j] = numb;

    }   
}

for(var i=0; i<matrix_33.length; i++) {
  matrix_33[i] = matrix_33[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_33);
var count = matrix_33.length;
var result = matrix_33;

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
divOutput.innerHTML += "Extracted Array warshall applied 34";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_34[i] = [];
    for(var j=12; j<16; j++) {
      var numb = matrix_100[i][j];
      matrix_34[i][j] = numb;

    }   
}

for(var i=0; i<matrix_34.length; i++) {
  matrix_34[i] = matrix_34[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_34);
var count = matrix_34.length;
var result = matrix_34;

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
divOutput.innerHTML += "Extracted Array warshall applied 35";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_35[i] = [];
    for(var j=16; j<20; j++) {
      var numb = matrix_100[i][j];
      matrix_35[i][j] = numb;

    }   
}

for(var i=0; i<matrix_35.length; i++) {
  matrix_35[i] = matrix_35[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_35);
var count = matrix_35.length;
var result = matrix_35;

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
divOutput.innerHTML += "Extracted Array warshall applied 36";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_36[i] = [];
    for(var j=20; j<24; j++) {
      var numb = matrix_100[i][j];
      matrix_36[i][j] = numb;

    }   
}

for(var i=0; i<matrix_36.length; i++) {
  matrix_36[i] = matrix_36[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_36);
var count = matrix_36.length;
var result = matrix_36;

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
divOutput.innerHTML += "Extracted Array warshall applied 37";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_37[i] = [];
    for(var j=24; j<28; j++) {
      var numb = matrix_100[i][j];
      matrix_37[i][j] = numb;

    }   
}

for(var i=0; i<matrix_37.length; i++) {
  matrix_37[i] = matrix_37[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_37);
var count = matrix_37.length;
var result = matrix_37;

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
divOutput.innerHTML += "Extracted Array warshall applied 38";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_38[i] = [];
    for(var j=28; j<32; j++) {
      var numb = matrix_100[i][j];
      matrix_38[i][j] = numb;

    }   
}

for(var i=0; i<matrix_38.length; i++) {
  matrix_38[i] = matrix_38[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_38);
var count = matrix_38.length;
var result = matrix_38;

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
divOutput.innerHTML += "Extracted Array warshall applied 39";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_39[i] = [];
    for(var j=32; j<36; j++) {
      var numb = matrix_100[i][j];
      matrix_39[i][j] = numb;

    }   
}

for(var i=0; i<matrix_39.length; i++) {
  matrix_39[i] = matrix_39[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_39);
var count = matrix_39.length;
var result = matrix_39;

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
divOutput.innerHTML += "Extracted Array warshall applied 40";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    matrix_40[i] = [];
    for(var j=36; j<40; j++) {
      var numb = matrix_100[i][j];
      matrix_40[i][j] = numb;

    }   
}

for(var i=0; i<matrix_40.length; i++) {
  matrix_40[i] = matrix_40[i].filter(function (el) {
    return el != null;
  });
}



console.log(matrix_40);
var count = matrix_40.length;
var result = matrix_40;

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
timeTaken = performance.now();
divOutput.innerHTML += "<br />Total Timetaken " + timeTaken;
alert("<br />Total Timetaken " + timeTaken);

TESTER = document.getElementById('total');
  Plotly.plot( TESTER, [{
  x: timeTaken, 
  y: matrix_100 }], { 
margin: { t: 0 } }, {showSendToCloud:true} );

}


