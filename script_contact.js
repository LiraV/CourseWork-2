okayElement = document.querySelector('.okay');
sendElement = document.querySelector('.send');
let date_n = '2000-01-01';
let number_n = '1';
let face = 'fiz';
let invest = ['swot'];
let add = 'add';
let pass = '0000';
let id = '0';
function save() {
    date_n = document.getElementsByName('date_n')[0].value,
    number_n = document.getElementsByName('number_n')[0].value;
    pass = document.getElementsByName('pass')[0].value;
    var face_n = document.getElementsByName('face');
    var invest_n = document.getElementsByName('invest')
    if (face_n[0].checked) {
        face = face_n[0].value
    } else {
        face = face_n[1].value
    }
    invest = [];
    for (var i = 0; i < 4; i++) {
        if (invest_n[i].checked) {
            invest.push(invest_n[i].value);
        }
    }

    add = document.getElementsByName('add')[0].value
    id = document.getElementsByName('id')[0].value
    const num = document.getElementsByClassName('num')[0]
    num.innerText = number_n;
    const inv = document.getElementsByClassName('inv')[0]
    var str = '';
    for (var i = 0; i < invest.length; i++) {
        str = str + invest[i] + ' ';
    }

    document.getElementsByName('date_n')[0].value = date_n;
    document.getElementsByName('number_n')[0].value = number_n;
    document.getElementsByName('face')[0].value = face;
    document.getElementsByName('invest')[0].value = invest;
    document.getElementsByName('add')[0].value = add;
    document.getElementsByName('pass')[0].value = pass;
    document.getElementsByName('id')[0].value = id;
    document.getElementById("UserEnter").submit();
}
okayElement.addEventListener('click', save);
