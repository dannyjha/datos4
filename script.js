const nombre=prompt("Ingresa tu nombre");
const apellido=prompt("Ingresa tu apellido");
const edad=prompt("Ingresa tu edad");
const lugarNacimiento=prompt("Ingresa tu lugar de nacimiento");
const fecha=prompt("Ingresa tu fecha de nacimiento");
const comidaFavorita=prompt("Ingresa tu comida favorita");
const carrera=prompt("Ingresa tu carrera");
const diaFavorito=prompt("Ingresa tu dia favorito");

const lista=document.createElement("ul")
const agregarDato=(etiqueta, valor)=>{
    const elementoLista=document.createElement("Li")
    elementoLista.innerHTML=`<strong>${etiqueta}:</strong> ${valor}`;
    lista.appendChild(elementoLista);
};
agregarDato("Nombre",`${nombre} ${apellido}`);
agregarDato("Edad", edad);
agregarDato("Lugar De Nacimiento", lugarNacimiento);
agregarDato("Fecha de nacimiento", fecha);
agregarDato("Comida Favorita", comidaFavorita);
agregarDato("Carrera", carrera);
agregarDato("Dia Favorito", diaFavorito);
const resultadoDiv=document.createElement("div");
resultadoDiv.appendChild(lista);
document.body.appendChild(resultadoDiv);