const btnDepartamentos = document.getElementById('btn-departamentos'),
	btnServicios = document.getElementById('btn-servicios'),
	btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	gridservicios = document.getElementById('grid-servicios'),
	grid = document.getElementById('grid'),
	contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	contenedorSubcategoriasServicios = document.querySelector('#grid-servicios .contenedor-subcategorias'),
	close = document.getElementById('close-on-click'),
	esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
	if (!esDispositivoMovil()) {
		grid.classList.add('activo');
	}
});

btnServicios.addEventListener('mouseover',() =>{
	if (!esDispositivoMovil()) {
		gridservicios.classList.add('activo');
	}
});


grid.addEventListener('mouseleave', () => {
	if (!esDispositivoMovil()) {
		grid.classList.remove('activo');
	}
});

gridservicios.addEventListener('mouseleave',() =>{
	if (!esDispositivoMovil()) {
		gridservicios.classList.remove('activo');
	}
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if (!esDispositivoMovil()) {
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if (categoria.dataset.categoria == e.target.dataset.categoria) {
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if (contenedorEnlacesNav.classList.contains('activo')) {
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton de todos los departamentos (Para version movil).
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

// Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

btnServicios.addEventListener('click', (e) =>{
	e.preventDefault();
	gridservicios.classList.add('activo');
});

document.querySelector('#grid-servicios .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	gridservicios.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if (esDispositivoMovil()) {
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if (categoria.dataset.categoria == e.target.dataset.categoria) {
					categoria.classList.add('activo');
				}
			});
		}
	});
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if (esDispositivoMovil()) {
			contenedorSubcategoriasServicios.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if (categoria.dataset.categoria == e.target.dataset.categoria) {
					categoria.classList.add('activo');
				}
			});
		}
	});
});

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

document.querySelectorAll('#grid-servicios .contenedor-subcategorias .btn-regresar').forEach((boton) =>{
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubcategoriasServicios.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});

close.addEventListener('click',(e) => {
	error = e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	setTimeout(() =>location.href  = '../web/galeria.html',1000);
	
});

/*menu */
let bodyTag = document.querySelector('body');
let myNav = document.querySelector('nav');

let scrolled = () => {
	let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
	return Math.floor(dec * 100);
}

addEventListener('scroll', () => {
	myNav.style.setProperty('background', scrolled() > 5 ? "rgba(220,118,51,0.5)" : "rgba(35,84,150,0.9)");
})

/*preolader site*/
window.addEventListener("load", function () {
	document.getElementById("loader").classList.toggle("loader2");
});

/* partivcules*/
window.onload = function () {
	Particles.init({
		selector: '.background',
		connectParticles: true,
		color: '#eaeaea',
		responsive: [{
			breakpoint: 768,
			options: {
				maxParticles: 75,
				color: '#eaeaea',
				connectParticles: true,
			}
		}]
	});
};