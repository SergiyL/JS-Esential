/**Write an function that accepts a string as a parameter 
 * and converts the first letter of each word of the string 
 * in upper case. For i.e. 'the quick brown fox' and respond 
 * with The Quick Brown Fox' */

function capitalizer(str) {
    var cap = str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++) {
        cap += str.charAt(i);
        if (str.charAt(i) === ' ') {
            cap += str.charAt(i+1).toUpperCase();
            i++;
        }
    }
    const demo = document.getElementById("demo");
    demo.innerHTML = cap;
}

function str() {
    var str = document.getElementById("aa").value;
    return str;
}

//////////////////////////////////////////////////////
function capitalizer2(str) {
    var cap = str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++) {
        cap += str.charAt(i);
        if (str.charAt(i) === ' ') {
            cap += str.charAt(i+1).toUpperCase();
            i++;
        }
    }
    console.log(cap);
}

capitalizer2("the quick brown fox")