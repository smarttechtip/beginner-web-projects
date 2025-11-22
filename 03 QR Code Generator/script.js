let qr;
let text=document.getElementById("text");
let generateQr=document.getElementById("generateQR");
let qrBox=document.getElementById("qrBox");
let downloadQr=document.getElementById("downloadQR");



generateQr.addEventListener("click",QR);
text.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        QR();
    }
})


function QR(){
    let value=text.value;

    if(value.trim()){

        //Erase Previous QR
        qrBox.innerHTML="";

        qr=new QRCode(qrBox, {
            text: value,
            width: 200,
            height: 200,
        })
    }
}



downloadQr.addEventListener("click",()=>{


    if(qr){
        let img=document.querySelector("#qrBox img");
        let link=document.createElement("a");
        link.href=img.src;
        link.download="qr_code.png";
        link.click();
    }
})