// Se parte con las variables que se ocuparan en el proceso a lo largo del funcionamiento las cuales estan definidas
//por nombres autologicos(palabras que se definen por si mismas)
const API_URL='https://backend-bss.herokuapp.com/'; //La URL de la Api a la cual iran todas las peticiones para ser respondidas
//const API_URL='http://192.168.0.26:5050/'; 
let productos=[];//Arreglo de productos
let productosEncontrados=[];//Arreglo de productos encontrados,que seran el resultado de la busqueda en la pagina
let productosFiltrados=[];//Arreglo de productos filtrados,que seran el resultado del filtrado realizado en la pagina
let categorias=[];//Arreglo que almacenara las categorias para ser utilizadas como filtrado
let spinner=document.querySelector('#cargaP');//Elemento que indicara cuando una accion aun sigue en proceso
let ContenedorProductos=document.querySelector('#resultados');//Variable que obtiene las propiedades de un elemento selecionado
let ContenedorCategorias=document.querySelector('#categorias');// en este caso los contenedores de productos y categorias
//Esta funcion se encarga que cargue todo el DOM para que no se produzcan error al momento de cargar la pagina
window.addEventListener('DOMContentLoaded',() =>{
    obtenerProductos();
    obtenerCategorias();
    cargarEventos();
})
//Esta funcion se encarga de tomar un elemento Toast para indicar mensajes de error o exito segun lo amerite
const alertManager = (typeMsg, message) => {
    
    const alert = document.querySelector('.toast');

    alert.innerHTML = message || 'Se produjo cambios';
    alert.classList.add(typeMsg);
     let option={
         animation:true,
         delay:5000
     };
     const toaster= new bootstrap.Toast(alert,option);
     toaster.show();

  }
//Esta funcion se encargara de hacer la peticion y de obtener la respuesta para almacenar los productos 
const obtenerProductos=()=>{
    fetch(API_URL+"productos")//indicamos la direccion a la URL correspondiente al servidor
    .then(response => response.json())
    .catch(error => {//si se produce algun error se llama al metodo visto anteriormente para indicarlo con un Toast
        alertManager('bg-danger', 'Ocurrió un problema al cargar los productos');
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
//Esta funcion se encargara de hacer la peticion y de obtener la respuesta del servidor para almacenar las categorias
const obtenerCategorias=()=>{
    fetch(API_URL+"categorias")
    .then(response => response.json())
    .catch(error => {
        alertManager('bg-danger', 'Ocurrió un problema al cargar las categorias');
        return error;
        
      })
    .then(data=>{
        spinner.style.display='none';//finalmente si no hay problemas se llama al metodo universal del fronted para mostrar los datos en pantalla
        data!=undefined? 
        (categorias=data.data,mostrarCategorias(categorias)) : ContenedorCategorias.innerHTML+=`<div class="h6 p-1">No se encontraron resultados</div>`
    })
}
//Esta funcion se encargara de hacer la peticion y de obtener la respuesta del servidor para almacenar los productos buscados por el usuario
const obtenerBusqueda=(buscar)=>{
    fetch(API_URL+"buscar/"+buscar.busqueda)
    .then(response => response.json())
    .catch(error => {
        alertManager('bg-danger', 'Ocurrió un problema durante la busqueda, \nintentelo de nuevo');
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
//Esta funcion se encargara de hacer la peticion y de obtener la respuesta del servidor para almacenar los productos filtrados a conveniencia del usuario
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
        alertManager('bg-danger', 'Ocurrió un problema al filtrar los productos');
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
// Estas variables alamacenan la propiedades de los elementon indicados por sus ids o sus clases segun la conveniencia para generar el seteo o el ingreso de datos a la pagina
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
// esto tambien servira para saber segun los resultados se tendra que mostrar u ocultar algun elemento
//Esta funcion se encarga de mostrar los productos sin importar su manipulacion,busqueda, filtrado  
const mostrarProductos =(prod)=>{
    console.log(prod.length);
    try {
            let listaHTML="";
            let energetica="",pisco="",ron="",bebida="",snack="",cerveza="",vodka="";
            let precioHTML=""
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
                        <img src="${(producto.url_image||"https://www.museorapanui.gob.cl/sites/www.museorapanui.gob.cl/files/2021-04/imagen-defecto_4.png")}"  alt="...">
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
//El mismo proceso que el de productos pero con mucho menos variedad por la poca manipulacion de datos y solo necesita un contenedor
const mostrarCategorias =(categorias)=>{
    let listaCategorias="";
    if(categorias!=undefined){
        categorias.forEach(categorias => {
            listaCategorias+=`<input type="checkbox" name="boxCheck" value=${categorias.id} class="categoria col-1" onclick="filtrar()"><label class="col-11" for="desc2">${categorias.name}</label>`
            });
    
        listaFiltroCategoria.innerHTML+=listaCategorias;
    }else{
        ContenedorCategorias.innerHTML+=`<div class="h6 p-1">No se encontraron resultados</div>`;
    }
        
}
//Este metodo es el cual obtiene el paramentro de busqueda ,lo almacena de manera de ser leido en la peticion
const buscar =()=>{
    spinner.style.display='block';
    const productosBusqueda={
        busqueda:document.querySelector('#buscar').value
    }
    if(!productosBusqueda.busqueda)
    {
       alertManager('bg-danger', 'Campo de busqueda no debe quedar vacio');
       spinner.style.display='none';
        return;
    }//Se deriva al metodo que se encargara de mandar el paramentro de busqueda y obtener la respuesta 
    obtenerBusqueda(productosBusqueda);
}
// Esta funcion se encarga de escuchar boton de busqueda para iniciar el proceso
const cargarEventos=()=>{
    document.getElementById("search").addEventListener("click", function() {
        buscar();
      });    
}
//Aqui se inicia el proceso de obtencion de filtros para luego almacenarlos para un envio correcto para que el servidor lo reciba sin problemas
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


  
  
 
