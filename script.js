let res = document.querySelector('.calculator__summ-number');
let input = document.querySelector('.input');
let sum = parseInt(res.innerText);
let servicePrice = 0;
let radio = document.querySelectorAll('.radio');
let oldValue = 0;
let square = parseInt(input.value) ? 'undefined' : 0;

if (servicePrice == 0) {
    servicePrice = document.querySelector('input[name="service"]:checked').value;
}

input.addEventListener('input', updateValue);

function getServicePrice(el) {
    servicePrice = parseInt(el);

    if (square !== 'undefined' || square !== 0) {
        getSum(servicePrice, square);
    }
}

function updateValue(e) {
    square = e.target.value;

    if (e.target.value == '') {
        square = 0;
    } 

    setTimeout(() => {
        getSum(servicePrice, square);
    }, 200)
}

function getSum(service, value) {
    let result = service * value;
    let diff = oldValue;

    if (result !== 0) {
        let timer = setInterval(() => {
            if (result > oldValue) {
                diff += 1;
            } else {
                diff -= 1;
            }
            res.innerText = diff;
        }, 1);   

        setTimeout(() => {
            timeIsOver(result, timer);
        }, 1000);
    } else {
        let timer = setInterval(() => {

            if (diff !== result) {
                diff -= 1;
            } 
            
            res.innerText = diff;

            setTimeout(() => {
                timeIsOver(result, timer);
            }, 1000);

        }, 1);
    }
}

function timeIsOver(sum, timer) {
    res.innerText = sum;
    oldValue = sum;

    clearInterval(timer);
}
