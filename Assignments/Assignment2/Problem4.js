//ChkAmstrong no or not
function CountDigit(No1) {
    var i = 0;
    while (No1 = 0) {
        i++;
        No1 = No1 / 10;
    }
    return i;
}
var No1 = 153;
var ret = 0;
ret = CountDigit(No1);
console.log(ret);
