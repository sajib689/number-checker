const filed = document.querySelector('.input-filed');
const btn = document.querySelector('.btn');
const show = document.querySelector('.show');
function checkNumber() {
    if (filed.value % 2 === 0) { 
        show.innerHTML = 'This is a even number'
    }
    else {
        show.innerHTML = 'This is a odd number'
    }
}

btn.addEventListener('click', checkNumber)