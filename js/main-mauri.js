const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
// const nombre = document.querySelector('[name=nombre]').value 
// const nombre = $form['nombre'].value
//se puede escribir de cualquier manera como se ve arriba, son equivalentes

const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value; //se debe escribir asi ya que el name tiene un -


console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    return '';
}
