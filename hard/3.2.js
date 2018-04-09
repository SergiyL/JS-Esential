/**Write a function that validates if input object has required key. 
 * If not - throw new error. For i.e. validate(["name","surname"], 
 * {name:"Roman",surname:"Rodomansky"})should return true. 
 * For i.e. validate(["name","surname","age"], 
 * {name:"Roman",surname:"Rodomansky"})should throw error since 
 * "age" wasn't passed on object. */

function validator() {
    const keysarr = document.getElementById("aa").value.split(' ');
    const input = document.getElementById("bb").value.split(' ');
    var obj = {};

    for (let i of input) {
        const n = i.indexOf(":");
        const len = i.length;
        obj[i.substring(0, n)] = i.substring(n+1, len);
    }
    var count = 0;
    const validkeys = Object.keys(obj);
    for (var i = 0; i <= keysarr.length-1; i++) {
        if (validkeys.includes(keysarr[i])) {
            count ++;
        } else {
            count --;
        }
    }
    // console.log(count);

    const demo = document.getElementById("demo");

    if (count == keysarr.length) {
        demo.innerHTML = "дані валідні";
    } else {
        demo.innerHTML = "дані не валідні";
    }
}

////////////////////////////////////////////////////////////////////////////////////////////

function validator1(keysarr, input) {
    var count = 0;
    const validkeys = Object.keys(input);
    for (let i = 0; i <= keysarr.length-1; i++) {
        if (validkeys.includes(keysarr[i])) {
            count ++;
        } else {
            count --;
        }
    }
    

    if (count == keysarr.length) {
        return true;
    } else {
        return false;
    }
}

console.log(validator1(["name", "age", "iq"], {name: "Vasya", age: 20, iq: 80}))