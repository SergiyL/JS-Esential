function iterator() {
    var x = 10;
    while (x !== -1) {
        document.getElementById("demo").innerHTML += x + ' ';
        x--;
    }
}


function iterator2() {
    var x = 10;
    while (x !== -1) {
        console.log(x);
        x--;
    }
}

iterator2();