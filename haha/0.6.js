function asterisks(num){
    var asterisk = '';
    for (var i = 1; i <= num; i++) {
        asterisk += '*';
        var newP = document.createElement("P");
        var t = document.createTextNode(asterisk);
        newP.appendChild(t);
        document.body.appendChild(newP);
    }
}

function num() {
    var num = document.getElementById("aa").value;
    return parseInt(num);
}

///////////////////////////////////

function asterisks(num){
    var asterisk = '';
    for (var i = 1; i <= num; i++) {
        asterisk += '*';
        console.log(asterisk);
    }
}
asterisks(5);