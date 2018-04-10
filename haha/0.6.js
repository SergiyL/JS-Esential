function asterisks(){
    const num = document.getElementById("aa").value;
    let asterisk = '';
    for (let i = 1; i <= num; i++) {
        asterisk += '*';
        var newP = document.createElement("P");
        var t = document.createTextNode(asterisk);
        newP.appendChild(t);
        document.body.appendChild(newP);
    }
}

///////////////////////////////////

function asterisks2(num){
    var asterisk = '';
    for (let i = 1; i <= num; i++) {
        asterisk += '*';
        console.log(asterisk);
    }
}
asterisks2(5);