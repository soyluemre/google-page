const button = document.getElementById('leftButton');

const buttonText = [
    "Glücklich!",
    "¡Afortunado!",
    "Chanceux!",
    "Fortunato!"
];

button.onmouseover = () => {
    const val = Math.floor (Math.random() * buttonText.length);

    button.innerText = buttonText[val];
};

button.onmouseout = () => {
    button.innerText = "I'm Feelling Lucky!";
};