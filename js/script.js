//business logic
var player1="";
var player2="";

var throwdice = function () {
    return Math.floor(6*Math.random())+1;
}

function Player (turn) {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
}

// checking for 1
Player.prototype.rollone = function() {
    if (this.roll===1) {
        this.tempscore = 0;
        alert("Sorry " + this.playerName + ", you rolled a 1! your turn is over!")
// this.changeturn();
  } else {
        this.tempscore += this.roll;
    }
}

//hold 
Player.prototype.hold = function() {
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    //this.changeturn();
    alert(this.playerName + ", your turn is over, pass the mouse!");
}
//check for 100
Player.prototype.winnercheck = function() {
    if (this.totalscore >= 100) {
        alert(this.playerName + "you are the winner!");
    }
}

Player.prototype.newGame = function(){
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.playerName ="";
}

var clearValues = function(){
    $(".player1Name").val("");
    $("player2Name").val("");
}
// user interface
$(document).ready(function){

    $("button#start").click(function(event){
        player1 = new Player(true);
        player2 = new Player(false);
        $(".player-console").show();
        $(".")
    })
}