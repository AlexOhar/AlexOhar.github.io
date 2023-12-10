document.addEventListener('DOMContentLoaded', () => {
    const cardsWrapper = document.querySelector('.portfolio_cards');
    const dataCards = [
        {header: 'Exemple Portfolio', dataLink: "https://alexohar.github.io/portfolio", dataBgImg: "/img/portfolio.jpg", description: `This web-page portfolio was designed to practice for my skills.<br>Used: HTML, SASS, JS, Gulp`},
        {header: 'Run Smart', dataLink: "https://alexohar.github.io/runsmart", dataBgImg: "/img/runsmart.jpg", description: `This lending page was designed to practice using form and mailers.<br>Used: HTML, SASS, JS, php`},
        {header: 'Tetris', dataLink: "https://alexohar.github.io/tetris/", dataBgImg: "/img/tetris2.png", description: `This Tetris game page was developed as a practice for my skills<br>Used: HTML, CSS, JS, Canvas`},
        {header: 'Uber', dataLink: "https://alexohar.github.io/uber/", dataBgImg: "/img/uber.jpg", description: `This lending page was designed to practice using the Bootstrap library.<br>Used: HTML, SASS, JS, Bootstrap`},
        {header: 'Fresh Food', dataLink: "https://alexohar.github.io/food/", dataBgImg: "/img/freshfood.jpg", description: `This lending page was developed during training with <a href="https://campfire-school.com/" target="_blank">Ivan Petrychenko</a>.<br>Used: HTML, SCSS, JS, php, json, Webpack`},
        {header: 'Cotton Bro', dataLink: "https://alexohar.github.io/cotton-bro/", dataBgImg: "/img/cottonbro.jpg", description: `The site was developed based on the design of <a href="https://www.behance.net/20f52a22" target="_blank">Svitlana Ohar</a>.<br>Used: HTML, SASS, JS, Node.js, MongoDB`},
        {header: 'Sky Study', dataLink: "https://alexohar.github.io/skystudy/", dataBgImg: "/img/skystudy.jpg", description: `This English school landing page was developed based on the design of <a href="https://www.behance.net/20f52a22">Svitlana Ohar</a><br>Used: HTML, SASS, JS`},
        {header: 'Marvel', dataLink: "https://alexohar.github.io/marvel", dataBgImg: "/img/marvel.jpg", description: `This web-page portfolio was designed to practice for my skills.<br>Used: React`},
    ];

    dataCards.forEach( card => {
        const newCard = document.createElement('div');
        newCard.classList.add('portfolio_cards_card');
        newCard.setAttribute('data-link', card.dataLink);
        newCard.setAttribute('data-bg-img', card.dataBgImg);
        newCard.innerHTML = `
            <div class="portfolio_cards_card_content card-content mobile_active">
                <h4>${card.header}</h4>
                <p>${card.description}</p>
            </div>
        `;
        cardsWrapper.prepend(newCard);

        const currentCard = document.querySelector('.portfolio_cards_card');
        if (currentCard.getAttribute('data-link')) {
            currentCard.addEventListener('click', () => {
                // window.location.href = `${currentCard.getAttribute('data-link')}`;
                window.open(currentCard.getAttribute('data-link'), '_blank');
            });
        };
        if (currentCard.getAttribute('data-bg-img')) {
            currentCard.style.backgroundImage = `url(${currentCard.getAttribute('data-bg-img')})`;
        };
    });

    

    function addEmptyCards(number) {
        for ( let i = 0; i < number; i++ ) {
            const emptyCard = document.createElement('div');
            emptyCard.classList.add('portfolio_cards_card', 'portfolio_cards_new');
            emptyCard.innerHTML = `
                <div class="portfolio_cards_card_content card-content">
                    <h4>New project</h4>
                    <p>I gonna develope many new projects for improve my skills<br>
                    I gonna use : HTML, CSS, JS or React</p>
                </div>
            `;
            cardsWrapper.appendChild(emptyCard);
        }
    };
    
    addEmptyCards(9);

    const allCards = document.querySelectorAll('.portfolio_cards_card');
    allCards.forEach(card => {
        card.querySelectorAll('a').forEach(linkElement => {
            linkElement.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    })

    const linksBtnOpen = document.querySelector('.portfolio_links_btn'),
            linksMenu = document.querySelector('.portfolio_links'),
            linkLinkedIn = document.querySelector('.portfolio_links_big'),
            linkGitHub = document.querySelector('.portfolio_links_big_middle'),
            linkTelegram = document.querySelector('.portfolio_links_big_middle_small');

    linksBtnOpen.addEventListener('click', () => {
        linksMenu.classList.toggle('portfolio_links_openLinks');
        linksBtnOpen.classList.toggle('hover-effect');
    });
    document.addEventListener('click', (e) => {
        if (!linksMenu.contains(e.target) && !linksBtnOpen.contains(e.target)) {
            linksMenu.classList.toggle('portfolio_links_openLinks');
            linksBtnOpen.classList.toggle('hover-effect');
        }
    });

    linkLinkedIn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('https://www.linkedin.com/in/oleksandr-ohar-70093b229', '_blank');
    });

    linkGitHub.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('https://github.com/AlexOhar', '_blank');
    });

    linkTelegram.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('https://t.me/shin_shila', '_blank');
    });
});

loading.style.display = 'none';

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
