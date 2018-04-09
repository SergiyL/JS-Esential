function converter() {
    var quantity = document.getElementById("aa").value;
    var radios = document.getElementsByName("optradio");
    var currency;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            currency = radios[i].value;
            break;
        }
    }
    var rate = document.getElementById("bb").value;
    var demo = document.getElementById("demo");
    if (currency === "usd") {
        demo.innerHTML = quantity + " доларів США коштують " + quantity*rate + " гривень";
    } else {
        demo.innerHTML = quantity + " гривень коштують " + Math.round((quantity/rate) * 100)/100 + " доларів США"
    }
}


function converter2(quantity, rate, currency) {
    if (currency === "usd") {
        return quantity + " доларів США коштують " + quantity*rate + " гривень";
    } else {
        return quantity + " гривень коштують " + Math.round((quantity/rate) * 100)/100 + " доларів США"
    }
}

console.log(converter2(100, 26.2, 'usd'));