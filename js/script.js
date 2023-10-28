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
});
