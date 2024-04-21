// import react library as React
 
// import the Connect Four CSS 

// declare class ConnectFour so it extends class React.Componenet
{     
    // declare the constructor receiving parameter props
    {
        // call method super() passing parameter props as an argument
        
        // initialize this.state object to include properties:
        // initialMatrix initialized to [[0, 0, 0, 0, 0, 0, 0],
        //                              [0, 0, 0, 0, 0, 0, 0],
        //                              [0, 0, 0, 0, 0, 0, 0],
        //                              [0, 0, 0, 0, 0, 0, 0],
        //                              [0, 0, 0, 0, 0, 0, 0],
        //                              [0, 0, 0, 0, 0, 0, 0]
        //                             ] 
        //
        // currentPlayer intialized to 1

        {
        };           
    }
    
    // define function fillbox, receives one parameter, e
    {
//console.log("fillBox");
        // Declare variable colValue set equal to function parseInt() of parameter e, object target, function getAttribute, passing as argument "data-value"

        // Call function this.setPiece, passing arguments 5 (because we have 6 rows, 0 - 5) and variable colValue 

        // Call method this.setState to update the state of property currentPlayer, if currently 1 then 2, if currently 2, then 1        
    }   
    
    // define function setPiece, receives two parameters, startCount and colValue
    {
//console.log("setPiece");
        // declare variable initialMatrix intialized to state property initialMatrix
        
        // Declare variable rows initialized to object document, method querySelectorAll, passing argument class ".grid-row"

        // write exception handling with try/catch to catch index out of bounds exception when array column is full 

            // If the element in array initialMatrix at indexes parameters startCount and colValue is NOT identical to 0
            
                // Decrement parameter startCount by 1

                // Call function this.setPiece, passing as arguments parameters startCount and colValue

            // Else
            
                // Declare variable currentRow initialized to array rows, index startCount, method querySelectorAll, passing as an argument class ".grid-box"
                
                // Modify currentRow, index colValue, object classlist, method add, passing as arguments "filled" and player${`this.state.currentPlayer}` 

                // Update array initialMatrix, indexes startCount and colValue, set equal to this.state.currentPlayer
                
                // If function call this.winCheck is true
                
                    // Display an alert dialog box with message "Player " + this.state.currentPlayer + " wins!"

                    // return true

        // catch with parameter e

            // Display an alert dialog box with message "Column full, select again"

        // Call function this.gameOverCheck
    }    
    
    // Define function winCheck, no parameters
    {
//console.log("winCheck");
        // Write decision making logic, if function call this.checkHorizontal, this.checkVertical, this.checkPositiveDiagonal, or this.checkNegativeDiagonal is true, return true
        // else return false
    }
    
    // Define function checkHorizontal, no parameters
    {
//console.log("checkHorizontal");

        // Write a nested for loop to iterate through the rows and columns
                // if the currentPlayer has four discs in a row horizontally, return true
        }
        // return false
    }

    // Define function checkVertical, no parameters
    {
//console.log("checkVertical");

        // Write a nested for loop to iterate through the columns and rows
                // if the currentPlayer has four discs in a row vertically, return true
        // return false
    }

    // Define function checkPositiveDiagonal, no parameters
    {
//console.log("checkPositiveDiagonal");

        // Write a nested for loop to iterate through the rows and columns
                // if the currentPlayer has four discs in a row diagonally, bottom right to top left, return true
        // return false    
    }

    // Define function checkNegativeDiagonal, no parameters
    {
//console.log("checkNegativeDiagonal");

        // Write a nested for loop to iterate through the rows and columns
                // If the currentPlayer has four discs in a row diagonally, bottom left to top right, return true
        // return false
    }

    // define function gameOverCheck, no parameters
    {
//console.log("gameOverCheck");
        // declare variable count intialized to 0
        // declare variable initialMatrix initialized to state property initialMatrix

        // Iterate through the 2d array initialMatrix
        // Write a for/of loop to iterate through the rows, loop control variable innerArray, in 2d array initialMatrix
            // If object innerArray, function every(val => (val) != 0))
                // increment variable count by 1
            // Else
                // return false

        // If variable count is identical to 6
             // display alert dialog box that the game is over
             // return true
    }    

    // *********************************************************** //
    // ATTENTION!!!! The // comments MUST be removed for the JSX   //
    //               to render correctly!!!!!                      //
    // *********************************************************** //
    // render { function
        // return ( statement
            // open div with class wrapper
              // open div with class container
                // open div with class grid-row
                    // div element with class grid-box, data-value equal to 0, and onClick equal to {(e) => this.fillBox(e)}
                    
                    // div element with class grid-box, data-value equal to 1, and onClick equal to {(e) => this.fillBox(e)}
 
                    // div element with class grid-box, data-value equal to 2, and onClick equal to {(e) => this.fillBox(e)}
 
                    // div element with class grid-box, data-value equal to 3, and onClick equal to {(e) => this.fillBox(e)}
  
                    // div element with class grid-box, data-value equal to 4, and onClick equal to {(e) => this.fillBox(e)}
   
                    // div element with class grid-box, data-value equal to 5, and onClick equal to {(e) => this.fillBox(e)}
    
                    // div element with class grid-box, data-value equal to 6, and onClick equal to {(e) => this.fillBox(e)}
     
                // close div

                // Repeat above row five more times

          // close div with class container

          // div with id information    

                // div with class "player-wrappers" 
                    // explicit text Player 1
                    // div element with class "player1"
                // close div

                // div with class "player-wrappers" 
                    // explicit text Player 2
                    // div element with class "player2"
                // close div

            // close div with id information 
        // close div with class wrapper

      );
   }
}

// write the export default statement
