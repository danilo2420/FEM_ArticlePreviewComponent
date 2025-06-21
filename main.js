
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
        if (screen.width < 650) {
            bottomSection.style.display = 'none';
            socialMediaSection.style.display = 'flex';
        } else {

        }

        
    });
    
    darkIcon.addEventListener('click', (event) => {
        if (screen.width < 650) {
            bottomSection.style.display = 'flex';
            socialMediaSection.style.display = 'none';
        }
    })
}

function resize() {
    // I'll have to do stuff here so that things don't get messed up
}

main();