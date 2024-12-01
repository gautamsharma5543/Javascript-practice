let btn=document.querySelector("#bt");
let curr="white";
let body=document.querySelector("body");
btn.addEventListener("click",()=> {
    if(curr==="light"){
        curr="dark"
        body.style.backgroundColor="black";
        
    }
    else{
        curr="light";
    body.style.backgroundColor="white";
    
}
    console.log(curr);
}

);