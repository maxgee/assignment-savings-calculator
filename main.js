function calculate(){

//Grabbing Data and Defining Variables
var principalAmt = document.getElementById("ammount").value;
var rateOfReturn = document.getElementById("rate").value;
var numOfYears = document.getElementById("years").value * 12;
var tabelContent = "";
var newBalance = principalAmt;
for(i = 1;i <= numOfYears;i++){
    newBalance = parseFloat(newBalance);
    rateOfReturn = parseFloat(rateOfReturn);
    var intrestAmt = newBalance * ((rateOfReturn/ 100)/12)
    intrestAmt = Math.round(intrestAmt * 100) / 100;
    newBalance += intrestAmt
    tabelContent += "<tr><td>"+i+"</td><td>"+intrestAmt.toFixed(2)+"</td><td>"+newBalance.toFixed(2)+"</td></tr>";
}

document.getElementById("results_table").innerHTML = "<table><tr><th>Year</th><th>Intrest</th><th>Balance</th></tr><tbody>"+tabelContent+"</tbody></table>";
}







function reset(){
document.getElementById("results_table").innerHTML ="";
}
