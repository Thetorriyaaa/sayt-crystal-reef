const posters = document.querySelectorAll('.poster');
const modal = document.querySelector('.poster-modal');
const modalImg = document.querySelector('.poster-modal-img');

posters.forEach((poster) => {
    poster.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = poster.src;
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
});
const weeklyNames = document.querySelectorAll('.weekly-name');

weeklyNames.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});