# DROPCAST

DROPCAST es una plantilla de HTML y CSS realizada por [Amie Chen](https://www.amie-chen.com/) que voy a utilizar para implementar los conocimientos adquiridos en el curso de VueJS 2.

Para ello he creado dos directorios separados en los que estarán alojados la version de la plantilla tal cual la provee Codrops y la versión en la que trabajaré con VueJS, siendo 'web' y 'vue' los directorios respectivamente.

## Web Estática vs Single Page Application
* *Web*: https://martinpulido.github.io/dropcast/web/
* *Vue*: https://martinpulido.github.io/dropcast/vue/dropcast/

## Herramientas utilizadas

* [NodeJS/NPM](https://nodejs.org/es/) - NodeJS como entorno de ejecución de JavaScript y NPM como gestor de paquetes.
* [vue-cli](https://cli.vuejs.org/) - vue-cli con la plantilla oficial **webpack-simple** como *scaffolding* del proyecto
* [node-sass](https://www.npmjs.com/package/node-sass) y [sass-loader](https://www.npmjs.com/package/sass-loader) - Paquetes NPM para poder incluir archivos SASS en la configuracion del proyecto (dentro de 'assets', por ejemplo).
* [SASS/SCSS](https://sass-lang.com/) - Como preprocesador de CSS.
* [Git](https://git-scm.com/) - Como control de versiones a través de GitHub.

## Autores

* **Santi Martin** - Desarrollo del interfaz con HTML, CSS, JS (+ jQuery)

## Licencia

Este proyecto está realizado bajo la licencia MIT.

## Observaciones

* Para no montar una API REST propia con unos datos propios (en realidad, los datos originales de la version 'web') voy a hacer uso de unos datos simulados de los que se pueden obtener desde [JSON Placeholder](https://jsonplaceholder.typicode.com/).
* Para las fotos de los 'autores' se van a utilizar las que provee la plantilla, cambiándolas el nombre para usarlas según los datos simulados que se obtengan desde JSON Placeholder. Además, a las correspondientes al estado *hover* se les va a añadir un sufijo '_hover' para que convivan en el mismo directorio con las de estado normal.

## TODO
* Incluir de otra forma los archivos scss comunes a todos los componentes (variables.scss, animation.scss) para no tener que re-incluirlos en cada componente creado.
* Investigar cómo hacer que VueJS coja la estructura de los assets en entorno de desarrollo (*/images/photos/original/1.png , /images/photos/edited/1.png, etc*) para diferenciar las imagenes que se llaman igual, pero que están en directorios distintos.
* Cambiar para que las imágenes de *Episodes*, en lugar de cargarse como fondo, se carguen como contenido.
* Relacionado con el punto anterior, el estado 'editado' (estado normal) de las imagenes de *Episodes* se podría hacer con filtros CSS (quitandolo en el estado 'hover'). Asi ahorraríamos peticiones al servidor.

