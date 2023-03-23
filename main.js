var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
        dots[i].className = dots[i].className.replace("active", "");


    }
    x[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " w3-white active";

};

// 
const openRegister = document.querySelector(".js-register");
const btnĐK = document.querySelector(".js-btn-register");
const btnLogin = document.querySelector(".js-btn-login");
const openLogin = document.querySelector(".js-login");
const modal = document.querySelector(".js-modal");

const back = document.querySelector(".js-btn-back");
const backLogin = document.querySelector(".back-login");
const modalBody = document.querySelector(".js-modal-body");
const body = document.querySelector(".js-body");
const overlay = document.querySelector(".js-overlay");

const convertLogin = document.querySelector(".convert-login");
const convertRegister = document.querySelector(".convert-register");

btnĐK.addEventListener("click", function () {
    modal.classList.add("moda-show");
    openRegister.classList.add("register-show");
    openLogin.classList.remove("login-show");
});
back.addEventListener("click", function () {
    modal.classList.remove("moda-show");
});

btnLogin.addEventListener("click", function () {
    modal.classList.add("moda-show");
    openLogin.classList.add("login-show");
    openRegister.classList.remove("register-show");
});

backLogin.addEventListener("click", function () {
    modal.classList.remove("moda-show");
});

// if (
//   overlay.addEventListener("click", function () {
//     modal.classList.remove("moda-show");
//   })
// );
modalBody.addEventListener("click", function (e) {
    modal.classList.remove("moda-show");
    body.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});
convertLogin.addEventListener("click", function () {
    openLogin.classList.add("login-show");
    openRegister.classList.remove("register-show");
});

convertRegister.addEventListener("click", function () {
    openLogin.classList.remove("login-show");
    openRegister.classList.add("register-show");
});
