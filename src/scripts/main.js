document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const position = window.scrollY;

        if(position < heroHeight){
            hideHeader();
        } else{
            displayHeader();
        }
    })

    //attraction tabs
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const tabTarget = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveBtn();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //FAQ accordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', openCloseAnswer)
    }
})

function hideHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function displayHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function openCloseAnswer(elemento){
    const active = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(active)

}

function removeActiveBtn(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i <tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}