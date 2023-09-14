const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    // Agregamos los listener de los enlaces para filtrar por categoria
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    // Agregamos los listener de los enlaces para filtrar por categoria
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });

    // Agregamos listener para las imagenes
    const popup = document.getElementById('popup');

    document.querySelectorAll('.grid .item img').forEach((elemento) => {
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
            popup.classList.add('activo');
            document.querySelector('#popup img').src = ruta;
            document.querySelector('#popup .descripcion').innerHTML = descripcion;
        });
    });

    // Listener del boton cerrar-popup
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        popup.classList.remove('activo');
    });

    // Listener para cerrar popup
    popup.addEventListener('click', (evt) => {
        console.log(evt.target.id)
        evt.target.id === 'popup' ? popup.classList.remove('activo') : '';
    })
});