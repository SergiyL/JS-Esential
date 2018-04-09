/**Write a JavaScript function to find the first not 
 * repeated character. For i.e. input 'abacddbec', 
 * should return 'e' */

function not_repeat(str) {
    var duplicates = '';
    for (let i = 0; i < str.length; i++) {
        if (str.substring(i+1, str.length).includes(str.charAt(i)) || duplicates.includes(str.charAt(i))) {
            duplicates += str.charAt(i);
        } else {
            const demo = document.getElementById("demo");
            demo.innerHTML = "першим неповторюваним елементом стрічки " + str + " є " + str.charAt(i);
        }
    }
}

function str() {
    const str = document.getElementById("aa").value;
    return str;
}

//////////////////////////////////////////////////////

function not_repeat2(str) {
    var duplicates = '';
    for (let i = 0; i < str.length; i++) {
        if (str.substring(i+1, str.length).includes(str.charAt(i)) || duplicates.includes(str.charAt(i))) {
            duplicates += str.charAt(i);
        } else {
            return str.charAt(i);
        }
    }
}

console.log(not_repeat2("abtacddbecz"));
