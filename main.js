
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');

function main() {
    console.log("Main is playing");
    console.log(lightIcon);
    console.log(darkIcon);

    setEventListeners();
}

function setEventListeners() {
    lightIcon.addEventListener('click', (event) => {
        console.log("light icon was clicked");
    });
    
    darkIcon.addEventListener('click', (event) => {
        console.log("dark icon was clicked");
    })
}

main();