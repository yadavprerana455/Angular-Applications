//Calulate Circumference of circle
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle1 = /** @class */ (function () {
    function Circle1(rad) {
        this.radius = rad;
        this.PI = 3.14;
    }
    Circle1.prototype.Area = function () {
        return this.PI * this.radius * this.radius;
    };
    return Circle1;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(rad) {
        return _super.call(this, rad) || this;
    }
    CircleX.prototype.CalculateCircumference = function () {
        return 2 * this.PI * this.radius;
    };
    return CircleX;
}(Circle1));
var obj = new CircleX(5);
var Ret = 0;
Ret = obj.Area();
console.log("Area of circle is" + Ret);
Ret = obj.CalculateCircumference();
console.log("Area of circle is" + Ret);
