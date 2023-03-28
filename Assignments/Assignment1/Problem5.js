//Fibonensi Series
function Fibonensi(No1) {
    var First = 1;
    var Second = 1;
    var Third = 0;
    //for (var i = 1; i<=No1; i++)
    while (First <= No1) {
        console.log(First);
        Third = First + Second;
        First = Second;
        Second = Third;
    }
}
var No1 = 21;
Fibonensi(No1);
