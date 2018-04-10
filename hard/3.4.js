/** Write a JavaScript program to find duplicate values in a 
 * JavaScript array.*/

function duplicate(){
    const arr = document.getElementById("aa").value.split(' ');
    var duplicates = [];
    for (var i = 0; i <= arr.length; i++) {
        var sl = arr.slice(i+1, arr.length);
        if (sl.includes(arr[i]) || duplicates.includes(arr[i])) {
            duplicates.push(arr[i])
        }
    }

    var demo = document.getElementById("demo");
    demo.innerHTML = duplicates;
}

///////////////////////////////////////////////////////////
function duplicate2(arr) {
    var duplicate = [];
    for (var i = 0; i <= arr.length; i++) {
        var sl = arr.slice(i+1, arr.length);
        if (sl.includes(arr[i]) || duplicate.includes(arr[i])) {
            duplicate.push(arr[i])
        }
    }
    return duplicate;
}

console.log(duplicate2([1, 1, 0, 2, 2, 8, 7, 5, 5]))