
// const hours = document.querySelector('#h')
// const  min = document.querySelector('#m')
// const sec = document.querySelector('#s')

const clock = document.querySelector('.clock');

setInterval(function(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let ampm = h >12 ? 'PM' : 'Am';

    let hour = '';
    if(h > 0 && h <= 12){
        hour = h;
    }else{
        hour = h -12;
    }
    clock.innerHTML = `${hour}:${m}:${s} ${ampm}`;
    
    // hours.innerHTML = h;
    // min.innerHTML = m;
    // sec.innerHTML = s; 
});