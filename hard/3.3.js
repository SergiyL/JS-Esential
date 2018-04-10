/**Read about Binary Search. Implement it using JavaScript. 
 * For i.e. binarySearch(27, {from:0, to:100}), should print 
 * at console log 50,25,38,31,28,27. */

function binary(){
    const demo = document.getElementById("demo");
    let start = 0;
    let end = document.getElementById("aa").value;
    let num = document.getElementById("bb").value;
    let middle = 0;
    let arr = [];

    while (middle != num) {
        middle = Math.floor((start + end) / 2);
        arr.push(middle);
        
        if (middle > num) {
            end = middle-1;
        } else if (middle < num) {
            start = middle+1;
        }
    }
    demo.innerHTML = arr.splice(0, arr.length);
}


 /////////////////////////////////////////////////////////////////////////
function binary2(num, hundred) {
    let start = 0;
    let end = hundred.length-1;
    let middle = 0;
    const demo = document.getElementById("demo");
    
    while (middle != num) {
        middle = Math.floor((start + end) / 2);
        console.log(middle);
        

        if (middle > num) {
            end = middle-1;
        } else if (middle < num) {
            start = middle+1;
        }
    }
}

function hundred() {
    var arr = [];

    for (let i = 0; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}


binary2(27, hundred());