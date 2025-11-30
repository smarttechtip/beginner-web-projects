const passwordResult=document.getElementById("passwordResult");
const copyBtn=document.getElementById("copyBtn");
const generateBtn=document.getElementById("generateBtn");


const lengthInput=document.getElementById("length");
const includeLower=document.getElementById("lowercase");
const includeUpper=document.getElementById("uppercase");
const includeNumbers=document.getElementById("numbers");
const includeSymbols=document.getElementById("symbols");



function generatePassword(){
    
    const length=lengthInput.value;
    let chars="";

    const lower="abcdefghijklmnopqrstuvwxyz";
    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbols="!@#$^&*()_+-={}[]<>,.?/";


    if(includeLower.checked) chars+=lower;
    if(includeUpper.checked) chars+=upper;
    if(includeNumbers.checked) chars+=numbers;
    if(includeSymbols.checked) chars+=symbols;

    let password="";
    if(chars){
        
        for(let i=0;i<length;i++){
            password+=chars[Math.floor(Math.random()*chars.length)];
        }
       
    }

 passwordResult.value=password;

}


generateBtn.addEventListener("click",generatePassword);


copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordResult.value);
    copyBtn.textContent="Copied!"
    setTimeout(()=>copyBtn.textContent="Copy",1500)
    
})