/**Write a function that returns reversed string. 
*For i.e. input "hello world" should return "dlrow olleh". */

function reverse () {
    const reversed = document.getElementById("aa").value.split('').reverse().join('');;
    const demo = document.getElementById("demo");
    demo.innerHTML = reversed;
}

function reverse2(str) {
    var reversed = '';
    for (let i = str.length-1; i > -1; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverse2("hello world"));