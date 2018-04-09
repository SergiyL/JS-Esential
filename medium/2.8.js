/**Write a JavaScript function to calculate the percentage (%) of a number. 
 * Sample console.log(percentage(1000, 47.12)); should returns 471.2 */

function percent() {
    const number = parseFloat(document.getElementById("aa").value);
    const percentage = parseFloat(document.getElementById("bb").value);
    const demo = document.getElementById("demo");
    demo.innerHTML = percentage + "% від числа " + number + " складає " + number/100*percentage;
}

function percent2(number, percentage) {
    return percentage + "% від числа " + number + " складає " + number/100*percentage;
}

console.log(percent2(1000, 47.12))