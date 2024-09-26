const singleTriggers = document.querySelectorAll('.num');
const submitBtn = document.querySelector(".submitTxt");
const thkYou = document.querySelector(".thankyou2");
const card1 = document.querySelector(".card");
const ratingV = document.querySelector(".submitTxt2");
let ratingValue;

singleTriggers.forEach(item => item.addEventListener('click', toggleAccordian));

function toggleAccordian() { 
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    ratingValue = current[0].textContent;
    
}

submitBtn.addEventListener("click", submitBtns);
function submitBtns() {
   // console.log(ratingValue)
    thkYou.style.display = "block";
    card1.style.display = "none";
    ratingV.innerHTML = "You selected "+ ratingValue +" out of 5 ";
}