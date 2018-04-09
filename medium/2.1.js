/**Write a function that reverse a number. 
 * For i.e. input 32243 should returns 34223 */

function reverse(val) {
    var demo = document.getElementById("demo");
    var num = parseInt(val);
    if(Number.isInteger(num)) {
        var reversed = val.split('').reverse().join('');
        demo.innerHTML = "реверсом числа " + val + " є число " + reversed;
    } else {
        demo.innerHTML = "дане значення не є числом. уведіть коректні дані";
    }
}

function val(){
    var val = document.getElementById("aa").value;
    return val;
}

//////////////////////////////////////////////////////////////////

function reverse2(num) {
    var reverse = num.toString().split('').reverse().join('');
    return reverse;
}

console.log(reverse2(32243));