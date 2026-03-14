/*CAROUSEL*/

const carousel = document.querySelector(".slider");
const indicator = document.getElementById("indicator");
const card = document.querySelectorAll(".card");


card.forEach((_, index) => {
    const btn = document.createElement('button');
    if (index === 0) btn.classList.add('active');

    btn.setAttribute("aria-label", `slide ${index + 1}`);

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

const pop = document.querySelector('.pop');

function openMenu() {
    pop.classList.remove('pop');
}

function closeModal() {
    pop.classList.add('pop');
}