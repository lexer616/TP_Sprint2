const pagos = [];
const usuarios = [];
const listado = document.getElementById('list-group');
const cuadroResultado = document.getElementById('total');
const usuario = document.getElementById("nombre");
const pago = document.getElementById('pago');

function repartir() {
    agregarGastosAListas();
    ultimoAPantalla();
    mostrarPagoIndividualEnHTML();
}

function agregarGastosAListas() {
    usuarios.push(usuario.value);
    pagos.push(pago.value);
}

function ultimoAPantalla() {
    const li = document.createElement('li');
    const text = document.createTextNode('${usuario.value}: Pagó$${pago.value}');
    li.classList.add("list-group-item");

    li.appendChild(text);
    listado.appendChild(li);
}

function sumarValores() {
    let suma = 0;
    for (let pago of pagos) {
        suma += parseInt(pagos);
    }
    return suma;
}

function mostrarPagoIndividualEnHTML() {
    const total = sumarValores(pagos);
    const aporteIndividual = total / usuarios.length;
    cuadroResultado.innerText = 'Total: ${total} A cada uno le toca aportar: ${aporteIndividual.toFixed(2)}';
}