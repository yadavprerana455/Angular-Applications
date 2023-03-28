// Summation of array
function Summation(arr) {
    var i = 0;
    var Sum = 0;
    for (i = 0; i <= arr.length; i++) {
        Sum = Sum + arr[i];
    }
    return Sum;
}
var array = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Summation(array);
console.log("Addition is :" + Ret);
