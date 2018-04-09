function pythagor() {
    var a = document.getElementById("aa").value;
    var b = document.getElementById("bb").value;
    var c = Math.pow(a, 2) + Math.pow(b, 2);
    document.getElementById("demo").innerHTML = 'сума квадратів катетів ' + a + ' i ' + b + ' дорівнює квадрату гіпотенузи і скаладає ' + c;
}

function pythagor2(a, b) {
    var c = Math.pow(a, 2) + Math.pow(b, 2);
    return 'сума квадратів катетів ' + a + ' i ' + b + ' дорівнює квадрату гіпотенузи і скаладає ' + c;;
}

console.log(pythagor2(5, 4))
