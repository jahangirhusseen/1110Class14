 const fiverr_area = document.querySelector('.fiverr_area');
 const fiverr_counter = document.querySelector('.fiverr_counter');







 fiverr_area.addEventListener('submit', function(e){
    e.preventDefault(); 
    let date = this.querySelector('input[type="date"]').value; 
    let time = this.querySelector('input[type="time"]').value; 
    


    
setInterval(() => { 
    let start_time = new Date();
    let end_time = new Date(date + ' ' + time); 

    let time_diff = Math.floor(Math.abs(end_time.getTime() -  start_time.getTime()));
    
    let total_sec = Math.floor(time_diff / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hours = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hours / 24);  

    
    let hours = total_hours - (total_day * 24);
    let min = total_min - (total_day * 24 * 60) - (hours * 60);
    let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 *60) - (min * 60);

    fiverr_counter.innerHTML = ` ${ total_day > 9 ? total_day : '0'+total_day } : ${ hours > 9 ? hours : '0'+hours} : ${ min > 9 ? min : '0'+min} : ${ sec > 9 ? sec : '0'+sec} `;
    

}, 1000);

});


const todo = document.querySelector('#do');
const add = document.querySelector('#add');
const list = document.querySelector('#list');

add.addEventListener('click',function(e){
e.preventDefault()

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = todo.value;
    list.appendChild(li);
    todo.value = '';
});
