var a = to_verify[2]; //Variable to verify it works with one of the lines of the sudoku
var counter = 0 //Counting the times a number is been repeting
var is_correct = true //With this variable we can set if the line or column or string is corret or not

function f21(a){

    for(x = 0; x < 9; x++){

        if(Number.isInteger(parseInt(a[x]))){

            for(y = 0; y < 9; y++){

                if(a[x] == a[y]){

                    counter += 1

                }

            }

            if(counter >= 2){ //If the counter is more than 2 -> the loop see the number repeating itself and another time 

                is_correct = false 
                return is_correct;
                
    
            }

            counter = 0


        }else{

            console.log("No es un numero")
            break;

        }

    }
    
}

//f21(a)