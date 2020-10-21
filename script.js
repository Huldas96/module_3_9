
//BUTTONS
const slidePage = document.querySelector(".slidePage");
const nextBtnFirst = document.querySelector(".nextBtn");
const backBtnSec = document.querySelector(".back-1");
const nextBtnSec = document.querySelector(".next-1");
const backBtnThird = document.querySelector(".back-2");
const nextBtnThird = document.querySelector(".next-2");
const backBtnFourth = document.querySelector(".back-3");
const submitBtn = document.querySelector(".submit");

// PROGRESS BAR
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const progressBullet = document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;

//REQUIRED INPUT
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phoneNumber");
const birthDate = document.querySelector(".birthDate");
const checkBox = document.querySelector(".check-box");
const userName = document.querySelector(".userName");
const password = document.querySelector(".password");
const gender = document.querySelector(".gender");

// ERROR
const error = document.querySelectorAll(".error");

// ERROR FUNCTION
const errorDisplay = function(firstInput, secondInput, firstError, secondError) {
    firstInput.addEventListener("change", function(){
        firstError.classList.remove("active");
    });
    secondInput.addEventListener("change", function(){
        secondError.classList.remove("active");
    });
    if(!firstInput.value) {
        firstError.classList.add("active");
        if(!secondInput.value) {
            secondError.classList.add("active");
            return "error"
        }
        return "error"
    }
    if(!secondInput.value) {
        secondError.classList.add("active");
        return "error"
    }
}

// FIRST NEXT BUTTON SLIDE RIGHT
nextBtnFirst.addEventListener("click", function(){
    if (errorDisplay(firstName, lastName, error[0], error[1]) === "error") return
    slidePage.style.transform = "translateX(calc(-1 * calc(100% / 5)))";
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1; 
});

// SECOND NEXT BUTTON SLIDE RIGHT
nextBtnSec.addEventListener("click", function(){
    if (errorDisplay(email, phoneNumber, error[2], error[3]) === "error") return
    slidePage.style.transform = "translateX(calc(-2 * calc(100% / 5)))";
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

// THIRD NEXT BUTTON SLIDE RIGHT
nextBtnThird.addEventListener("click", function(){
    if (errorDisplay(birthDate, gender, error[4], error[5]) === "error") return
    if(!birthDate.value) return 
    slidePage.style.transform = "translateX(calc(-3 * calc(100% / 5)))";
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

//  SUBMIT BUTTON SLIDE RIGHT
submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    if (errorDisplay(userName, password, error[6], error[7]) === "error") return
    if(checkBox.checked === false) return
    slidePage.style.transform = "translateX(calc(-4 * calc(100% / 5)))";
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

// FIRST BACK BUTTON SLIDE LEFT
backBtnSec.addEventListener("click", function(){
    slidePage.style.transform = "translateX(0)";
    progressBullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

// SECOND BACK BUTTON SLIDE LEFT
backBtnThird.addEventListener("click", function(){
    slidePage.style.transform = "translateX(calc(-1 * calc(100% / 5)))";
    progressBullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

// THIRD BACK BUTTON SLIDE LEFT
backBtnFourth.addEventListener("click", function(){
    slidePage.style.transform = "translateX(calc(-2 * calc(100% / 5)))";
    progressBullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}); 
