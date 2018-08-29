/* game.js */
$(document).ready(function() {

    let buttonColor;
    let buttonValue = 0;
    let gameStarted = false;
    

    let theGame = {
        targetNumber: 0,
        playerTotal: 0,
        playerWins: 0,
        playerLosses: 0,
        gameStarted: false,
        arrCrystal : [ "green", "orange", "pink", "purple"],
        arrCrystalNumber : [ 0, 0, 0, 0],

        resetGame :function() {
            let randNum = 0;
            this.gameStarted = true;
            this.targetNumber = Math.floor((Math.random() * 102) + 19);
            console.log("23 targetNumber: " + theGame.targetNumber);
            $(".random-target-num").text(theGame.targetNumber);
            /* set total score to zero */
            $(".total-score").text("0");
            let varCrystal = $(".gem");
            varCrystal.each(function( index) {
                randNum = Math.floor((Math.random() * 12) + 1);
                $( this ).attr( "value", randNum);
                console.log(this);
            })
            
        }
    }

    
    if(!gameStarted) {
        theGame.resetGame();
    }


    // Your code here...
    $(".gem").on("click", function() {
        console.log(this);
        buttonColor = $(this).attr("color");
        buttonValue = $(this).attr("value")
        console.log(buttonColor);
        console.log("51. buttonValue", buttonValue);
        
        console.log("57. PlayerTotal - before JQuery access: ", theGame.playerTotal);
        theGame.playerTotal = parseInt($(".total-score").text(), 10);
        theGame.playerTotal += parseInt(buttonValue, 10);
        console.log("User total: ", theGame.playerTotal);
        $(".total-score").text(theGame.playerTotal.toString());
        if (theGame.playerTotal == theGame.targetNumber) {
            console.log(" You win!! ");
            theGame.playerWins++;
            $("#wins").text(theGame.playerWins);
            alert("You Won!!")
            // $("#user-alert").text("You Won!!");
            // $("#user-alert").delay(2000).text("New Game");
            theGame.resetGame();
        }
        else if(theGame.playerTotal > theGame.targetNumber) {
            console.log(" You lose")
            // theGame.playerlosses = parseInt($(".losses").text(), 10);
            theGame.playerLosses++;
            $("#losses").text(theGame.playerLosses)
            alert("You Lost!!")
            $("#user-alert").delay(220000).text("You Lost!");
            // $("#user-alert").text("New Game");
            theGame.resetGame();
        }

    });

})