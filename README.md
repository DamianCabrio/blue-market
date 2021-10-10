# Blue Market

Proyecto creado para el curso de React en Coder House por Damián Andrés Cabrio.

### [Link al sitio](https://blue-market.netlify.app/)

## Como correr el proyecto

Para empezar correr el proyecto localmente primero bajar las dependencias con el comando `npm install`, luego correr el comando `npm start`.
Para generar un build para producción correr el comando `npm run build`.

Para conectar el proyecto con una base de datos de Firestore hace falta crear un archivo .env.local con las credenciales de Firestore (se puede seguir el ejemplo del archivo .env.example, también en la ruta del proyecto).

## Vistas

### Cart

La vista Cart muestra los ítems que el usuario agrega al carrito. Muestra el precio y la cantidad total de los productos, y tiene un control individual por cada producto para agregar, restar o quitarlos. También permite limpiar el carrito o terminar una compra ingresando los datos del comprador.

### ItemDetailContainer

Muestra una vista detallada de un producto, con una imagen, su título, descripción, precio, categoría y stock. También muestra un input que te permite seleccionar una cantidad del producto para agregarlo al carrito (Si no hay stock no aparece este componente).

### ItemListContainer

Muestra una vista en lista de todos los productos disponibles en el sitio, con una imagen, título, precio y categoría, con formato de Card. Si no hay stock de uno de los productos aparecerá un cartel avisando de esto.

NOTA: Las todas las vistas y componentes son responsivas, y se pueden ver desde cualquier computadora o celular

## Componentes

### AlertCart

Cartel de alerta que se puede visualizar luego de realizar una compra. Tiene dos variantes, alerta de éxito y falla dependiendo del resultado de la operación de guardar la orden del usuario.

### CartItem

Desglose de un ítem en el carrito, con control para agregar, quitar o eliminar un ítem en particular, además de la cantidad y precio de este.

### CartModal

Modal con formulario para guardar datos del comprador en una orden, se puede ver en la vista de Cart.

### CartProducts

Itera por todos los ítems que se encuentran el carrito actualmente, y crea un componente CartItem para cada uno de ellos.

## CartSidebar

Muestra el precio y cantidad total de los artículos en el carrito, y tiene 2 botones, uno para terminar la compra y otro para limpiar el carrito.

### CartWidget

Icono de carrito que se muestra en el NavBar. Solo es visible cuando hay algún ítem en él, y tiene un contador con la cantidad de ítem que tiene adentro, que se actualiza en tiempo real.

### Item

Card del producto para la vista del catálogo. Muestra imagen, título, descripción, precio y categoría en un formato compacto. Además tiene un botón para ir a la vista detallada del producto.

### ItemCount

Grupo de inputs que permiten seleccionar una cantidad de productos que el usuario quiera agregar al carrito, y te la permite agregar con un botón, si la cantidad de stock agregada esta disponible. Se muestra en el componente Item Detail.

### ItemDetail

Vista detallada del ítem. Tiene la misma información que el componente Item, pero con una organización horizontal, con la imagen a la izquierda y la información a la derecha. Además tiene un botón para volver al catálogo, y el componente ItemCount para agregar una cierta cantidad de este ítem al carrito

### ItemList

Itera por todos los productos que le envíen por props, y crea un componente Ítem para cada uno de ellos.

### NavBar

El NavBar tiene los siguientes elementos actualmente:

1. Brand link: Link con el nombre del sitio, que te lleva al index si se le hace clic.
2. Catálogo: Igual al brand link.
3. Dropdown con categorías: Muestra las categorías disponibles en el sitio (traídas de la base de datos), y permite filtrar los ítems por ellas.
4. Buscador: Permitir filtrar productos por nombre.
5. Carrito: Permitir ver los productos que agregaste en el para comprar.

## Rutas disponibles:

