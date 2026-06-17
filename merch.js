const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
    const addBtn = card.querySelector('.add-btn');
    const minusBtn = card.querySelector('.minus-btn');
    const countBadge = card.querySelector('.count-badge');

    let count = 0;

    addBtn.addEventListener('click', () => {
        count++;

        countBadge.textContent = count;
        countBadge.classList.add('active');
        minusBtn.classList.add('active');
    });

    minusBtn.addEventListener('click', () => {
        if (count > 0) {
            count--;
        }

        countBadge.textContent = count;

        if (count === 0) {
            countBadge.classList.remove('active');
            minusBtn.classList.remove('active');
        }
    });
});