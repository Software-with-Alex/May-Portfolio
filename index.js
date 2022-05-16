const dropdownMenue = document.querySelector('.nav-links');
const hamBtn = document.querySelector('.ham-btn');

hamBtn.addEventListener('click', () => {
    dropdownMenue.classList.toggle('active')
})

