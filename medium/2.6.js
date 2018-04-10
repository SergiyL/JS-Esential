/**Write a JavaScript program to calculate the factorial of 
 * a number. Sample f(5) should return 120 */

function factorial() {
    const num = parseInt(document.getElementById("aa").value);
    let f = 1;
    for (let i = 1; i <= num; i++ ) {
        f *= i;
    }
    var demo = document.getElementById("demo");
    demo.innerHTML = "факторіал числа " + num + " дорівнює " + f;
}


function factorial2(num) {
    var f = 1;
    for (let i = 1; i <= num; i++ ) {
        f *= i;
    }
    console.log(f);
}

factorial2(5);