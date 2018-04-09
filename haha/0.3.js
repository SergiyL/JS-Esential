function fahrenheit() {
    var c = document.getElementById("aa").value;
    var f = c * 1.8 + 32;
    document.getElementById("demo").innerHTML = c + ' градусів за Цельсієм дорівнює ' + f + ' градусам за Фаренгейтом';
}

function fahrenheit2(c) {
    var f = c * 1.8 + 32;
    return c + ' градусів за Цельсієм дорівнює ' + f + ' градусам за Фаренгейтом';
}

console.log(fahrenheit2(12));