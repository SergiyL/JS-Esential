/**Write a recursion function that logs numbers from N to 0.
 *  Read about recursion function in javascript before implementing this.
 *  Do not use "for", function should call itself. */


function recursion(num) {
    if (num != -1) {
        var newP = document.createElement("P");
        var t = document.createTextNode(num);
        newP.appendChild(t);
        document.body.appendChild(newP)
        recursion(num - 1);
    }
}

function num () {
    var num = parseInt(document.getElementById("aa").value);
    return num;
}

/////////////////////////////////////////

function recursion2(num) {
    if (num != -1) {
        console.log(num);
        recursion2(num - 1);
    }
}

recursion2(5);
