/**Write a function that validates if postal code is Ukrainian or not. */

function validation(num) {
    const demo = document.getElementById("demo");
    if(Number.isInteger(parseInt(num)) && num.toString().length == 5) {
        switch(true) {
            case (parseInt(num.substring(0,2)) < 7):
                demo.innerHTML = (num + " індекс міста Київ");
                break;
            case (parseInt(num.substring(0,2)) < 10):
                demo.innerHTML = (num + " індекс регіону Київська область");
                break;
            case (parseInt(num.substring(0,2)) < 14):
                demo.innerHTML = (num + " індекс регіону Житомирська область");
                break;
            case (parseInt(num.substring(0,2)) < 18):
                demo.innerHTML = (num + " індекс регіону Чернігівська область");
                break;
            case (parseInt(num.substring(0,2)) < 21):
                demo.innerHTML = (num + " індекс регіону Черкаська область");
                break;
            case (parseInt(num.substring(0,2)) < 25):
                demo.innerHTML = (num + " індекс регіону Вінницька область");
                break;
            case (parseInt(num.substring(0,2)) < 29):
                demo.innerHTML = (num + " індекс регіону Кіровоградська область");
                break;
            case (parseInt(num.substring(0,2)) < 33):
                demo.innerHTML = (num + " індекс регіону Хмельницька область");
                break;
            case (parseInt(num.substring(0,2)) < 36):
                demo.innerHTML = (num + " індекс регіону Рівненська область");
                break;
            case (parseInt(num.substring(0,2)) < 43):
                demo.innerHTML = (num + " індекс регіону Сумська область");
                break;
            case (parseInt(num.substring(0,2)) < 46):
                demo.innerHTML = (num + " індекс регіону Волинська область");
                break;
            case (parseInt(num.substring(0,2)) < 49):
                demo.innerHTML = (num + " індекс регіону Тернопільська область");
                break;
            case (parseInt(num.substring(0,2)) < 54):
                demo.innerHTML = (num + " індекс регіону Дніпропетровська область");
                break;
            case (parseInt(num.substring(0,2)) < 58):
                demo.innerHTML = (num + " індекс регіону Миколаївська область");
                break;
            case (parseInt(num.substring(0,2)) < 61):
                demo.innerHTML = (num + " індекс регіону Чернівецька область");
                break;
            case (parseInt(num.substring(0,2)) < 65):
                demo.innerHTML = (num + " індекс регіону Харківська область");
                break;
            case (parseInt(num.substring(0,2)) < 69):
                demo.innerHTML = (num + " індекс регіону Одеська область");
                break;
            case (parseInt(num.substring(0,2)) < 73):
                demo.innerHTML = (num + " індекс регіону Запорізька область");
                break;
            case (parseInt(num.substring(0,2)) < 76):
                demo.innerHTML = (num + " індекс регіону Херсонська область");
                break;
            case (parseInt(num.substring(0,2)) < 79):
                demo.innerHTML = (num + " індекс регіону Івано-Франківська область");
                break;
            case (parseInt(num.substring(0,2)) < 83):
                demo.innerHTML = (num + " індекс регіону Львівська область");
                break;
            case (parseInt(num.substring(0,2)) < 88):
                demo.innerHTML = (num + " індекс регіону Донецька область");
                break;
            case (parseInt(num.substring(0,2)) < 91):
                demo.innerHTML = (num + " індекс регіону Закарпатська область");
                break;
            case (parseInt(num.substring(0,2)) < 95):
                demo.innerHTML = (num + " індекс регіону Луганська область");
                break;
            case (parseInt(num.substring(0,2)) < 99):
                demo.innerHTML = (num + " індекс регіону Автономна Республіка Крим");
                break;
            case (parseInt(num.substring(0,2)) < 100):
                demo.innerHTML = (num + " індекс міста Севастополь");
                break;

        }
    } else {
        demo.innerHTML = "даний номер не відповідає критеріям українського поштового індексу"
    }
}

function num() {
    const num = document.getElementById("aa").value;
    return num;
}
