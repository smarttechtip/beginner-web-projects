const btn=document.getElementById("btn");
const switchBtn=document.querySelector(".switch");
const body=document.querySelector(".body");



switchBtn.addEventListener("click",()=>{

    btn.classList.toggle("dark");

    body.classList.toggle("darkbody");


    if(btn.classList.contains('dark')){
        btn.textContent="🌙";
        btn.style.backgroundColor="grey"
    }else{
        btn.textContent="☀️";
        btn.style.backgroundColor="white"
    }
})