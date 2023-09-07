// PANTALLA CARGA

function preload() {
    const carga = document.getElementById('carga');
    const contenidoPrincipal = document.querySelector('body');
    carga.style.display = 'none';
    contenidoPrincipal.classList.remove('hidden');
}

setTimeout(preload, 2000);

