function iterator() {
    var x = 10;
    while (x !== -1) {
        document.getElementById("demo").innerHTML += x + ' ';
        console.log(x);
        x--;
    }
}
