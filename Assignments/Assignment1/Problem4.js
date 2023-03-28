//Check Prime Number
function ChkPrime(No1) {
    var Cnt = 0;
    for (Cnt = 2; Cnt < No1; Cnt++) {
        if (No1 % Cnt == 0) {
            console.log("It is Not A Prime Number");
            break;
        }
        else {
            console.log("It is Prime Number");
            break;
        }
    }
}
var No1 = 11;
ChkPrime(No1);
