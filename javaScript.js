let UserSc=0;
let compSc=0;

let choises=document.querySelectorAll(".images");
let msgPara=document.querySelector(".msg");
let UserSc1=document.querySelector("#user");
let compSc1=document.querySelector("#comp");


const genCompChoise=()=>{
    const arr=["rock","paper","scissor"];
   const val=Math.floor( Math.random()*3);
   return arr[val];

}


choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        let UserChoise=choise.getAttribute("id");
       playGame(UserChoise);

 } )
    });

    const winnerText=(Userwin,compChoise)=>{
        if(Userwin){
            msgPara.innerText=`You Win,Computer Choose ${compChoise} `;
            msgPara.style.backgroundColor="green";
            UserSc++;
            UserSc1.innerText=UserSc;

        }
        else{
            msgPara.innerText=`You lose,Computer Choose ${compChoise} `;
            msgPara.style.backgroundColor="red";
            compSc++;
            compSc1.innerText=compSc;

        }
    }

    const playGame=(UserChoise)=>{
    
     const compChoise=genCompChoise();
        console.log(UserChoise);
        console.log(compChoise);
        let Userwin=true;
        if(UserChoise===compChoise){
            msgPara.innerText=`Computer also choose ${UserChoise} SO,its A Draw`;
            msgPara.style.backgroundColor="#081b31";

        }else{

            if(UserChoise==="rock"){
                    //Paper,scissor
                     Userwin= compChoise==="paper"? false:true;
            }
            else if(UserChoise==="paper"){
                    //rock,scissor
                    Userwin= compChoise==="scissor"? false:true;
            }
            else{
                 //rock,paper
                     Userwin= compChoise==="rock"? false:true;
            
            }
                    winnerText(Userwin,compChoise);

        }

}
