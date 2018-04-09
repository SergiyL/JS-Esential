/**Read about Binary Search. Implement it using JavaScript. 
 * For i.e. binarySearch(27, {from:0, to:100}), should print 
 * at console log 50,25,38,31,28,27. */

function binary(num, hundred) {
    var start = 0;
    var end = hundred.length-1;
    var middle = 0;
    
    while (hundred[middle] != num) {
        middle = Math.floor((start + end) / 2);
        console.log(middle);

        if (hundred[middle] > num) {
            end = middle-1;
        } else if (hundred[middle] < num) {
            start = middle+1;
        }
    }
}

function hundred() {
    var arr = [];

    for (var i = 0; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}


binary(27, hundred());