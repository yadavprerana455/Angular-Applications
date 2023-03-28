//Calculate Area of Circle
function Area(radius) {
    var area = 0;
    area = 3.14 * radius * radius;
    return area;
}
var radius = 5;
var Ret = 0;
Ret = Area(radius);
console.log("Area Of Circle is:" + Ret);
