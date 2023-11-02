document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.portfolio_cards_card');
    projectCards.forEach(card => {
        if (card.getAttribute('data-link')) {
            card.addEventListener('click', () => {
                window.location.href = `${card.getAttribute('data-link')}`;
            });
        };
        if (card.getAttribute('data-bg-img')) {
            card.style.backgroundImage = `url(${card.getAttribute('data-bg-img')})`;
        };
    });

    const linksBtnOpen = document.querySelector('.portfolio_links_btn'),
            linksMenu = document.querySelector('.portfolio_links'),
            linkLinkedIn = document.querySelector('.portfolio_links_big'),
            linkGitHub = document.querySelector('.portfolio_links_big_middle'),
            linkTelegram = document.querySelector('.portfolio_links_big_middle_small');

    linksBtnOpen.addEventListener('click', () => {
        linksMenu.classList.toggle('portfolio_links_openLinks');
        linksBtnOpen.classList.toggle('hover-effect');
    });

    linkLinkedIn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = 'https://www.linkedin.com/in/oleksandr-ohar-70093b229';
    });

    linkGitHub.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = 'https://github.com/AlexOhar';
    });

    linkTelegram.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = 'https://t.me/shin_shila';
    });
});

//loading.style.display = 'none';

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.display = 'none';
    }, 10000);
    
    const titleOne = document.querySelector('.title');
    const titleTwo = document.querySelector('.titleTwo');
    setTimeout(function() {
        titleOne.style.display = 'none';
    }, 7000);
    setTimeout(function() {
        titleOne.style.display = 'none';
        titleTwo.style.display = 'block';
        titleTwo.style.animation = "printed-text 4s steps(25), flashin-border .75s step-start infinite";
    }, 4000);

    
});

// вариант слипкими карточками 
// window.addEventListener('scroll', updateCardPositions);

// function updateCardPositions() {
//     if (window.innerWidth >= 575) return;
//     const cards = document.querySelectorAll('.portfolio_cards_card');
//     cards.forEach((card, i) => {
//         card.style.top = `${30 + 30 * i}px`;
//         // if ( i != 0) {
//         //     card.style.top = `${88 + 40 * i}px`;
//         // }
//     })
// };

