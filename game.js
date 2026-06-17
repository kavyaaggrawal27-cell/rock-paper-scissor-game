let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let show1 = document.querySelector(".show1");
let show2 = document.querySelector(".show2");
let tap = document.querySelectorAll(".tap");
let ytotal = document.querySelector(".y-total");
let ctotal = document.querySelector(".c-total");



let winner = document.querySelector(".winner")

let newgame = document.querySelector(".new-game");
let lose = document.querySelector(".lose");
let losegame = document.querySelector(".l-game")
let same = document.querySelector(".same");
let regame = document.querySelector(".re-game")





let mycheck = ""
let computercheck = ""

tap.forEach((single) => {
single.addEventListener("click", () => {
   
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 0){

        show2.style.backgroundImage = "url('rock.png')";
        computercheck = "rock"
        

        
    }else if(randomNumber === 1){
        show2.style.backgroundImage = "url('paper.png')";
        computercheck = "paper"
        

    }else{
        show2.style.backgroundImage = "url('scissor.png')";
        computercheck = "scissor"
    }

    
});
});




rock.addEventListener("click", () => {
   
    show1.style.backgroundImage = "url('rock.png')";
    mycheck = "rock"
    winnercheck();
    losecheck();
    drawcheck();
    disable();
 


});
    
   



paper.addEventListener("click", () => {
    show1.style.backgroundImage = "url('paper.png')";
    mycheck = "paper"
    winnercheck();
    losecheck();
    drawcheck();
    disable();
  

})

scissor.addEventListener("click", () => {
    show1.style.backgroundImage = "url('scissor.png')";
    mycheck = "scissor"
    winnercheck();
    losecheck();
    drawcheck();
    disable();
   
})


let disable = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}





let winnercheck = () => {

    if(mycheck === "rock" && computercheck === "scissor"){
        winner.classList.remove("hide")
        ycount++

        ytotal.innerText = `your winnig : ${ycount}`
      

       

    }else if(mycheck === "paper" && computercheck === "rock"){
        winner.classList.remove("hide")
         ycount++

        ytotal.innerText = `your winnig : ${ycount}`
        
        
    }else if (mycheck === "scissor" && computercheck === "paper"){
        winner.classList.remove("hide")
        ycount++

        ytotal.innerText = `your winnig : ${ycount}`
        
        
    }
}

let ycount = 0;
let ccount = 0;

let losecheck = () => {
    if(computercheck === "rock" && mycheck === "scissor"){
        lose.classList.remove("not")
        ccount++

        ctotal.innerText = `Computer winnig : ${ccount}`
       
        
    }else if(computercheck === "paper" && mycheck === "rock"){
        
        lose.classList.remove("not")
        ccount++

        ctotal.innerText = `Computer winnig : ${ccount}`
        
        
    }else if (computercheck === "scissor" && mycheck === "paper"){
        lose.classList.remove("not")
        ccount++

        ctotal.innerText = `Computer winnig : ${ccount}`
       
        
    }

}

let drawcheck = () => { 
    if(computercheck === "rock" && mycheck === "rock"){
        same.classList.remove("un");
        
        
    }else if(computercheck === "paper" && mycheck === "paper"){
       same.classList.remove("un");
        
        
        
        
    }else if (computercheck === "scissor" && mycheck === "scissor"){
        same.classList.remove("un");
        
        
    }

}


let unable = () => {
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    show1.style.backgroundImage = "none"
    show2.style.backgroundImage = "none"
    winner.classList.add("hide")
    lose.classList.add("not")
    same.classList.add("un")
    mycheck = "";
    computercheck = "";

}


newgame.addEventListener("click", unable);
losegame.addEventListener("click", unable);
regame.addEventListener("click", unable);












