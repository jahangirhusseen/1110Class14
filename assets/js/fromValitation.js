const check_btn = document.querySelector('#agecheck');
const name = document.querySelector('#name');
const year = document.querySelector('#year');
const result = document.querySelector('#result');

// name.addEventListener(`focus`, function(){
//     alert();
// });
name.addEventlistener('change', function(){
    result.innerHTML = 'HI';
});