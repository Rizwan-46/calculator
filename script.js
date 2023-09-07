
const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const btn = document.querySelector(".calculate");
const result = document.querySelector(".result");


function valide(insan, admi) {
    if (!insan || !admi) {
        alert("fill both field");
        return false;
    }
    return true;
}

function game() {
    const insan = firstInput.value;
    const admi = secondInput.value;
    const isValid = valide(insan, admi); // call the valide function and store the result
    if (isValid) { // check if the result is true
        clearResult();
        applyResult();
        const randomNumber = Math.floor(Math.random() * 100)+1;    
        firstPerson.textContent = insan;
        secondPerson.textContent = admi;
        lastResult.textContent = `${randomNumber}%`;
        if (randomNumber > 80) {
            Icon.setAttribute("src", "./heart-circle-bolt-solid.svg")
            lastResult.style.color = '#880808';
        } else if (randomNumber > 50 && randomNumber <= 80){
            Icon.setAttribute("src", "./heart-circle-check-solid.svg")
        } else if (randomNumber <= 50) {
            Icon.setAttribute("src", "./heart-crack-solid.svg")
        }
    }
    firstInput.value = "";
    secondInput.value = "";
  
};


btn.addEventListener("click", game);

function applyResult() {
    const firstDiv = document.createElement("div");
    firstDiv.classList.add("both-name");
    const firstPara = document.createElement("p");
    firstPara.classList.add("first-person")
    const secondPara = document.createElement("p");
    secondPara.classList.add("second-person");
    const finalResult = document.createElement("div");
    finalResult.classList.add("final-result");
    const loveResult = document.createElement("p");
    loveResult.classList.add("love-result");
    const heartIcon = document.createElement("img");
    heartIcon.setAttribute("src", "./heart-circle-bolt-solid.svg")

    firstDiv.append(firstPara, secondPara);
    finalResult.append(loveResult, heartIcon);
   
    result.append(firstDiv, finalResult);

    firstPerson = document.querySelector(".first-person");
    secondPerson = document.querySelector(".second-person");
    lastResult = document.querySelector(".love-result");
    Icon = document.querySelector("img");
  

   
}
function clearResult() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
};


