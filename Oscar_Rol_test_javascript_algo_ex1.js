var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6";
array_number[1]= "9 8 3 7 6 2 5 1 4";
array_number[2]= "1 5 6 8 9 4 7 2 3";
array_number[3]= "2 3 9 1 8 5 4 6 7";
array_number[4]= "7 4 1 6 3 9 2 5 8";
array_number[5]= "5 6 8 2 4 7 1 3 9";
array_number[6]= "8 7 2 9 1 3 6 4 5";
array_number[7]= "3 9 5 4 2 6 8 7 1";
array_number[8]= "6 1 4 5 7 8 3 9 6";

var to_verify = new Array(9);

var bodyTable = document.getElementById("bodyTable")

function f11(){  //Changing 1 dimension array to the "to_verify" 2 dimensional array

    for(let x = 0; x < 9; x++){

        to_verify[x] = array_number[x].split(" ")

    }

}

function f12(){ //Creating the Javascript table dinamycally

    var body = document.getElementsByTagName("body")[0];

    var table   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var x = 0; x < 9; x++) {
        
        var row = document.createElement("tr");

        for (var y = 0; y < 9; y++) {
       
            var num = document.createElement("td");
            var numText = document.createTextNode(to_verify[x][y]); //Adding the numbers
            num.appendChild(numText);
            row.appendChild(num);
       
        }

        tblBody.appendChild(row);

    }

    table.appendChild(tblBody);

    body.appendChild(table);
        
}

f11()

f12()

