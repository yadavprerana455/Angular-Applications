
//Calculate Area Of Circle

class Circle
{
    radius : number;
    PI : number;

    constructor(rad : number)
    {
        this.radius=rad;
        this.PI = 3.14;
    }
    Area():number
    {
        return this.PI * this.radius*this.radius;
    }
}

var obj3 = new Circle(5)
var obj4 = new Circle(2)

var Ret  : number = 0;

Ret = obj3.Area()
console.log("Area of circle is " +Ret)

Ret = obj4.Area()
console.log("Area of circle is " +Ret)
