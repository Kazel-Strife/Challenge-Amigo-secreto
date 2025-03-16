let amigos = [];
 
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }

     if (nombre === '') {
        alert('Debes ingresar el nombre de un amigo');
        return;
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');

        li.textContent = `${index + 1}. ${amigo}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.classList.add('btn-eliminar'); 
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);

        lista.appendChild(li);

        
    });
}

function eliminarAmigo(indice) {
    amigos.splice(indice, 1); 
    actualizarLista(); 
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Ingresar al menos a 2 amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    
    actualizarLista();
}

function reiniciarAplicacion(){
    amigos = [];
    actualizarLista();
    
    const resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = '';
    }
}

document.getElementById('reinicio').onclick = reiniciarAplicacion;