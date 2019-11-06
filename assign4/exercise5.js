function randomHex() {
    return (Math.floor(Math.random() * 256)).toString(16).padStart(2, '0');
}

function randomizeBackground() {
    let [r, g, b] = [randomHex(), randomHex(), randomHex()];
    document.body.style.backgroundColor = `#${r}${g}${b}`;
}