function Maximum1(No1, No2, No3) {
    if (No1 > No2 && No1 > No3) {
        console.log("Maximum number is:" + No1);
    }
    else if (No2 > No3) {
        console.log("MAximum number is:" + No2);
    }
    else {
        console.log("Maximum No is:" + No3);
    }
}
var A = 23;
var B = 6;
var C = 89;
Maximum1(A, B, C);
