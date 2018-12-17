# DROPCAST

DROPCAST es una plantilla de HTML y CSS realizada por [Amie Chen](https://www.amie-chen.com/) que voy a utilizar para implementar los conocimientos adquiridos en el curso de VueJS 2.

Para ello he añadido dos enlaces a este README donde consultar la versión de la plantilla tal cual la provee Codrops y la versión en la que he trabajado con VueJS.

## Web Estática vs Single Page Application
* *Web*: https://tympanus.net/Freebies/dropcast/
* *Vue*: _El código se puede consultar en este mismo proyecto de GitHub. La versión build no está disponible todavía. Lo explico más abajo en la parte de [TODO](#todo)_

## Herramientas utilizadas

* [NodeJS/NPM](https://nodejs.org/es/) - NodeJS como entorno de ejecución de JavaScript y NPM como gestor de paquetes.
* [vue-cli](https://cli.vuejs.org/) - vue-cli con la plantilla oficial **webpack-simple** como *scaffolding* del proyecto
* [node-sass](https://www.npmjs.com/package/node-sass) y [sass-loader](https://www.npmjs.com/package/sass-loader) - Paquetes NPM para poder incluir archivos SASS en la configuracion del proyecto (dentro de 'assets', por ejemplo).
* [SASS/SCSS](https://sass-lang.com/) - Como preprocesador de CSS.
* [Git](https://git-scm.com/) - Como control de versiones a través de GitHub.

## Autores

* **[Amy Chen](https://www.amie-chen.com/)** - De la plantilla HTML, CSS, JS
* **Santi Martin** - De la implementación de VueJS 2 sobre la plantilla de Amy Chen.

## Licencia
* Del proyecto de Amy Chen: [Uso libre, excepto para republicar, distribuir o vender "tal-cual"](https://github.com/amiechen/codrops-dropcast#license)

## Observaciones
* Para no montar una API REST propia con unos datos propios ~~(en realidad, los datos originales de la version 'web') voy a hacer uso de unos datos simulados de los que se pueden obtener desde [JSON Placeholder](https://jsonplaceholder.typicode.com/)~~ voy a crear solamente un JSON con los datos de cada uno de los capítulos del podcast en un directorio fuera de _src_ y será el que llame por AJAX con _axios_. 
* Para las fotos de los 'autores' se van a utilizar las que provee la plantilla, cambiándolas el nombre para usarlas según los datos simulados que se obtengan desde JSON ~~Placeholder~~. ~~Además, a las correspondientes al estado *hover* se les va a añadir un sufijo '_hover' para que convivan en el mismo directorio con las de estado normal~~.
* El _layout_ de las páginas _index.html_ y _detail.html_ de la plantilla es distinto, por lo que su ubicación en el HTML no se puede hacer de forma común (dejándolo en el _App.vue_). Creo una componente _Home.vue_ y otro que será _Detail.vue_ que correspondan con _index.html_ y _detail.html_ respectivamente.
* Esto es más bien una nota mental / recordatorio: En el detalle de un episodio, al cargar los audios en _mp3_ y/o _ogg_, debemos de asegurarnos que el _file-loader_ esté configurado para cargar ese tipo de archivos. Se añade en el _webpack.config.js_:
~~~~
module.exports = {
    ...
    module: {
        rules: [
            ...
            {
                test: /\.(png|jpg|gif|svg|mp3|ogg)$/,
                loader: 'file-loader',
                options: {
                name: '[name].[ext]?[hash]'
                }
            }
            ...
        ]
    }
}
~~~~

## TODO
- [ ] Incluir de otra forma los archivos scss comunes a todos los componentes (variables.scss, animation.scss) para no tener que re-incluirlos en cada componente creado.
- [ ] Investigar cómo hacer que VueJS coja la estructura de los assets en entorno de desarrollo (*/images/photos/original/1.png , /images/photos/edited/1.png, etc*) para diferenciar las imagenes que se llaman igual, pero que están en directorios distintos.
- [x] Cambiar para que las imágenes de *Episodes*, en lugar de cargarse como fondo, se carguen como contenido.
- [x] Relacionado con el punto anterior, el estado 'editado' (estado normal) de las imagenes de *Episodes* se podría hacer con filtros CSS (quitandolo en el estado 'hover'). Asi ahorraríamos peticiones al servidor.
- [ ] ~~Solventar el problema con la ruta de _build.js_ y las rutas de detalle en el navegador cuando no se accede desde la Home~~. El problema parece que era originado cuando cambie las rutas en _webpack.config.js_ para que cogiera de forma relativa el _build.js_ y funcionara en GitHub pages sin configurar mucho.
- [ ] Relacionado con el punto anterior, tras probar varios [recursos](#recursos) de generar el _build_ para que junto con GitHub pages funcionen las rutas y no conseguirlo, dejo este punto en *pendiente* para hacer más adelante.

## Recursos
- [Tutorial para empezar con vuejs](https://github.com/cristinafsanz/vuejs-primeros-pasos)
- [vue-gh-pages](https://github.com/cristinafsanz/vue-gh-pages)
- [Simple deployment to GH Pages](https://discourse.gohugo.io/t/simple-deployment-to-gh-pages/5003)
- [Setup GitHub Pages "gh-pages" branch and "master" branch as subfolders.](https://gist.github.com/chrisjacob/833223/ee7cfb6413262754c79840c28b4202d461154658)