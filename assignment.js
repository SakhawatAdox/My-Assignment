function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(50000);
console.log(result)


function woodCalculator(chair, table, khat){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var khatCount = khat * 5;
    var totalWood = chairCount + tableCount + khatCount;
    return totalWood;
}
var woodResult = woodCalculator(14, 8, 12);
console.log(woodResult)