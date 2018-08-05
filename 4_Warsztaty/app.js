//1)wysuwane podmenu

var menuOfirmie = document.querySelector(".menu li").firstElementChild;
var dropDownMenu = document.querySelector(".hover");

menuOfirmie.addEventListener("mouseover", function (event) {
    dropDownMenu.style.display= "block";
});

dropDownMenu.addEventListener("mouseout", function () {
    dropDownMenu.style.display="none";

});

// moje obserwacje: interesujące jest to, ze menu znika po zjezdzie z napisu "o Firmie" w dół, ale nie na boki

//2)chowane bloki

var blockMargarita= document.querySelector("#margarita");
var blockClair= document.querySelector("#clair");
console.log("clair");
var whiteBoxClair = document.querySelector("#clair div.opacityWhiteBackground");
var whiteBoxMargarita = document.querySelector("#margarita div.opacityWhiteBackground");

blockClair.addEventListener("mouseover", function () {
    whiteBoxClair.style.display="none";
});

blockClair.addEventListener("mouseout", function () {
    whiteBoxClair.style.display="flex";
});

blockMargarita.addEventListener("mouseover", function () {
    whiteBoxMargarita.style.display="none";
});

blockMargarita.addEventListener("mouseout", function () {
    whiteBoxMargarita.style.display="flex";
});

// 3) slider

var buttonNext=document.getElementById('nextPicture');
console.log(buttonNext);
var buttonPrev=document.getElementById('prevPicture');
console.log(buttonPrev);
var listImg=document.querySelectorAll('.slider li');
console.log(listImg);
var pctrNumber=0;
console.log(pctrNumber);

// dodaję klasę visible
listImg[pctrNumber].classList.add('visible');

buttonPrev.addEventListener("click", function () {
    listImg[pctrNumber].classList.remove('visible');
    pctrNumber--;

    if ( pctrNumber < 0){
        pctrNumber=listImg.length-1;
    }
    listImg[pctrNumber].classList.add('visible');
});

buttonNext.addEventListener("click", function () {
    listImg[pctrNumber].classList.remove('visible');
    pctrNumber++;

    if ( pctrNumber >= listImg.length) {
        pctrNumber=0;
    }
    listImg[pctrNumber].classList.add('visible');

});