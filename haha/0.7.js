/*Write a JavaScript function to convert radians to degrees. 
Sample console.log(radians_to_degrees(0.7853981633974483)); 
should returns 45. */

function radians_to_degrees(rad) {
    var deg = (180/Math.PI)*rad;
    var demo = document.getElementById("demo");
    demo.innerHTML = rad + " радіан дорівнюють " + deg + " градусам"
}

function rad() {
    var rad = document.getElementById("aa").value;
    return rad;
}


///////////////////////////////

function radians_to_degrees2(rad) {
    var deg = (180/Math.PI)*rad;
    return rad + " радіан дорівнюють " + deg + " градусам"
}

console.log(radians_to_degrees2(0.7853981633974483));