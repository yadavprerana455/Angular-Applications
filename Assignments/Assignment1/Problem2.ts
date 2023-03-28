

//Calculate Area of Circle

function Area(radius : number) : number
{
    var area : number = 0;
    area = 3.14 * radius * radius;
    return area;
}

var radius =5;
var Ret : number = 0;

Ret = Area(radius);

console.log("Area Of Circle is:" +Ret)