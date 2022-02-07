let navBut = document.querySelector('.menu__icon'),
formBut = document.querySelector('.reservations__main__form_adapt button'),
closeBut = document.querySelector('.close');

if(navBut){
    let nav = document.querySelector('.header__nav');
    let tit = document.querySelector('.header__title');
    navBut.addEventListener("click", function(e) {
        nav.classList.toggle('hide');
        tit.classList.toggle('opas');
        document.body.classList.toggle('article');
    });
}

if(formBut){
    let form = document.querySelector('.reservations__main__form');
    formBut.addEventListener("click", function(e) {
        form.classList.toggle('hide');
        document.body.classList.toggle('article');
    });
}

if(closeBut) {
    let form = document.querySelector('.reservations__main__form');
    closeBut.addEventListener("click", function(e) {
        form.classList.add('hide')
        document.body.classList.remove('article');
    });
}

/*function timemodal(selector, time) {
    setTimeout(function() {
        document.querySelector(selector).classList.remove('hide');
        document.body.classList.toggle('article');
    }, time);
};

timemodal('.reservations__main__form', 60000);*/