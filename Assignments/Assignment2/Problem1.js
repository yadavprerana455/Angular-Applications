//Maximum No from the array
function Maximum(arr) {
    var max = arr[0];
    var i = 0;
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    return max;
}
var array = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(array);
console.log("Maximum no is : " + Ret);
