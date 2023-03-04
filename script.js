const olhos = [...document.getElementsByClassName("olho")];

// let som = new Audio("psicose.mp3");
// som.play();


let posX_mouse = 0;  
let posY_mouse = 0;

window.addEventListener("mousemove", (evento) => {
    posX_mouse = evento.clientX;
    posY_mouse = evento.clientY;
    // console.log(posX_mouse);;// para ver a posição do mouse.

    const rotacao = Math.atan2(posY_mouse,posX_mouse) * 180 / Math.PI

    olhos.forEach((o) => {
       o.style.transform = "rotate("+rotacao+"deg)" 
    });
});



const p1 = document.getElementById("p1").addEventListener("click", () => {
    alert("Porta 1");
    som.pause();
});


const p2 = document.getElementById("p2").addEventListener("click", () => {
    alert("Porta 2");
    som.pause();
});


const p3 = document.getElementById("p3").addEventListener("click", () => {
    alert("Porta 3");
    som.pause();
});



