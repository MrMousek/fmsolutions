document.addEventListener("DOMContentLoaded", function () {
    const enano = document.createElement("div");
    enano.classList.add("cabeza-flotante");
    enano.innerHTML = `
    <a href="http://wa.me/+5493512330025" target="_blank">
    <div class="globo-texto">¡Escribeme!</div>
        <img src="./img/whatsapp.png" alt="Whatsapp icono pxl">
        <a/>
    `;
    document.body.appendChild(enano);
});

// Estilos CSS
const estilos = document.createElement("style");
estilos.innerHTML = `
    .cabeza-flotante {
        position: fixed;
        bottom: 50px;
        right: 50px;
        width: 120px;
        text-align: center;
        z-index: 9999;
        animation: flotar 3s infinite ease-in-out alternate;
    }
    @keyframes flotar {
        0% { transform: translateY(0px); }
        100% { transform: translateY(-10px); }
    }
    .cabeza-flotante img {
        width: 50%;
        border-radius: 50%;
    }
    .globo-texto {
        position: absolute;
        bottom: 110%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px;
        border-radius: 10px;
        font-size: 14px;
        white-space: nowrap;
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
        animation: parpadeo 1.5s infinite alternate;
    }
    @keyframes parpadeo {
        0% { opacity: 1; }
        100% { opacity: 0.5; }
    }
`;
document.head.appendChild(estilos);
