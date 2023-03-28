
//Maximum No from the array


function Maximum(arr : number[]) : number
{
    var max : number = arr[0]
    var i : number = 0;

    for(i = 0; i <=arr.length;i++)
    {
        if(arr[i]>=max)
        {
            max=arr[i]
        }
    }
    return max;

}

var array : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = Maximum(array)

console.log("Maximum no is : " +Ret)