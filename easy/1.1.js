/**Write a function that returns only pair numbers. 
 * For i.e. input [1,5,23,4,2,5,6] should return [4,2,6]. */

function pair_numbers(val) {
    var arr = val.split(" ");
    var pair = [];
    for(i of arr) {
        if(i%2 == 0) {
            pair.push(i);
        }
    }
    var demo = document.getElementById("demo");
    demo.innerHTML = "[" + pair + "]";
}

function val() {
    var val = document.getElementById("aa").value;
    return val;
}

/////////////////////////////////////////////////////////////

function pair_numbers2(arr) {
    var pair = [];
    for(i of arr) {
        if(i%2 == 0) {
            pair.push(i);
        }
    }
    return pair;
}

console.log(pair_numbers2([1,5,23,4,2,5,6]));