

// Summation of array

function Summation(arr : number[]) : number
{
    var i : number = 0;
    var Sum : number = 0;
    for(i=0;i<=arr.length;i++)
    {
        Sum = Sum + arr[i]
    }
    return Sum;
}

var array : number[] = [23,6,7,4,5,7]

var Ret : number = 0;

Ret = Summation(array)

console.log("Addition is :" + Ret)