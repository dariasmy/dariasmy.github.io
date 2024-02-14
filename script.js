function yesPage() {
    window.location.href = "yes.html";
}

function noPage() {
    window.location.href = "no.html";
}

function backPage() {
    window.location.href = "index.html";
}

function moveButton() {
    let x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    let y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}
