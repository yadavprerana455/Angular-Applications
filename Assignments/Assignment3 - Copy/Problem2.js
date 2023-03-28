//Calculate Area Of Circle
var Circle = /** @class */ (function () {
    function Circle(rad) {
        this.radius = rad;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.radius * this.radius;
    };
    return Circle;
}());
var obj3 = new Circle(5);
var obj4 = new Circle(2);
var Ret = 0;
Ret = obj3.Area();
console.log("Area of circle is " + Ret);
Ret = obj4.Area();
console.log("Area of circle is " + Ret);
