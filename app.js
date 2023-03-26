const filed = document.querySelector('.input-filed');
const btn = document.querySelector('.btn');
const show = document.querySelector('.show');
function checkNumber() {
    if (filed.value % 2 === 0) { 
        show.innerHTML = 'The number is ' +`${filed.value}`+ ' even number'
    }
    else {
        show.innerHTML = 'The number is' + `${filed.value} `+ 'odd number'
    }
}

btn.addEventListener('click', checkNumber)