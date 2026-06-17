document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".button");

    button.addEventListener("click", function () {

        const name = document.querySelector(".name").value;
        const phone = document.querySelector(".phone").value;

        if (!name || !phone) {
            alert("заполни все поля");
            return;
        }

        alert("спасибо за подписку, " + name);

    });

});