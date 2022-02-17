# Ejercicio

Este ejercicio consiste en construir una tienda online que despliegue productos agrupados por la categoría a la que pertenecen, generando por separado backend (API REST) y frontend(aplicación que la consuma) y utilizando la base de datos que se disponibiliza para
su desarrollo.

# Requisitos

- Conociemientos basicos de git(crear ,actualizar repositorios).
- Conocimietos basicos de CSS ,HTML5,BOOTSTRAP 5.
- Conociemientos basicos de ECMAScript 6(ES6).
- Editor de codigo(Visual Studio Code, SublimeText,NotePad++,etc.).
- Tener instalado git
- Lo más importante una PC propia o prestada.

# Instalación y creación de archivos

Comenzando por la instalción de git, sigue los pasos indicados en la pagina oficial de git  https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git. Luego procedemos a la instalación del editor de codigo a utilizar ,en este caso Visual Studio code (VS code), para eso iremos a la pagina oficial de VS code ,ingresamos a https://code.visualstudio.com/download y descargamos el archivo y instalación y seguimos los pasos indicados en este link https://support.academicsoftware.eu/hc/es/articles/360006916138-C%C3%B3mo-instalar-Microsoft-Visual-Studio-Code#:~:text=Paso%201%3A%20Ve%20a%20la,acepta%20el%20acuerdo%20de%20licencia. Una vez terminado este proceso,y empezamos con la creación de archivos .

Elige un directorio donde se guardaran los archivos, crearas 3 carpetas las cuales contendran un archivo correspondiente al nombre y un archivo index.html.

Carpeta Proyecto  | archivos
------------- | -------------
Carpeta ControllersJs  | app.js
Carpeta Estilos | style.css
Carpeta imagenes | favicon.png ,loading-buffering.gif
 index.html| 
 
 
 # Diseño y Funcionamiento
 
 En esta sección veremos el diseño y funcionamiemto de nuestro proyecto, mostrando a travez de pantallazos.
 
 Primero se vera como funciona externamente el funcionamiento, al final habra explicaciones de como funciona dentro del codigo de cada función.
 
 ## Pagina
Esta pagina compuesta por un diseño responsivo ,lo que le permite adaptarse a la pantalla de cualquier dispositvo señalado en la documentación .
Por Ej:

#### Celular moderno

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/CelularModerno.png)

#### Celular moderno

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/Tablet.png)

#### Celular viejo

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/CelularViejo.png)


## Composición
Aqui se muestra como esta compuesta la pagina ,con su header que dentro de el contiene el titulo de la pagina, seccion de busqueda ,y el carrito de compras que para este ejercicio no se pidio funcionalidad, solo traida,busqueda y filtrado de productos, debajo del header tenemos 2 secciones , filtros y productos.
Imagen vista desde un PC

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/pagina.png)

## Busqueda
El buscador esta diseñado para que en la version de pc se despliegue al pasar el cursor por encima del boton como se muestra en la siguiente imagen:


![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/CursorEnBusqueda.png)

Este Buscador al escribirle un parametro de busqueda que puede ser cual cosa (numeros,letras,simbolos). En el caso que no se ingrese nada y haga click en buscar aparecera un mensaje de error y no proseguira con la busqueda, como se muestra a continuacion.

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/busquedaVacia.png)

En el caso ingresar bien un parametro de busqueda pero no encuentre resultados no saldra una alerta(Toast elemento de bootstrap 5) , si no que mostrara en pantalla en la seccion de productos que no hubo resultados, como se muestra a continuación.

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/busquedaSinResultados.png)

En el caso que ingrese un parametro que coincida con uno o más productos los mostrara seccionados según categoria.

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/resultadoBusqueda.png)

Como se muestra en la imagen anterior la busqueda de "bebida" muestra Energeticas y Bebidas , dado que la busqueda considera tanto el nombre del producto como su categoria

## Filtros

Los filtros nos permitirán obtener un resultado mas especifico según las necesidades del usuario , se puede filtrar por "Rango de precios", "Descuento" y por "Categoria(as)" donde en el ultimo filtro permite seleccionar más de una categoria, continuacion se mostraran  ejemplos con un filtrado con y sin resultados.

Con resultados
![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/Filtros.png)
Sin Resultados
![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/filtrosSinResultados.png)

## Productos

En esta sección es donde se despliegan los productos seccionados por categoria en 4 columnas  en versiones de PC y Tablet con  Resoluciones con un ancho superiores o iguales a 768 pixeles en dispositivos con resolucion inferior se desplegaran en un sola columna, como pudieron observar anteriormente las imagenes de Celulares, Tablets y PC, cada producto contiene su imagen, su nombre y su valor.

