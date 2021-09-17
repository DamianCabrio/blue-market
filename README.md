# Blue Market

## Componentes

### Item
Card del producto para el catálogo, muestra imagen, título, descripción, precio y categoría en un formato compacto. Además tiene un botón para ir a la vista detallada del producto.

### Item Detail
Vista detallada del ítem. Por ahora tiene la misma información que el componente ítem, pero con una organización horizontal, con la imagen a la izquierda y la información a la derecha. Además tiene un botón para volver al catálogo

### Item List
Itera por todos los productos que le envíen por props, y crea un componente Item para cada uno de ellos

### Navbar
El navbar tiene los siguientes elementos actualmente:
1. Brand link: Link con el nombre del sitio, que te lleva al index si se le hace click.
2. Catálogo: Igual al brand link:
3. Ofertas: Ahora no tiene ningún efecto, pero más adelante filtrará los productos mostrando solo los que tengan alguna oferta.
4. Dropdown con categorías: Muestra las categorías disponibles en el sitio, y permite filtrar por ellas.
5. Buscador: Actualmente no tiene funcionamiento, pero más adelante te va a permitir filtrar productos por nombre
6. Carrito: Actualmente no tiene funcionamiento, pero más adelante te va a permitir ver los productos que guardaste para comprar

## Rutas disponibles actualmente:
1. `/`: Indice del sitio, muestra el catálogo de todos los productos, con la vista ItemListContainer.
2. `/category/:idCategory`: Filtro del catálogo por categorías, si no existe la categoría dada se muestra un mensaje de error, con la vista ItemListContainer, pero filtrando los productos.
3. `/item/:idItem`: Muestra el detalle de un producto, si el idItem no existe se muestra un mensaje de error, con la vista ItemDetailContainer.

---

Proyecto creado con React.
Para empezar correr el proyecto localmente primero bajar las dependencias con el comando `npm install`, luego correr el comando `npm start`.
Para generar un build para producción correr el comando `npm run build`

Documentación de React [Create React App](https://github.com/facebook/create-react-app).
