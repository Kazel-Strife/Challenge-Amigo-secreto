# README 👾

## Descripción

Este proyecto es una aplicación web sencilla para gestionar una lista de amigos y realizar sorteos aleatorios entre ellos. Los usuarios pueden agregar amigos a una lista, eliminarlos, y realizar un sorteo donde se selecciona un amigo aleatoriamente. Además, incluye una opción para reiniciar la lista de amigos y los resultados del sorteo.

## Funcionalidades

1. **Agregar Amigos**: Los usuarios pueden ingresar el nombre de un amigo en un campo de texto, y este se agrega a la lista de amigos si no está vacío.
2. **Eliminar Amigos**: Cada amigo en la lista tiene un botón para eliminarlo, eliminando el nombre del array de amigos y actualizando la lista en la interfaz.
3. **Sorteo Aleatorio**: Los usuarios pueden hacer un sorteo para seleccionar aleatoriamente a uno de los amigos en la lista. Se debe ingresar al menos dos amigos para poder realizar el sorteo.
4. **Reiniciar**: La aplicación tiene una opción para reiniciar la lista de amigos y limpiar cualquier resultado del sorteo.

## Requisitos

Para utilizar esta aplicación, solo es necesario un navegador web moderno que soporte JavaScript.

## Estructura del Código

El código está compuesto por las siguientes funciones principales:

- **`agregarAmigo()`**: Añade un amigo a la lista y actualiza la interfaz. Si el nombre está vacío, muestra una alerta.
- **`actualizarLista()`**: Actualiza la lista de amigos en la interfaz, mostrando cada amigo con un botón para eliminarlo.
- **`eliminarAmigo(indice)`**: Elimina un amigo de la lista utilizando su índice y actualiza la interfaz.
- **`sortearAmigo()`**: Realiza un sorteo aleatorio entre los amigos y muestra el nombre del amigo sorteado. Si hay menos de dos amigos, muestra una alerta.
- **`reiniciarAplicacion()`**: Reinicia la lista de amigos y elimina cualquier resultado de un sorteo anterior.

## Uso

1. Clona o descarga este proyecto.
2. Abre el archivo `index.html` en tu navegador.
3. Agrega nombres de amigos usando el campo de texto y haz clic en el botón para agregarlos.
4. Para eliminar un amigo, haz clic en el botón "X" junto a su nombre.
5. Para realizar un sorteo, haz clic en el botón "Sortear".
6. Si deseas reiniciar la lista y los resultados, haz clic en el botón "Reiniciar".

## Código HTML y CSS

Este proyecto está diseñado para funcionar con un archivo HTML que debe incluir:
- Un campo de entrada de texto con el id `amigo`.
- Un área de lista con el id `listaAmigos` para mostrar los amigos.
- Un área con el id `resultado` para mostrar el resultado del sorteo.
- Un botón con el id `reinicio` para reiniciar la aplicación.

El CSS asociado al proyecto debe proporcionar estilo para los botones, la lista y otros elementos para una experiencia de usuario agradable.
