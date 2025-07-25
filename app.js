let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const user_score= document.querySelector("#user");
const comp_score= document.querySelector("#comp");

const gencompchoice =() =>{
    const options = ["rock" , "paper", "scissors"];
    const random= Math.floor(Math.random()*3);
    return options[random];
};

const gamedraw= () =>{
     msg.innerText= "Draw..Play Again";
     msg.style.backgroundColor="darkslateblue";
};

const showWinner= (userwin, userchoice, compchoice) =>{
   if(userwin){
    userscore++;
    user_score.innerText = userscore;
     msg.innerText= `You Win! Your ${userchoice} beats ${compchoice}`;
     msg.style.backgroundColor="green";
   }
   else{
    compscore++;
    comp_score.innerText= compscore;
      msg.innerText= `You Lost..${compchoice} beats Your ${userchoice}`;
      msg.style.backgroundColor = "red";
   }
};

const playgame= (userchoice)=>{
    console.log("user choice=", userchoice);
    const compchoice= gencompchoice();
    console.log("computer choice=", compchoice);
    
    if(userchoice === compchoice){
        gamedraw();
    }
    else{
    let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice ==="paper" ? false : true;
            }
        else if(userchoice === "paper"){
                userwin = compchoice ==="scissors" ? false : true;
            }
        else{
                userwin = compchoice ==="rock" ? false : true; 
            }
            showWinner(userwin, userchoice, compchoice);
        }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});