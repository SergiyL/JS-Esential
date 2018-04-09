/**Write a JavaScript function to generate a random integer.
 *  For i.e. console.log(rand(20,1)); should returns each 
 * time random number from in a range 20 to 1. */

function random() {
    const min = parseInt(document.getElementById("aa").value);
    const max = parseInt(document.getElementById("bb").value);

    const demo = document.getElementById("demo");
    demo.innerHTML = Math.floor((Math.random() * (max - min) + min))+1;
}


////////////////////////////////////////////
function random2(min, max) {
    return Math.floor((Math.random() * (max - min) + min))+1;
}

console.log(random2(10, 20));