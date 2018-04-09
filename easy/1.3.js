/**Write a function that returns average number of values.
 * Do not use Math. For i.e. [1,4,2] should return [2.33] */

function average(arr) {
    var summ = 0;
    for (let i of arr){
        summ += parseInt(i);     
    }
    
    const demo = document.getElementById("demo");
    demo.innerHTML = "середнім арифметичним масиву чисел " + arr + " є число " + Math.round((summ/arr.length)*100)/100;
}

function arr(){
    var arr = document.getElementById("aa").value.split(" ");
    return arr;
}
/////////////////////////////////////////
function average2(arr) {
    var summ = 0;
    for (let i of arr){
        summ += i;
    }
    return summ/arr.length;
}

console.log(average2([1,4,2]));