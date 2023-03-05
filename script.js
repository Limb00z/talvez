const olhos = [...document.getElementsByClassName("olho")];

var som = new Audio("psicose.mp3");
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
});
     
  let principal = document.getElementById("principal");
  principal.innerHTML = "";
  principal.innerHTML = '<image src="https://i.giphy.com/media/H6W9H29kVsUI2hJE90/giphy.webp" width="100%" height="100%" style="position:absolute" frameBorder="0" allowFullScreen></image>';


  
  
    // som.pause();
});


const p2 = document.getElementById("p2").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      'and other HTML tags',
    showCloseButton: true
  });

  setTimeout(() => {
    window.location.href = "https://limb00z.github.io/Potifolio_novo/"
  }, 5000);

    // som.pause();
});


const p3 = document.getElementById("p3").addEventListener("click", () => {
    alert("p3");
    // som.pause();
});



