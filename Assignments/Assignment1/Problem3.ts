
function DisplayFactors(No1 : number) : void
{
    var Cnt : number =0 ;
    for(Cnt = 1; Cnt < No1; Cnt++)
    {
        if(No1%Cnt == 0){
        console.log(Cnt)
        }
    }
}

var No1 : number = 20;
DisplayFactors(No1);