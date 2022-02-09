// dice images 
const diceImg = document.querySelector(".dice");

/*--------------------PLAYER 1 --------------------*/
const player1 = document.querySelector(" #player1");

const diceL1Img = document.querySelector(".dice1");
const diceL2Img = document.querySelector(".dice2");
const diceL3Img = document.querySelector(".dice3");
const diceL4Img = document.querySelector(".dice4");
const diceL5Img = document.querySelector(".dice5");
const diceL6Img = document.querySelector(".dice6");

/*--------------------PLAYER 2 --------------------*/
const player2 = document.querySelector(" #player2");

const diceR1Img = document.querySelector(".dicee1");
const diceR2Img = document.querySelector(".dicee2");
const diceR3Img = document.querySelector(".dicee3");
const diceR4Img = document.querySelector(".dicee4");
const diceR5Img = document.querySelector(".dicee5");
const diceR6Img = document.querySelector(".dicee6");

const totalPoint = document.querySelector(".totalPoint");



// dice player1 & player2 number 
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");

num1.textContent = 0;
num2.textContent = 0;

// player1  & player2 total point 
const total1 = document.querySelector(".total1");
const total2 = document.querySelector(".total2");

total1.textContent = 0;
total2.textContent = 0;

const diceButton = document.querySelector("#diceBtn");


let lastRandomList = [];



// -------------  CLICK THE DICE  BUTTON  -------------

diceButton.addEventListener("click", function() {

    const diceRandom = Math.floor(Math.random() * 6) + 1;

    diceImg.src = `./img/zar${diceRandom}.png`;
    lastRandomList.push(diceRandom);
    num1.textContent = `${diceRandom}`;



    /*--------------------PLAYER 1 --------------------*/
    if (lastRandomList.length === 1) {
        diceL1Img.style.display = "block";
        diceL1Img.src = `./img/zar${lastRandomList[0]}.png`;
    } else if (lastRandomList.length === 2) {
        diceL2Img.style.display = "block";
        diceL2Img.src = `./img/zar${lastRandomList[1]}.png`;
    } else if (lastRandomList.length === 3) {
        diceL3Img.style.display = "block";
        diceL3Img.src = `./img/zar${lastRandomList[2]}.png`;
    } else if (lastRandomList.length === 4) {
        diceL4Img.style.display = "block";
        diceL4Img.src = `./img/zar${lastRandomList[3]}.png`;
    } else if (lastRandomList.length === 5) {
        diceL5Img.style.display = "block";
        diceL5Img.src = `./img/zar${lastRandomList[4]}.png`;
    } else if (lastRandomList.length === 6) {
        diceL6Img.style.display = "block";
        diceL6Img.src = `./img/zar${lastRandomList[5]}.png`;
    }


    num2.textContent = `${diceRandom}`;

    /*--------------------PLAYER 2 --------------------*/


    if (lastRandomList.length === 1) {
        diceR1Img.style.display = "block";
        diceR1Img.src = `./img/zar${lastRandomList[0]}.png`;
    } else if (lastRandomList.length === 2) {
        diceR2Img.style.display = "block";
        diceR2Img.src = `./img/zar${lastRandomList[1]}.png`;
    } else if (lastRandomList.length === 3) {
        diceR3Img.style.display = "block";
        diceR3Img.src = `./img/zar${lastRandomList[2]}.png`;
    } else if (lastRandomList.length === 4) {
        diceR4Img.style.display = "block";
        diceR4Img.src = `./img/zar${lastRandomList[3]}.png`;
    } else if (lastRandomList.length === 5) {
        diceR5Img.style.display = "block";
        diceR5Img.src = `./img/zar${lastRandomList[4]}.png`;
    } else if (lastRandomList.length === 6) {
        diceR6Img.style.display = "block";
        diceR6Img.src = `./img/zar${lastRandomList[5]}.png`;
    }


});
// player1.style.backgroundColor = ` rgb(177, 174, 174)`; //sırası  o oyuncuya geçen eleman
//player2.style.backgroundColor = `rgb(148, 144, 144)`; //sırası kaybedilen elemen