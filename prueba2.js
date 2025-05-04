function checkAnswer() {
    let answer = document.getElementById("answer").value.toLowerCase();

    if (answer === "sí") {
        document.getElementById("successPopup").style.display = "flex";
    } else {
        document.getElementById("errorPopup").style.display = "flex";
    }
}

function closeErrorPopup() {
    document.getElementById("errorPopup").style.display = "none";
}
