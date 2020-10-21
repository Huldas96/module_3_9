
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

// FIRST NEXT BUTTON SLIDE RIGHT
nextBtnFirst.addEventListener("click", function(){
    console.log(slidePage.style.marginLeft);
/*     if(!firstName.value) return
    if(!lastName.value) return */
    slidePage.style.transform = "translateX(0rem)";
/*     progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1; */
});

/* // SECOND NEXT BUTTON SLIDE RIGHT
nextBtnSec.addEventListener("click", function(){
 /*    if(email.value.search("@") === -1) {
        email.setCustomValidity("Invalid Email")
        return
    } else {
        email.setCustomValidity("")
    }  
    slidePage.style.marginLeft = "-50%";
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

// THIRD NEXT BUTTON SLIDE RIGHT
nextBtnThird.addEventListener("click", function(){
   /*  if(!birthDate.value) return 
    slidePage.style.marginLeft = "-75%";
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

//  SUBMIT BUTTON SLIDE RIGHT
submitBtn.addEventListener("click", function(){
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

// FIRST BACK BUTTON SLIDE LEFT
backBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
    progressBullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

// SECOND BACK BUTTON SLIDE LEFT
backBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    progressBullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

// THIRD BACK BUTTON SLIDE LEFT
backBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    progressBullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}); */