1. `/`: Indice del sitio, muestra el catálogo de todos los productos, con la vista ItemListContainer.
2. `/category/:idCategory`: Filtro del catálogo por categorías, si no existe la categoría dada se muestra un mensaje de error, con la vista de ItemListContainer, pero filtrando los productos.
3. `/item/:idItem`: Muestra el detalle de un producto, si el idItem no existe se muestra un mensaje de error, con la vista de ItemDetailContainer.
4. `/cart`: Muestra el desglose de los productos que estén actualmente en el carrito, con controles para agregar o quitar productos, y su cantidad y precio total. Si no hay ningún producto en el carrito se muestra un botón para ir al catálogo. Tiene la vista de Cart.js.
5. `/search/:query`: Muestra la lista de productos filtrados por una query en particular que el usuario haya ingresado, con la vista de ItemListContainer.

## Contexts

### cartContext

Contexto que guarda los ítems que fueron agregados al carrito por el usuario.
Tiene 9 funciones:

1. addItem: Agrega una cierta cantidad de un ítem del carrito, si ese ítem ya esta al carrito no lo vuelve a agregar, sino que suma la nueva cantidad al elemento ya en el array.
2. subtractItem: Elimina una cierta cantidad de un ítem del carrito.
3. manageItemInCart: Metodo que le da funcionalidad a addItem y subtractItem, se simplificó la funcionalidad de estos dos métodos en esta función para no repetir código.
4. findItemIndex: Encuentra el índice de un ítem en el array de cartList dado un ID de ítem.
5. removeItem: Remueve un ítem del carrito con un ID de producto, si ese ID de producto no existe en el carrito devuelve false.
6. clear: Limpia el carrito de todos sus ítems.
7. itemTotals: Retorna un array con el precio total de todos los productos del carrito, y su cantidad.
8. isInCart: Dado un ID de ítem, devuelve true si está en el carrito y false si no.
9. saveOrder: Guarda una orden de ítems en la base de datos de Firestore, además hace un llamado a la función que actualiza los stocks de ítems.

### categoryContext

Contexto que contiene las funciones para trabajar con las categorías desde la base de datos de firestore.
Tiene 1 función:

1. getCategories: Trae los documentos de la colección "category" de firestore.

### productContext

Contexto que contiene las funciones para trabajar con los productos desde la base de datos de firestore.

Tiene 5 funciones:

1. getProducts: Trae los documentos de la colección "items" de firestore.
2. getProductsByCategory: Trae los documentos de la colección "items" de firestore filtrados por un ID de categoría particular.
3. getProductById: Trae un documento de la colección "item", según un ID dado.
4. updateStock: Actualiza el stock de los productos al realizarse una compra. Esta actualización se hace en lote.
5. createItemObject: Transforma los datos de productos traídos de Firestore en un objeto entendible por el resto del sitio.

## Librerias utilizadas

Las librerías utilizadas para el proyecto fueron:

1. React (V17.0.2): Libreria base, para facilidad de desarrollo y mejor reactividad del sitio. [Link](https://es.reactjs.org/).
2. react-bootstrap (V2.0.0-beta.6): Adaptación de la librería de Bootstrap para React, utilizada para facilitar el diseño de la UI. [Link](https://react-bootstrap.github.io/).
3. react-router-dom (V5.3.0): Para permitir cambios de vistas al hacer clic en los links del sitio. [Link](https://reactrouter.com/web/guides/quick-start).
4. Firebase (V9.1.0): SDK para utilizar Firestore. Aquí se guardan los productos, categorías y ordenes. [Link](https://firebase.google.com/)

## Base de datos

La base de datos que se está utilizando es Firestore.
Esta base tiene 3 colecciones con la siguiente estructura:

1. category: description (string), id (string).
2. items: categoryId (string), description (string), imagenId (string), price (number), stock (number), title (string).
3. orders: Objeto orden con otro objeto buyer dentro con los campos email (string), name (string) y phone (string). Luego un campo date (timestamp), otro objeto llamado items, con un arreglo con todos los items que el usuario compro, que tienen los campos id (string), price (number) y title (string). Por último un campo total (number)

<img src="https://i.ibb.co/KGNVNV7/Modelo-Base-de-datos.jpg" alt="Imagen del modelo de la base" style="width:500px;"/>
