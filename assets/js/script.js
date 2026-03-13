/*CAROUSEL*/

const carousel = document.querySelector(".slider");
const indicator = document.getElementById("indicator");
const card = document.querySelectorAll(".card");


card.forEach((_, index) => {
    const btn = document.createElement('button');

    if (index === 0) btn.classList.add('active');

    btn.addEventListener('click', () => {

        carousel.scrollTo({
            left: index * card[0].offsetWidth,
            behavior: "smooth"
        });
        setActiveIndicator(index);

        currentIndex = index;
    });
    indicator.appendChild(btn);

});

function setActiveIndicator(index) {
    indicator.querySelectorAll('button').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

carousel.addEventListener("scroll", () => {
    const cardWidth = card[0].offsetWidth;
    const index = Math.round(carousel.scrollLeft / cardWidth);

    setActiveIndicator(index);
});

let currentIndex = 0;

setInterval(() => {

    currentIndex++;

    if (currentIndex >= card.length) {
        currentIndex = 0;
    }

    carousel.scrollTo({
        left: currentIndex * card[0].offsetWidth,
        behavior: "smooth"
    });

    setActiveIndicator(currentIndex);

}, 6000);


/*MODAL*/

const menu = document.getElementById('menu');
const pop = document.querySelector('.pop');
const cls = document.getElementById('cls-btn')

menu.addEventListener('click', () => {
    pop.classList.remove('pop');
});

cls.addEventListener('click', () => {
    pop.classList.add('pop');
});