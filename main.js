
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

    // This turns off the pop up to avoid problems when resizing
    window.onresize = () => {
        turnPopupOff();
    }
}

var isPopUpOn = false; // Tracks the state of the popup - initializes as false
function togglePopUp() {
    isPopUpOn = !isPopUpOn;
    if (screen.width < 650) { // Small screens
        togglePopUpForSmallScreens(true);
    } else { // Medium and large screens
        togglePopUpForBigScreens(true);
    }
}

function togglePopUpForSmallScreens() {
    if (isPopUpOn) {
        bottomSection.style.display = 'none';
        socialMediaSection.style.display = 'flex';
    } else {
        bottomSection.style.display = 'flex';
        socialMediaSection.style.display = 'none';
    }
}

function togglePopUpForBigScreens() {
    lightIcon.classList.toggle('darkIconContainer');

    if (isPopUpOn) {
        iconImage.src = 'images/icon-share-white.svg';
        popUp.style.display = 'flex';
    } else {
        iconImage.src = 'images/icon-share.svg';
        popUp.style.display = 'none';
    }
}

function turnPopupOff() {
    if (screen.width < 600) {
        bottomSection.style.display = 'flex';
        socialMediaSection.style.display = 'none';
    } else {
        lightIcon.classList.remove('darkIconContainer');

        iconImage.src = 'images/icon-share.svg';
        popUp.style.display = 'none';
    }
    isPopUpOn = false;
}

main();