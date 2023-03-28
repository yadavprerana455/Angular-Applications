//Perform Arithmatic Operations
var Arithmatic = /** @class */ (function () {
    function Arithmatic(A, B) {
        this.Number1 = 0;
        this.Number2 = 0;
        this.Number1 = A;
        this.Number2 = B;
    }
    Arithmatic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmatic.prototype.Subtraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmatic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmatic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(11, 5);
var obj2 = new Arithmatic(25, 5);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition is :" + Ret);
Ret = obj1.Subtraction();
console.log("Subtraction is :" + Ret);
Ret = obj1.Multiplication();
console.log("Multiplication is :" + Ret);
Ret = obj1.Division();
console.log("Division is :" + Ret);
Ret = obj2.Addition();
console.log("Addition is :" + Ret);
Ret = obj2.Subtraction();
console.log("Subtraction is :" + Ret);
Ret = obj2.Multiplication();
console.log("Multiplication is :" + Ret);
Ret = obj2.Division();
console.log("Division is :" + Ret);
