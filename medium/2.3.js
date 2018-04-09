/**Write a JavaScript function that generates all 
 * combinations of a string. For i.e. input dog, 
 * should respond with d,do,dog,o,og,g */

function generator(str) {
    var ccc = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = i+1; j < str.length+1; j++){
            ccc += str.slice(i, j) + ',';
            var newP = document.createElement("P");
            var t = document.createTextNode(str.slice(i, j));
            newP.appendChild(t);
            document.body.appendChild(newP);
        }
    }
    var demo = document.getElementById("demo");
    demo.innerHTML = ccc;
}

function str(){
    var str = document.getElementById("aa").value;
    return str;
}

////////////////////////////////////////////////////////////////////////
function generator2(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i+1; j < str.length+1; j++){
            console.log(str.slice(i, j));
        }
    }
}

generator2("bird");