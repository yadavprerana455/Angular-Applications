

//Fibonensi Series


function Fibonensi(No1 : number) : void
{
    var First : number = 1;
    var Second : number = 1;
    var Third : number = 0;
    //for (var i = 1; i<=No1; i++)
    while(First<=No1)
    {
        console.log(First);
        Third = First + Second;
        First = Second;
        Second = Third;
    }
}

var No1 : number = 21;

Fibonensi(No1)
