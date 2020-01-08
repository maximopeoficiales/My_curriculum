
        window.sr = ScrollReveal();

        sr.reveal('.navbar', {
            duration: 1000, /* duracion */
            origin: 'bottom' /* de donde vendra */
        });

        sr.reveal('.hero', {
            duration: 1000,
            origin: 'top',
            distance: '300px' /* distancia desde arriba en este caso */
        });

        sr.reveal('.contenido_competencia', {
            duration: 1000,
            origin: 'right',
            distance: '300px'
        });

        sr.reveal('.educacion', {
            duration: 1000,
            origin: 'bottom'
        });

        sr.reveal('.proyectos div', {
            duration: 1000,
            origin: 'left',
            distance: '300px',
            viewFactor: 0.2 /* factor de vision */
        });

        sr.reveal('.interes', {
            duration: 1000,
            origin: 'top',
            distance: '300px',
            viewFactor: 0.2 /* factor de vision */
        });