
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');

const bottomSection = document.getElementById('bottomSection');
const socialMediaSection = document.getElementById('socialMediaSection');
const popUp = document.getElementById('popUp');

const iconImage = document.getElementById('iconImage');

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
            toggleLightIcon();
        }
    });
    
    darkIcon.addEventListener('click', (event) => {
        if (screen.width < 650) {
            bottomSection.style.display = 'flex';
            socialMediaSection.style.display = 'none';
        }
    })
}

let b = true;
function toggleLightIcon() {
    lightIcon.classList.toggle('darkIconContainer');

    if (b) {
        iconImage.src = 'images/icon-share-white.svg';
        popUp.style.display = 'flex';
    } else {
        iconImage.src = 'images/icon-share.svg';
        popUp.style.display = 'none';
    }

    b = !b;
}

function resize() {
    // I'll have to do stuff here so that things don't get messed up
}

main();