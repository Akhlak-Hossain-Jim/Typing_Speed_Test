const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
var PARA = document.querySelector("#dyp");
const originText = PARA.innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const LPSCnt = document.querySelector(".span");
const LEFT =document.querySelector("#left-dy");
const RIGHT =document.querySelector("#right-dy");
const OVIW =document.querySelector("#text-plate h3");
const CATAGORY = ["Basic", "Intermediate", "Advance"];
const TEXT =["Text to test.", , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint dignissimos nihil at nesciunt natus ut laborum esse amet facilis distinctio vero, corporis saepe, non magnam, incidunt id itaque dolorem dolorum ea. Repellat consectetur ab voluptas deserunt? Praesentium, repellat eos. Corporis velit accusamus, perferendis pariatur numquam error incidunt mollitia autem aspernatur nesciunt maxime aliquid! In eos ducimus, atque sequi veniam blanditiis. Laboriosam nam doloribus deserunt eum minima fuga tempore debitis, perspiciatis itaque recusandae reiciendis possimus voluptatem, esse ut quas veritatis maxime! Praesentium odit vero, molestiae quae tenetur, at, repellendus deserunt maxime quibusdam neque modi ratione. Aperiam facere quae consequuntur dolorem in atque suscipit? Inventore quam commodi, dolor vero doloremque cum quis deleniti sit consequatur nihil neque saepe distinctio ad excepturi quo alias ut porro ea recusandae officia consectetur officiis sint ipsam. In molestias soluta saepe. Nostrum animi reprehenderit optio repellendus esse eveniet eos. Rem tenetur porro vel maiores ipsam corporis ullam voluptatum minima, quam doloribus aut laboriosam itaque veniam nulla recusandae distinctio tempore laborum? Quae doloremque doloribus quidem maxime dolore repellat non? Totam deserunt error nihil quidem nostrum? Reiciendis quibusdam sequi voluptatum quo provident, cumque veritatis aspernatur labore eos. Animi earum cumque ratione minima? Numquam sit quae eligendi fugit eos ratione tempora illum natus amet esse adipisci ex inventore neque, eum, non velit earum expedita tempore tenetur mollitia. Natus id ullam earum temporibus, excepturi repellat libero quam! Neque placeat dolor nam corrupti repellat. Perferendis blanditiis sed pariatur reprehenderit eaque debitis dolorum vel dolor corporis sint odit laboriosam modi, nesciunt libero."];


var timer =[0,0,0,0];
var interval;
var timerRunning = false;

// Dynamic content changer 

function rgt() {
    OVIW.innerHTML= CATAGORY[1];
    var txtxtxt = PARA.innerHTML = "In order to protect the population, the government declared \"lockdown\" throughout the nation from 23 March to 30 May and prepared some necessary steps to spread awareness to keep this syndrome away from them. Infections remained low until the end of March but saw a steep rise in April. In the week ending on 11 April, new cases in Bangladesh grew by 1,155 percent, the highest in Asia, ahead of Indonesia, with 186 percent. On 6 May, cases were confirmed in all districts. Rangamati was the last district to report confirmed cases of COVID-19. On 13 June, the number of cases in Bangladesh exceeded the number of cases in China, the country where the outbreak began. Bangladesh reached two grim milestones of 160,000 cases and 2,000 deaths on 5 July and overtook France in terms of the number of cases two days later. The number of recoveries in the country exceeded the number of active cases on 12 July.";
    originText = txtxtxt;
}

function lft() {
    OVIW.innerHTML= CATAGORY[0];
    const hdgsj = PARA.innerHTML = "Text to test.";
    originText = hdgsj;
}

RIGHT.addEventListener("click", rgt, false);
LEFT.addEventListener("click", lft, false);

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
};

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        testWrapper.style.borderColor = "#198754";
        clearInterval(interval);

        var lPs = Math.ceil(originText.length / ((timer[0] * 60) + timer[1] + (timer[2]/60)));

        LPSCnt.innerHTML= lPs + "\xa0" + "Letter/Sec";

        alert("Congrates test Successfully Done");
    }
    else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#FFC107";
        }
        else {
            testWrapper.style.borderColor = "#DC3545";
        }
    }
};

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnteredLength);
};

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    LPSCnt.innerHTML= "00" + "\xa0" + "Letter/Sec";
    testWrapper.style.borderColor = "black";
};

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);