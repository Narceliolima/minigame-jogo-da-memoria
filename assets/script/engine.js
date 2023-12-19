const listaEmoji = [ "🐍","🐍","🐋","🐋","🦆","🦆","🐖","🐖","🐉","🐉","🐂","🐂","🐕","🐕","🐤","🐤"];
let openCards = [];

let shuffleEmojis = listaEmoji.sort(() => Math.random() > 0.5 ? 2: -1);

function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    console.log(document.querySelectorAll(".boxMatch").length);
    console.log(listaEmoji.length);
    if(document.querySelectorAll(".boxMatch").length === listaEmoji.length){
        alert("You Win!");
    }
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length === 2){
        setTimeout(checkMatch, 500);
    }
}

for(let i = 0; i<listaEmoji.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}