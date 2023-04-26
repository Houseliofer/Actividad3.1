function ocultarParrafo(event) {
    var parrafo = event.target;
    var bloqueParrafo = parrafo.parentNode;
    if (bloqueParrafo.style.display === "none") {
        bloqueParrafo.style.display = "block";
    } else {
        bloqueParrafo.style.display = "none";
    }
}
window.addEventListener("load", function() {
    var parrafos = document.getElementsByTagName("p");
    for (var i = 0; i < parrafos.length; i++) {
        parrafos[i].addEventListener("click", ocultarParrafo);
    }
});
