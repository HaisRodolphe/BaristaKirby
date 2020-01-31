function init() {
    let canvas = getCanvas();
    let context = getContext();

// on détermine les dimensions du canvas
canvas.width = 640;
canvas.height = 480;
// configuration KIRBY
// sauvegarder le contexte =t1
context.save();

// crée un nouveau path
context.beginPath();

// on restaure le dernier contexte sauvegardé avec save();
context.restore();

// Fin configuration KIRBY
/*
 * Retourne une référence à l'objet canvas crée à l'aide de la balise
 * placée dans le code html
 */
function getContext() {
    return getCanvas().getContext("2d")
}
/*
 * Retourne une référence à l'objet canvas crée à l'aide de la balise
 * placée dans le code html
 */
function getCanvas() {
    return document.querySelector("canvas");
}
/*
 * Quand toutes les données sont chargées (DOM, images, sons etc...)
 * On démarre l'application par la fonction init
 */
window.addEventListener("load", init);
}