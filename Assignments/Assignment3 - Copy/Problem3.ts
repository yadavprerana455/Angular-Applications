
//Calulate Circumference of circle

class Circle1
{
    radius : number;
    PI : number;

    constructor(rad : number)
    {
        this.radius = rad;
        this.PI = 3.14;
    }
    Area():number
    {
        return this.PI*this.radius*this.radius;
    }
}

class CircleX extends Circle1
{
    constructor(rad : number)
    {
        super(rad);
    }
    CalculateCircumference() : number
    {
        return 2 * this.PI * this.radius;
    }
}

var obj = new CircleX(5)
var Ret : number = 0;

Ret = obj.Area();
console.log("Area of circle is" + Ret)

Ret = obj.CalculateCircumference();
console.log("Area of circle is" + Ret)


