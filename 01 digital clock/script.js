

function updateClock() {
 let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes(); 
let seconds = date.getSeconds();
let month = date.getMonth(); // 0-11
let today = date.getDate(); // 1-31 
let year = date.getFullYear(); // 4-digit year
    // Format the date
let period = date.getHours() >= 12 ? 'PM' : 'AM';

        


    if(hour >= 12) {
        hour = hour - 12; // Convert to 12-hour format
        if (hour === 0) hour = 12; // Handle midnight case
    }

    // Format the time to always show two digits
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    

    // Update the clock display
    document.querySelector('.hour').textContent = hour;
    document.querySelector('.minute').textContent = minute;
    document.querySelector('.second').textContent = seconds;
    document.querySelector('.period').textContent= period;


    // Update the date display
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.querySelector('.month').textContent = monthNames[month];   
    document.querySelector('.today').textContent = today < 10 ? '0' + today : today;
    document.querySelector('.year').textContent = year; 

}
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately