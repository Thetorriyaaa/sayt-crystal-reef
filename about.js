const creatureCards = document.querySelectorAll('.creature-card');

creatureCards.forEach((card) => {
    const button = card.querySelector('.flip-btn');

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        card.classList.add('is-flipped');
    });

    card.addEventListener('click', () => {
        if (card.classList.contains('is-flipped')) {
            card.classList.remove('is-flipped');
        }
    });
});
const navCards = document.querySelectorAll('.nav-info');

navCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});