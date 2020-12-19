const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const areatext = document.querySelectorAll('#formulario textarea');

const expresiones = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	// password: /^.{4,12}$/, // 4 a 12 digitos.
	texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	// telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
    correo: false,
    asunto:false,
	mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.texto, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "asunto":
			validarCampo(expresiones.texto, e.target, 'asunto');
        break;
        case "mensaje":
            validarCampo(expresiones.texto, e.target, 'mensaje')
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

areatext.forEach((textarea) =>{
	textarea.addEventListener('keyup', validarFormulario);
	textarea.addEventListener('blur', validarFormulario);
	}
);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	
	if(campos.nombre && campos.correo && campos.asunto && campos.mensaje ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

function placeOrder(form){
    form.submit();
}

























// //funcion 
// function validarFormulario(){


// //declaracin de variables
// var nombre=$('#nombre').val(),
// var correo=$('#correo').val(),
// var asunto=$('#asunto').val(),
// var mensaje=$('#mensaje').val();

// //validar el campo nombre
// if(nombre=="" ||  nombre==null){

//     return false;
//     }

// }



