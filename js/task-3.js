const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function writingText(event) {
    const tremmChek = event.target.value.trim();
    if (tremmChek === "") {
        output.textContent = "Anonymous"
    }
    else {
        output.textContent = tremmChek;
    }
}

textInput.addEventListener("input", writingText);