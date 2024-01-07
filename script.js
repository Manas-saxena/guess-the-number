'use strict';

let randomNumber;
let initialScore = 20;
let Highscore =0 
window.onload = ()=>{
    randomNumber = Math.floor((Math.random()*20)+1);
    score.innerHTML = `score : ${initialScore}`
    highscore.innerHTML = `High Score : ${localStorage.getItem("HighScore")==null?Highscore:localStorage.getItem("HighScore")}`
    console.log(randomNumber)
}

const corAnsCont = document.getElementById("correct-ans-contianer");
const guessedNumberInput = document.getElementById("g-num");
const result = document.getElementById("result");
const score = document.getElementById("score");
const checkButton = document.getElementById("check");
const again = document.getElementById("again");
const gif = document.getElementsByClassName("gif");
const highscore = document.getElementById("high-score");

again.addEventListener("click",()=>{
    location.reload();
})
checkButton.addEventListener("click",()=>{
    const inputAns = getInputAns(); 
    if(inputAns == randomNumber){
        result.innerHTML = "Correct Answer";
        corAnsCont.innerHTML= `${randomNumber}`
        gif[0].style.display = "block"
        const Highscore = localStorage.getItem("HighScore"); 
        if(Highscore != null && initialScore > Highscore){
            Highscore = initialScore;
            localStorage.setItem("HighScore",`${initialScore}`)
        }
    }
    else{
        score.innerHTML = `score : ${--initialScore}`;

        if(inputAns > randomNumber){
            result.innerHTML="Too High!";
        }
        else{
            result.innerHTML = "Too Low!";
        }
    }
})

guessedNumberInput.addEventListener("input",checkInput);

function checkInput(){
    const inputValue = guessedNumberInput.value;
    if(inputValue != "" && (inputValue >20 || inputValue<1)){
        alert("Enter a number btwn 1 to 20")
        guessedNumberInput.value = "";
    }
}
function getInputAns(){
    return guessedNumberInput.value;
}