Vista al cargar la pagina y sus productos

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/pagina.png)

Si al cargar la pagina y tuvo algún problema al traer los productos se le indicara a travez de Toasts(Mensajes de alerta), para indicar que no se pudo cargar los productos, al igual que las categorias que son recibidas de la API como se muestra a continuación

![](https://raw.githubusercontent.com/Pato2294/fronted-bs/main/ReadmeIMG/ServidorFallido.png)

## Detras del telón (codigo)

En esta seccion veremos un poco más detallado el funcionamiento de al App dentro del codigo y asi veremos como se logra los resultados vistos anteriormente.

### Librerias y Scripts Ocupados
```html
<!DOCTYPE html>
<link rel="icon" href="imagenes/favicon.png" > 
<link rel="stylesheet" href="Estilos/style.css">libreria propia del proyecto para modificar elementos de la pagina, que importa en su codigo la libreria de bootstrap 5 para implentar complementos correspondiente  a la libreria
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
<script src="ControllerJs/app.js"></script>Archivo de javascript donde trabajaremos todas las funciones vistas más adelante.
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"></script>Estas dos ultimas librerias corresponden a Bootstrap y popper que permitiran ejecuctar metodos y acceder a propiedades permitiendo visualizar el funcionamiento correctos de los elementos de dichas librerias.
```


Para dudas sobre las propiedades Bootstrap que verán mas adelante les adjunto el link de documentacion de elementos y funciones de Bootstrap :https://getbootstrap.com/docs/5.0/getting-started/introduction/

### Variables Generales
```javascript
const API_URL='https://backend-bss.herokuapp.com/'; La URL de la Api a la cual iran todas las peticiones para ser respondidas y devueltas al App

let productos=[];//Arreglo de productos
let productosEncontrados=[];//Arreglo de productos encontrados,que seran el resultado de la busqueda en la pagina
let productosFiltrados=[];//Arreglo de productos filtrados,que seran el resultado del filtrado realizado en la pagina
let categorias=[];//Arreglo que almacenara las categorias para ser utilizadas como filtrado
let spinner=document.querySelector('#cargaP');//Elemento que indicara cuando una accion aun sigue en proceso
let ContenedorProductos=document.querySelector('#resultados');//Variable que obtiene las propiedades de un elemento selecionado
let ContenedorCategorias=document.querySelector('#categorias');// En este caso los contenedores de productos y categorias
```

### Buscar 

Buscar esta compuesto un encapsulado que gracias a sus propiedades de Bootstrap 5 y propiedades que se le dieron en el archivo style.css ,le permite estar posicionado en el lugar y la apariencia que se muestra en las demostraciones anteriores 

```html
<!DOCTYPE html>
<div class="search col-6 col-sm-6 d-flex justify-content-end">
                    <div class="search-box">
                        <a class="search-btn " id="search"  href="#" style="display: none;" > <i class="bi bi-search"></i></a>
                        <a class="search-btn " id="search2"  href="#"> <i class="bi bi-search"></i></a>
                        <input id="buscar"  class="search-text" type="txt" placeholder="Buscar " name="">
                        
                    </div>
                </div>
```
				
Partimos con la captura del evento click para poder ejecutar el metodo buscar()

```javascript
 document.getElementById("search2").addEventListener("click", function() {
       buscar();
      });	
```

El metodo buscar hace visible el Spinner(imagen de carga de procesos) mientras se ejecuta el metodo, luego recibe lo capturado del input del buscador ,determina si se ingreso texto al buscador a traves de un if, si no se ingreso texto llama un metodo de alerta el cual se muestra en este caso que el input no debe quedar  vacio y detiene el Spinner, en caso que haya texto lo guarda y llama al metodo obtenerBusqueda() con el parametro con el texto obtenido. 

```javascript
const buscar =()=>{
    spinner.style.display='block';
    const productosBusqueda={
        busqueda:document.querySelector('#buscar').value
    }
    if(!productosBusqueda.busqueda)
    {
       alertManager('bg-danger', 'Campo de busqueda no debe quedar vacio','tProductos');
       spinner.style.display='none';
        return;
    }
    obtenerBusqueda(productosBusqueda);
}	  
```

En el metodo obtenerBusqueda se recibe el parametro con el texto ingresado por el usuario, y atraves la metpdo fetch, realiza la peticion a una url especifica que corresponde a la API(Backend) , mandandole el parametro para ser procesado, una vez procesado y la API entrega una respuesta y si es exitosa devolvera los productos segun los resultado de la busqueda, si el resultado no contiene datos llamara a activara el elementos que indica que no hay resultados como se vio en el ejemplo de Busqueda sin resultados,y en caso que si hayan resultados los guardara y llamara al metodo mostrarProductos()

```javascript
const obtenerBusqueda=(buscar)=>{
    fetch(API_URL+"buscar/"+buscar.busqueda)
    .then(response => response.json())
    .catch(error => {
        alertManager('bg-danger', 'Ocurrió un problema durante la busqueda, \nintentelo de nuevo','tProductos');
        return error;
      })
    .then(data=>{
	
        spinner.style.display='none';
        if(data!=undefined)
        {
            productosEncontrados=data.data;
            productosEncontrados.length!=0? 
            (productosEncontrados=data.data,mostrarProductos(productosEncontrados),ContenedorProductos.style.display="none") : (mostrarProductos(productosEncontrados),ContenedorProductos.style.display="block");
        }
    })
} 
```

### Filtrar
Los Filtros estan compuestos por tres secciones “Rango de precios”, “Descuento” y por “Categoria(as)",las primeras dos secciones contienen los elementos radio-button que permetiran selecionar solo un elemento por seccion, en cambio la ultima permite seleciona una o mas opciones dado que esta formado por elementos checkbox las cuales son cargadas por la funcion mostrarCategorias detallada mas adelante, cada elemento al selecionarse detona el metodo filtrar()

```html
<!DOCTYPE html>
 <div class="filtros col col-lg-4 col-xl-3 col-xxl-2   border border-1 mb-2 " id="filtros"><div id="titulo" class="tFiltro border-bottom border-2"><h5>Filtros</h5></div>
            <div class="filtros border-bottom border-2">
                <div id="titulo" class="border-bottom border-2"><h5>Rango de precios</h5></div>
                <input class="col-1" type="radio" name="rango" value=1 checked id="rango" onclick="filtrar()"><label class="col-11" for="rango">todos</label> 
                <input class="col-1" type="radio" name="rango" value=2 id="rango1" onclick="filtrar()"><label class="col-11" for="rango1">menores a $4999</label>
                <input class="col-1" type="radio" name="rango" value=3 id="rango2" onclick="filtrar()"><label class="col-11" for="rango2">entre $5000 y $9999</label>
                <input class="col-1" type="radio" name="rango" value=4 id="rango3" onclick="filtrar()"><label  class="col-11" for="rango3">entre $10000 y $14999</label>
                <input class="col-1" type="radio" name="rango" value=5 id="rango4" onclick="filtrar()"><label class="col-11" for="rango4">mayores a $15000</label>
            </div>
            <div class="filtros border-bottom border-2">
                <div id="titulo"  class="border-bottom border-2"><h5>Descuento</h5></div>
                <input class="col-1" type="radio" name="descuento" checked value=1 id="desc" onclick="filtrar()"><label class="col-11"  for="desc">todos</label> 
                <input class="col-1" type="radio" name="descuento" value=2 id="desc1" onclick="filtrar()"><label class="col-11" for="desc1">Con descuento</label>
                <input class="col-1" type="radio" name="descuento" value=3 id="desc2" onclick="filtrar()"><label class="col-11" for="desc2">Sin descuento</label>
            </div>
            <div class="filtros" id="categorias">
                <div id="titulo" class="border-bottom border-2"><h5>Categorias</h5></div>
            </div>
        </div>
```

El metodo filtrar obtiene los elementos y los recorre para saber cual o cuales fueron selecionado para luego crear un objeto con tres parametros ,en representacion a cada filtro, y luego ser enviado a la función obtenerProductosFiltrados().

```javascript
const filtrar =()=>{
    spinner.style.display='block';
    let rango=0,desc=0,cat=[];
    const recorridorage = document.getElementsByName("rango");
    const recorridoDesc = document.getElementsByName("descuento");
    const recorridoCat = document.getElementsByName("boxCheck");

     for (let i = 0; i < recorridorage.length; i++) {
        if(recorridorage[i].checked) rango=recorridorage[i].value;
        }

     for (let i = 0; i < recorridoDesc.length; i++) {
        if(recorridoDesc[i].checked) desc=recorridoDesc[i].value;
       }

    for (let i = 0; i < recorridoCat.length; i++) {
        if(recorridoCat[i].checked) cat.push(recorridoCat[i].value);
       }  
   
    const filtrosProductos={
           fRango:rango,
           fDesc:desc,
           fCat:cat
       }
       obtenerProductosFiltrados(filtrosProductos);
    
   } 
   ```
   
La funcion obtenerProductosFiltrados() al igual que la funcion obtenerBusqueda realiza un peticion y dependiendo de la respuesta envia una alerta o procede a enviar los datos a la funcion mostrarProductos().

 ```javascript
 const obtenerProductosFiltrados=(filtro)=>{
    fetch(API_URL+"filtros",{
        method:'POST',
        body:JSON.stringify(filtro),
        headers:{
            'content-type':'application/json'
        }
    })
    .then(response => response.json())
    .catch(error => {
        alertManager('bg-danger', 'Ocurrió un problema al filtrar los productos','tProductos');
        return error;
      })
    .then(data=>{
    
        spinner.style.display='none';
        if(data!=undefined)
        {
            productosFiltrados=data.productosFiltrados;
            productosFiltrados.length!=0? 
            (productosFiltrados=data.productosFiltrados,mostrarProductos(productosFiltrados),ContenedorProductos.style.display="none") :(mostrarProductos(productosFiltrados),ContenedorProductos.style.display="block") ;
        }
    })
}
  ```
###Categorias y Productos
La obtencion de categorias pasan por el mismo proceso que los anteriores metodos a partir de una peticion a API con su respectiva URL,  a traves las funciones obtenerCategorias() y obtenerProductos y dependiendo de la respuesta prosigue si accede a las funciones  mostrarCategorias() y mostrarProductos() respectivamente como se muestra a continuación

#### Categorias
 ```javascript
 const obtenerCategorias=()=>{
    fetch(API_URL+"categorias")
    .then(response => response.json())
    .catch(error => {
        alertManager('bg-danger', 'Ocurrió un problema al cargar las categorias','tCategorias');
        return error;
        
      })
    .then(data=>{
        spinner.style.display='none';//
        data!=undefined? 
        (categorias=data.data,mostrarCategorias(categorias)) : ContenedorCategorias.innerHTML+=`<div class="h6 p-1">No se encontraron resultados</div>`
    })
}
  ```
  En esta funcion al recibir los datos de la respuesta genera codigo HTML  con un elemento checbox por cada categoria recibida con su respectivos datos como el nombre y el id ,esto se logra gracias a propiedad innerHTML que permite inyectar codigo HTML a un elemento asignado en este caso en contenido de la seccion de categorias que se indico anteriormente.
  
 ```javascript
	const mostrarCategorias =(categorias)=>{
    let listaCategorias="";
    if(categorias!=undefined){
        categorias.forEach(categorias => {
            listaCategorias+=`<input type="checkbox" name="boxCheck" value=${categorias.id} class="categoria col-1" onclick="filtrar()"><label class="col-11" for="desc2">${categorias.name}</label>`
            });

        listaFiltroCategoria.innerHTML+=listaCategorias;
    }else{
        ContenedorCategorias.innerHTML+=`<div class="h6 p-1">No se encontraron resultados</div>`;
    }} 
```
    

#### Productos

```javascript
const obtenerProductos=()=>
{
    fetch(API_URL+"productos")//indicamos la direccion a la URL correspondiente al servidor
    .then(response => response.json())//declaramos que la respuesta del backend sea en formato json para su manipulacion
    .catch(error => {//si se produce algun error se llama al metodo visto anteriormente para indicarlo con un Toast
        alertManager('bg-danger', 'Ocurrió un problema al cargar los productos','tProductos');
      })
    .then(data=>{//Cuando se recibe la respuesta sin ningun error se procede a la obtencion de los datos
        spinner.style.display='none';// En el caso de no recibir datos se marcara en pantalla que no se encontraron resultados 
        // de caso contrario se mostraran en la pagina
        if(data!=undefined)
        {
            data.data.length!=0? (productos=data.data,mostrarProductos(productos),ContenedorProductos.style.display="none") : ContenedorProductos.style.display="block";
        }else{
            ContenedorProductos.style.display="block";
        }
    })
}
```
En mostrarProductos se declaran variables que representan elementos de la pagina en este caso secciones de categoria en la seccion de productos , las cuales se llenaran atraves de injeccion HTML con el metodo mencionado en categorias ,por medio de un filtrado de id, si el producto corresponde a cierta categoria, el producto se agregara a la seccion de dicha categoria, si una o varias categorias estan sin productos dicha categoria no sera mostrada en la seccion de productos ,y en el caso de no haber ningun producto se activa el elemento indicado ,como puede ser en caso de recibir los datos de las funciones obtenerProductosFiltrados() y obtenerBusqueda(), cuyo resultado sea vacio, se indicara en pantalla como se muestro en el ejemplo de filtro y busqueda sin resultado.

```javascript
// Estas variables alamacenan la propiedades de los elementos indicados por sus ids o sus clases segun la conveniencia para generar el seteo o el ingreso de datos a la pagina
const listaEnergeticas=document.querySelector('#energetica');
const listaPisco=document.querySelector('#pisco');
const listaRones=document.querySelector('#ron');
const listaBebidas=document.querySelector('#bebida');
const listaSnacks=document.querySelector('#snack');
const listaCervezas=document.querySelector('#cerveza');
const listaVodkas=document.querySelector('#vodka');
const listaFiltroCategoria=document.querySelector('#categorias');
const listaFiltroPrecio=document.querySelector('#precios');
const listaFiltrodescuento=document.querySelector('#descuento');
// obtener los contenedores de cada lista de productos
const divEnergeticas=document.querySelector('.energetica');
const divPisco=document.querySelector('.pisco');
const divRones=document.querySelector('.ron');
const divBebidas=document.querySelector('.bebida');
const divSnacks=document.querySelector('.snack');
const divCervezas=document.querySelector('.cerveza');
const divVodkas=document.querySelector('.vodka');
const divFiltroCategoria=document.querySelector('#categorias');
// esto tambien servira para saber segun los resultados si se tendra que mostrar u ocultar algun elemento


const mostrarProductos =(prod)=>{
    console.log(prod.length);
    try {
            let listaHTML="";
            let energetica="",pisco="",ron="",bebida="",snack="",cerveza="",vodka="";
            let descuento="";
            //se declaran las variables que corresponden a los elementos de productos y su seccion correspondiente
            //Aqui se recorren los productos recibidos para procesar su informacion y mostrarla de mejor manera en pantalla
            prod.forEach(producto => {
                if(producto.discount>0)
                {
                    descuento=producto.discount+"%";
                    
                }else{
                    descuento="";
                }

                listaHTML=
                `<div class="col-md-3 mb-4">
                    <div class="card mt-3 h-100 ">
                        <div class="product-1 align-items-center p-0 text-center ">
                        <img src="${(producto.url_image||"https://www.museorapanui.gob.cl/sites/www.museorapanui.gob.cl/files/2021-04/imagen-defecto_4.png")}" class="img-fluid" alt="...">
                        <h5 class="card-title ">${producto.name}</h5>
                        <div class="cost mt-3 border-0 border-top">
                      <p class="precioFinal col-md-8 mt-5 mx-4">$${producto.price} <span class="descuento"> <del>${descuento} </del></span></p><a class="carro mx-2 col-md-2"><i class="bi bi-cart3 "></i></a>
                        </div>
                        </div>
                    </div>
                </div>`;
                //Se hace el filtrado para asignar donde va el producto segun su categoria y asi llenar su contenedor
                if(producto.category===1&&listaHTML!="undefined"){
                    energetica+=listaHTML;
                }
                if(producto.category===2){
                    pisco+=listaHTML;
                }
                if(producto.category===3){
                    ron+=listaHTML;
                }
                if(producto.category===4){
                    bebida+=listaHTML;
                }
                if(producto.category===5){
                    snack+=listaHTML;
                }
                if(producto.category===6){
                    cerveza+=listaHTML;
                }
                if(producto.category===7){
                    vodka+=listaHTML;
                }
            });
            //En el caso que no hayan datos en un contenedor, se ocultara y, solo se mostraran los contenedores con productos
            energetica==""? (divEnergeticas.style.display = 'none',listaEnergeticas.innerHTML="") : (listaEnergeticas.innerHTML=energetica,divEnergeticas.style.display = 'block')
            pisco==""? (divPisco.style.display = 'none',listaPisco.innerHTML="" ):(listaPisco.innerHTML=pisco,divPisco.style.display = 'block');
            ron==""? (divRones.style.display = 'none', listaRones.innerHTML=""):(listaRones.innerHTML=ron,divRones.style.display = 'block');
            bebida==""? (divBebidas.style.display = 'none', listaBebidas.innerHTML=""):(listaBebidas.innerHTML=bebida,divBebidas.style.display = 'block' );
            snack==""? (divSnacks.style.display = 'none',listaSnacks.innerHTML="" ):(listaSnacks.innerHTML=snack,divSnacks.style.display = 'block' );
            cerveza==""? (divCervezas.style.display = 'none',listaCervezas.innerHTML="") :(listaCervezas.innerHTML=cerveza,divCervezas.style.display = 'block');
            vodka==""? (divVodkas.style.display = 'none',listaVodkas.innerHTML="") :(listaVodkas.innerHTML=vodka,divVodkas.style.display = 'block');
    } catch (error) {
                         alertManager("bg-danger",`${error}`)
                }   
}
```
