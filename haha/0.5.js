function converter() {
    const quantity = document.getElementById("aa").value;
    const radios = document.getElementsByName("optradio");
    var currency;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            currency = radios[i].value;
            break;
        }
    }
    const rate = document.getElementById("bb").value;
    const demo = document.getElementById("demo");
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