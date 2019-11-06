function printSubmission() {
    let obj = {
        "name" : document.getElementById("name-input").value,
        "email" : document.getElementById("email-input").value,
        "message" : document.getElementById("longform-input").value
    };
    console.log(`name: ${obj["name"]}\nemail: ${obj["email"]}\nmessage: ${obj["message"]}`);
}

function resetButton() {
    ["name-input", "email-input", "longform-input"].map(id => document.getElementById(id))
                                                   .forEach(elem => elem.value = "");
}