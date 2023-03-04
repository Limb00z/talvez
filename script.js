const olhos = [...document.getElementsByClassName("olho")];

let som = new Audio("psicose.mp3");
som.play();


window.addEventListener("mousemove", (evento) => {
    let posX_mouse = evento.clientX;
    let posY_mouse = evento.clientY;
    // console.log(posX_mouse);;// para ver a posição do mouse.

    const rotacao = Math.atan2(posY_mouse,posX_mouse) * 180 / Math.PI

    olhos.forEach((o) => {
       o.style.transform = "rotate("+rotacao+"deg)" 
    });
});



const p1 = document.getElementById("p1").addEventListener("click", () => {
    Swal.fire({
        title: 'Você caiu num bug x.x',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/#frameworks-integrationsimages/trees.png)',
        backdrop: `
          url("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODYzYmQ0ZWNhYTAxMGNlYjg2NGQzMGJkMWY3YjI5ODZmYjAwZDg0MCZjdD1n/3o6wrdG8vt4X86Pauc/giphy.gif")    
        `
      })
    som.pause();
});


const p2 = document.getElementById("p2").addEventListener("click", () => {
    Swal.fire({
        icon: 'info',
        title: 'Apresentação pessoal',
        text: 'Você será direcionado para minha página pessoal, basta clicar no link abaixo',
        footer: '<a href="https://limb00z.github.io/Potifolio_novo/" target="_blank">Pórtifólio</a>'
      })
    som.pause();
});


const p3 = document.getElementById("p3").addEventListener("click", () => {
    alert("p3");
    som.pause();
});



