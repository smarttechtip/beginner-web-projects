const display=document.getElementById("display");
const buttons= document.querySelectorAll(".btn");


buttons.forEach(function(button){
    button.addEventListener("click", function(){

          const value=this.innerText;


          if(value==="AC") display.value="";
        else if(value==="C") display.value=display.value.slice(0,-1);
        else if(value==="x") display.value+="*"
        else if(value==="=") 
           try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
        else display.value+=value;
            




    });
})
