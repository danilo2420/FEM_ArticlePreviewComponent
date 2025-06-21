
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');

const bottomSection = document.getElementById('bottomSection');
const socialMediaSection = document.getElementById('socialMediaSection');

function main() {
    console.log("Main is playing");
    console.log(lightIcon);
    console.log(darkIcon);

    setEventListeners();
}

function setEventListeners() {
    lightIcon.addEventListener('click', (event) => {
        bottomSection.style.display = 'none';
        socialMediaSection.style.display = 'flex';
    });
    
    darkIcon.addEventListener('click', (event) => {
        bottomSection.style.display = 'flex';
        socialMediaSection.style.display = 'none';
    })
}

main();