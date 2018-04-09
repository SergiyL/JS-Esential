function pythagor() {
    const a = document.getElementById("aa").value;
    const b = document.getElementById("bb").value;
    const c = Math.pow(a, 2) + Math.pow(b, 2);
    document.getElementById("demo").innerHTML = 'сума квадратів катетів ' + a + ' i ' + b + ' дорівнює квадрату гіпотенузи і скаладає ' + c;
}

function pythagor2(a, b) {
    const c = Math.pow(a, 2) + Math.pow(b, 2);
    return 'сума квадратів катетів ' + a + ' i ' + b + ' дорівнює квадрату гіпотенузи і скаладає ' + c;;
}

console.log(pythagor2(5, 4))
