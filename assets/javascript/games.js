/* game.js */
$(document).ready(function() {

    let buttonInput;
    


    // Your code here...
    $(".gem").on("click", function() {
    console.log(this);
    buttonInput = $(this).attr("color");
    console.log(buttonInput);

    

    // switch(buttonInput) {
    //     case "1":
    //     case "2":
    //       if (choice1 == "") {
    //         choice1 = buttonInput;
    //         console.log("number pressed");
    //       } else {
    //         choice2 = buttonInput;
    //       }
    //         break;
    //     case "plus":
    //      case "subtract":
    //     case "multiply":
    //       Operator1 = buttonInput;
    //     console.log("+ pressed");
    //         break;
    //     case "equals":
    //       if (operator1 == "plus") {
    //         Result = parseInt(choice1, 10) + parseInt(choice2, 10);
    //         console.log("result = " + Result);
    //       }
    //         break;
    //     default:
    //         console.log("Nothing");
    //     }
    //     });

    });

})