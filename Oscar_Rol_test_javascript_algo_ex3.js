function f31(){ //Functions to collect the lines of the sudoku

    for(j = 0; j < 9; j++){
        
        if(f21(to_verify[j]) == false){ 

            return to_verify[j]; //This return always drop something and when there is no wrong lines, the return drops the last line

        }

    }

}

function f32(){ //Functions to collect the columns of the sudoku || Suddenly stop working, maybe with more time I could see the missing error

    var columns = new Array(9)

    for(i = 0; i < 9; i++){

        columns[i] = new Array(9)

        columns[i].splice(0, 9)

        for(k = 0; k < 9; k++){

            columns[i].push(to_verify[k][i])
    
        }

    }

    for(n = 0; n < 9; n++){

        if(f21(columns[n]) == false){

            console.log(columns[n])

            return columns[n];
    
        }

    }

}

/*function f33(){

    var regions = new Array(9)

    for(g = 0; g < 9; g++){

        for(u = 0; u < 3; u++){

            regions[g] = new Array(9)

            for(q = 0; q < 3; q++){

                regions[g].push(to_verify[u][q])

            }

        }

    }

    //for(g = 0; g < 9; g++){

        //regions[g].push(to_verify[g].substr(0,2))

        //for(u = 0; u < 3; u++){

            

        //}

    //}
    //console.log(to_verify[0].join(''))
    console.log(regions)


    for(g = 0; g < 9; g++){

        regions[g] = new Array(9)

        for(u = 0; u < 3; u++){

            regions[g].push(to_verify[g][u])

        }

    }

    console.log(regions[0][0])

}

f33()*/

// HTMl table created dinamically, adding the components

var body = document.getElementsByTagName("body")[0];

var table   = document.createElement("table");
 
var tblBody = document.createElement("tbody");

var row = document.createElement("tr");

var row2 = document.createElement("tr");

var header = document.createElement("th");

var headerText = document.createTextNode("Error with the line: ");

header.appendChild(headerText);

row.appendChild(header);

var line = f31()

    for(o = 0; o < 9; o++){ //Adding the cells dinamyically

        var num = document.createElement("td");
    
        var numText = document.createTextNode(line[o]);

        num.appendChild(numText);
        row.appendChild(num);
    
    }

var header2 = document.createElement("th");

var headerText2 = document.createTextNode("Error with the column: ");

header2.appendChild(headerText2);

row2.appendChild(header2);


var column = f32()

    for(l = 0; l < 9; l++){

        var num2 = document.createElement("td");

        var numText2 = document.createTextNode(column[l]);

        num2.appendChild(numText2);
        row2.appendChild(num2);

    }

tblBody.appendChild(row);

tblBody.appendChild(row2);

table.appendChild(tblBody);

body.appendChild(table);

