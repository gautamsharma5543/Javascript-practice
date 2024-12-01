let yourscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

let your=document.querySelector("#your-score");
let comp=document.querySelector("#comp-score");

const getcompchoice=()=>{
    const option=["paper","stone","scissor"];
    const mathran=Math.floor(Math.random()*3);
    return option[mathran];

};
const gamdrawn=()=>{
    console.log("game drawn");
    msg.innerText="game drawn";
    msg.style.backgroundColor="black";
};

const showwinner=(userwin,userid,compchoice)=>{
    if(userwin){
        yourscore++;
        your.innerText=yourscore;
console.log("you win");
msg.innerText=`you win! ${userid} beats ${compchoice}`;
msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comp.innerText=compscore;
        console.log("comp win");
        msg.innerText=`you lost! ${compchoice}   beats ${userid}`;
        msg.style.backgroundColor="red";
    }
};
const playgame=(userid)=>{
    console.log("user choice ",userid);
    const compchoice=getcompchoice();
    console.log("comp choice",compchoice);

    if(userid===compchoice){
        gamdrawn();
    }
    else{
        let userwin=true;
        if(userid==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userid==="paper")
        {
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userid,compchoice);
    }

}


choices.forEach((div)=>{
    console.log(div);
    const userid=div.getAttribute("id");
    div.addEventListener("click", () => {
        playgame(userid)
    });
});

