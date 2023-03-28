//ChkAmstrong no or not


function CountDigit(No1 : number) : number
{
        var i : number = 0;
        while(No1! = 0)
        {
             i++;
             No1 = No1/10
        }
       return i;
}



var No1 : number = 153
var ret : number = 0

ret = CountDigit(No1)

console.log(ret)