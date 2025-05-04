function checkAnswers() {
    let blank1 = document.getElementById("blank1").value.toLowerCase();
    let blank2 = document.getElementById("blank2").value.toLowerCase();
    let blank3 = document.getElementById("blank3").value.toLowerCase();

    let correct1 = blank1 === "problemas";
    let correct2 = blank2 === "escapar";
    let correct3 = blank3 === "tiempo";

    if (correct1 && correct2 && correct3) {
        document.getElementById("blank1").disabled = true;
        document.getElementById("blank2").disabled = true;
        document.getElementById("blank3").disabled = true;

        document.getElementById("successPopup").style.display = "flex";
    } else {
        if (!correct1) document.getElementById("blank1").value = "";
        if (!correct2) document.getElementById("blank2").value = "";
        if (!correct3) document.getElementById("blank3").value = "";

        document.getElementById("errorPopup").style.display = "flex";
    }
}

function closeErrorPopup() {
    document.getElementById("errorPopup").style.display = "none";
}
