let navBut = document.querySelector('.menu__icon');

if(navBut){
    let nav = document.querySelector('.header__nav')
    let tit = document.querySelector('.header__title')
    navBut.addEventListener("click", function(e) {
        nav.classList.toggle('hide')
        tit.classList.toggle('opas')
        document.body.classList.toggle('article');
    });

}