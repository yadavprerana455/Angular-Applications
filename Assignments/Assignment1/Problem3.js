function DisplayFactors(No1) {
    var Cnt = 0;
    for (Cnt = 1; Cnt < No1; Cnt++) {
        if (No1 % Cnt == 0) {
            console.log(Cnt);
        }
    }
}
var No1 = 20;
DisplayFactors(No1);
