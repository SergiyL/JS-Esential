/**Write a recursion function that logs numbers from N to 0.
 *  Read about recursion function in javascript before implementing this.
 *  Do not use "for", function should call itself. */


function recursion(num) {
    var arr = [];
    const demo = document.getElementById("demo");
    if (num != -1) {
        const newP = document.createElement("span");
        const t = document.createTextNode(num);
        newP.appendChild(t);
        document.body.appendChild(newP)
        // arr.push(num);
        recursion(num - 1);
    }
    // demo.innerHTML = arr;
}

function num () {
    const num = parseInt(document.getElementById("aa").value);
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
