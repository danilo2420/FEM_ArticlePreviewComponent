
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');

const bottomSection = document.getElementById('bottomSection');
const socialMediaSection = document.getElementById('socialMediaSection');
const popUp = document.getElementById('popUp');

const iconImage = document.getElementById('iconImage');

function main() {
    setEventListeners();
}

function setEventListeners() {
    // This icon is used to turn on the pop up when screen is small
    // and to turn it on and off when the screen is medium or large
    lightIcon.addEventListener('click', (event) => {
        togglePopUp();
    });

    // This icon only appears when the screen is small
    darkIcon.addEventListener('click', (event) => {
        togglePopUp();
    })
}

// This just toggles the style of the light icon when used for turning both on and off
// let iconIsLight = true; // Initialized as light
function toggleLightIcon() {
    lightIcon.classList.toggle('darkIconContainer');

    if (isPopUpOn) {
        iconImage.src = 'images/icon-share-white.svg';
        popUp.style.display = 'flex';
    } else {
        iconImage.src = 'images/icon-share.svg';
        popUp.style.display = 'none';
    }

    //iconIsLight = !iconIsLight;
}

function resize() {
    // I'll have to do stuff here so that things don't get messed up
}

function togglePopUp() {
    isPopUpOn = !isPopUpOn;
    makePopupAppear(isPopUpOn);
}

var isPopUpOn = false;
function makePopupAppear(b) {
    if (b) { // Show pop up
        if (screen.width < 650) { // Small screens
            bottomSection.style.display = 'none';
            socialMediaSection.style.display = 'flex';
        } else { // Medium and large screens
            toggleLightIcon(true);
        }
    } else { // Hide pop up
        if (screen.width < 650) { // Small screens
            bottomSection.style.display = 'flex';
            socialMediaSection.style.display = 'none';
        } else { // Medium and large screens
            toggleLightIcon(false);
        }
    }
    isPopUpOn = b;
}

main();