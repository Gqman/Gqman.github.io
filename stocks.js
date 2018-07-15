/*global $*/
var RunningTotal = 0; //1000; //user input on the initial seed capital  TODO 60 trades in 1 hour for a month = 9600 trades
var initial_ammount = 0;   
// $("calc").onclick = Trade();
function Trade(){
    console.clear();
    console.log("running");
    ///****************** Arrays ********************
    //loads in the roulette number
    var Target_1 = ["1","1","1","1","1","1","0","0","0","0"];
    var Target2 =  ["1","1","0","0","0","0","0","0","0","0"];
     ///****************** Arrays ********************
    var Target1_bet = document.getElementById("Risk").value; //100; //user input Bet on R / B 2:1 reward  TODO
    //var Target2_bet = document.getElementById("Risk").value; //20;  //user input Bet on topshelf 5:1 reward  TODO
    var RunningTotal = document.getElementById("Account_balance").value; //1000; //user input on the initial seed capital  TODO 60 trades in 1 hour for a month = 9600 trades
    var x = document.getElementById("numberOfTrades").value;//   //number of trades TODO: user input
    var initial_ammount = RunningTotal;
    for (let i = 1; i <= x; i++){
        //resets results
        console.log("in loop");
        var Target1_result = "loss";
        var Target2_result = "loss";
        // rangdom spin on black and red
        var Trade_Target1  = Target_1[Math.floor(Math.random()*Target_1.length)]; //spins the wheel
        var Trade_Target2  = Target2[Math.floor(Math.random()*Target2.length)]; //bets on Black or Red
        //finds out if we won on either bet
        if(1 == Trade_Target1){
            Target1_result = "win";
        }
        if(Target1_result == "win" && 1 == Trade_Target2){
            Target2_result = "win";
        }
        //console.log("T1 result: "+Target1_result+" T2 result: "+Target2_result);
        var totalMoney =+ moneymanagemnt(Target1_result, Target2_result,Target1_bet,0,0);
        
    }
    var overall = totalMoney - initial_ammount;
    console.log("runningtotal was : "+RunningTotal+ "  Money made :"+ overall );
    $("#Totals").html("<h1>Outcome</h1><br> over all you made: $"+ overall); //RunningTotal;
}
function moneymanagemnt(RBwinner, topshelfwinner,bet1,bet2,bet3){
    // did we win or loss and takes it from the running total
    RunningTotal = RBwinner == "win" ? RunningTotal =RunningTotal + (bet1 * 2): RunningTotal = RunningTotal- bet1;
    //RunningTotal = topshelfwinner == "win" ? RunningTotal =RunningTotal+ (Target2_bet * 5) : RunningTotal = RunningTotal- Target2_bet;
    $("#result").append("<br> T1 result: "+ RBwinner +" Running total is: $"+RunningTotal);
    //console.log("T1 result: "+RBwinner+" T2 result: "+topshelfwinner+" RunningTotal:"+ RunningTotal);//console.log("RunningTotal after = "+RunningTotal);
    return RunningTotal;
}




