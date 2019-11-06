function replaceWidth() {
    document.getElementById("width-div").textContent = `Width: ${window.innerWidth}`;
}

function replaceHeight() {
    document.getElementById("height-div").textContent = `Height: ${window.innerHeight}`;
}

function resizeBoth() {
    replaceWidth();
    replaceHeight();
}