const clock = document.querySelector('.clock');

setInterval(function(){

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    clock.innerHTML = `${ h > 12 ? (h-12) == 0 ? 12 : (h - 12): h} :  ${ zeroTomi(m)} : ${zeroTomi(s)} ${ h >= 12 ? 'PM' : 'AM'}`;

});



const todo = document.querySelector('#do');
const add = document.querySelector('#add');
const list = document.querySelector('#list');

add.addEventListener('click',function(){
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = todo.value;
    list.appendChild(li);
    todo.value = '';
});



const start = document.querySelector('#go');
const output = document.querySelector('#output');
const stop = document.querySelector('#stop');
const count = document.querySelector('#count');
const loader = document.querySelector('.loader');


let counter_value;
let counter;

start.addEventListener('click', () => {
    counter_value = count.value;
    

    counter = setInterval(() => {
        output.innerHTML = counter_value;
        
        if(counter_value == 0){
            clearInterval(counter)
        }
        
        counter_value--;
    },1000);
});