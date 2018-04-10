/**Write a function that reverse a number. 
 * For i.e. input 32243 should returns 34223 */

function reverse() {
    const val = document.getElementById("aa").value;
    const demo = document.getElementById("demo");
    const num = parseInt(val);
    if(Number.isInteger(num)) {
        const reversed = val.split('').reverse().join('');
        demo.innerHTML = "реверсом числа " + val + " є число " + reversed;
    } else {
        demo.innerHTML = "дане значення не є числом. уведіть коректні дані";
    }
}


//////////////////////////////////////////////////////////////////

function reverse2(num) {
    const reverse = num.toString().split('').reverse().join('');
    return reverse;
}

console.log(reverse2(32243));