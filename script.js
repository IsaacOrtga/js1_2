

// Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
// Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
// Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
// Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:propiedad innerHTML)

window.onload = function () {
    document.getElementById("enlace_1").onclick = delete1;
    document.getElementById("enlace_1").onmousedown = show1;

    document.getElementById("enlace_2").onclick = delete2;
    document.getElementById("enlace_2").onmousedown = show2;

    document.getElementById("enlace_3").onclick = delete3;
    document.getElementById("enlace_3").onmousedown = show3;
}
function delete1() {
    document.getElementById("contenidos_1").style.display = "none";
    document.getElementById("enlace_1").innerHTML = "Mostrar texto"
}

function show1() {
    document.getElementById("contenidos_1").style.display = "block";
    document.getElementById("enlace_1").innerHTML = "Ocultar contenidos";
}


function delete2(){
    document.getElementById("contenidos_2").style.display = "none";
    document.getElementById("enlace_2").innerHTML = "Mostrar contenidos";
}

function show2(){
    document.getElementById("contenidos_2").style.display = "block";
    document.getElementById("enlace_2").innerHTML = "Ocultar contenidos";
}

function delete3() {
    document.getElementById("contenidos_3").style.display = "none";
    document.getElementById("enlace_3").innerHTML = "Mostrar contenidos"
}

function show3() {
    document.getElementById("contenidos_3").style.display = "block";
    document.getElementById("enlace_3").innerHTML = "Ocultar contenidos"
}