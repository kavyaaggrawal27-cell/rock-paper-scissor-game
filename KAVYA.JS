let boxes = document.querySelectorAll(".boxes");
let resat = document.querySelector(".resat");
let show = document.querySelector(".winner");
let h1 = document.querySelector(".h1");
let newgame = document.querySelector(".newgame");
let draw = document.querySelector(".draw");
let h2 = document.querySelector(".h2");
let drawnew = document.querySelector(".draw-b")
let turnnn = document.querySelector(".who");

let winnerpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

turnx = true;

let count = 0;

turnnn.innerText = `current tern : X`

let found = false








boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        if(turnx){
            box.innerText = "X"
            turnx = false
            box.style.color = "red"
            count++
            console.log(count)
            turnnn.innerText = `current turn : O`
            
        }else{
            box.innerText = "O"
            turnx = true;
            box.style.color = "yellow"
            count++
            console.log(count)
            turnnn.innerText = `current turn : X`
            
            
        }

        box.disabled = true;
        winnercheck();
        checkdraw();

    });
});

checkdraw = () => {
    if(count === 9){
        if(found === false)
        draw.classList.remove("fide");

    }
}


winnercheck = () => {
    for(let pattern of winnerpattern){
        let check1 = boxes[pattern[0]].innerText;
        let check2 = boxes[pattern[1]].innerText;
        let check3 = boxes[pattern[2]].innerText;

        if(check1 != "" && check2 != "" && check3 != ""){
            if(check1 === check2  && check2 === check3){
                h1.innerText = `congratulations the winner is ${check1}`
                console.log(`winner is ${check1}`)
                congrat();
                found = true;

            }
        }

    }
}

console.log(count)




congrat = () => {
    show.classList.remove("hide")
}

unable = () => {
    for(let box of boxes){
        box.innerText = "";
        turnx = true;
        show.classList.add("hide")
        box.disabled = false;
        count = 0
        turnnn.innerText = `current turn : X`
    }
}

unablee = () => {
    for(let box of boxes){
        box.innerText = "";
        turnx = true;
        draw.classList.add("fide")
        box.disabled = false;
        count = 0
        turnnn.innerText = `current turn : X`
    }
}



resat.addEventListener("click" , unable);
newgame.addEventListener("click" , unable);
drawnew.addEventListener("click",unablee );


