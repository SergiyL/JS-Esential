/**4.1) Read about Bubble Sort, and write a JavaScript function to apply Bubble Sort algorithm.
 * Sample input [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], and output
 * [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]. */

function bubble(arr) {
    var temp = 0;
    var numbers = [];
    for (var i of arr) {
        numbers.push(parseFloat(i));
    }
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }

    var demo = document.getElementById("demo");
    demo.innerHTML = numbers.reverse();

}

function arr() {
    var arr = document.getElementById("aa").value.split(' ');
    return arr;
}

/////////////////////////////////////////////////////

function bubble2(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.reverse();
}

console.log(bubble2([-5, 12, 0, 89, -77, 35, 1011, 11, 548, 635, 78, 459, 1, 0.9, 65]));