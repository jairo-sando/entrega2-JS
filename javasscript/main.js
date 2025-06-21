
//Servicios

const servicios = [

 {  
    id: "spa-01",
    titulo: "Días de Spa-01",
    imagen: "./img/dia_de_spa.jpg",
    categoria:{     
        nombre: "DiasDeSpa",
        id:"diasDeSpa"
    },
    precio: 10000
 },

  {  
    id: "spa-02",
    titulo: "Días de Spa-02",
    imagen: "./img/dia_spa_3.jpg",
    categoria:{     
        nombre: "DiasDeSpa",
        id:"diasDeSpa"
    },
    precio: 10000
 },

 {  
    id: "spa-03",
    titulo: "Días de Spa-03",
    imagen: "./img/imagenprincipal.jpg",
    categoria:{     
        nombre: "DiasDeSpa",
        id:"diasDeSpa"
    },
    precio: 10000
 },

 {  
    id: "facial-01",
    titulo: "Facial-01",
    imagen: "./img/facial1.jpg",
    categoria:{     
        nombre: "Facial",
        id:"facial"
    },
    precio: 10000
 },

 {  
    id: "facial-02",
    titulo: "Facial-02",
    imagen: "./img/facial2.jpg",
    categoria:{     
        nombre: "Facial",
        id:"facial"
    },
    precio: 10000
 },

  {  
    id: "facial-03",
    titulo: "Facial-03",
    imagen: "./img/facial3.jpg",
    categoria:{     
        nombre: "Facial",
        id:"facial"
    },
    precio: 10000
 },

  {  
    id: "masajes-01",
    titulo: "Masajes-01",
    imagen: "./img/masajes.jpg",
    categoria:{     
        nombre: "Masajes",
        id:"masajes"
    },
    precio: 10000
 },

  {  
    id: "masajes-02",
    titulo: "Masajes-02",
    imagen: "./img/masajes2.jpg",
    categoria:{     
        nombre: "Masajes",
        id:"masajes"
    },
    precio: 10000
 },

  {  
    id: "masajes-03",
    titulo: "Masajes-03",
    imagen: "./img/masajes3.jpg",
    categoria:{     
        nombre: "Masajes",
        id:"masajes"
    },
    precio: 10000
 }

] ;

//Funciones y constantes

const contenedorServicios = document.querySelector("#contenedor-servicios"); 
const botonesCategorias = document.querySelectorAll(".boton-categoria"); 
const tituloPrincipal = document.querySelector ("#titulo-Principal");
let botonesAgregar = document.querySelectorAll(".servicio-agregar");
const numerito = document.querySelector("#numerito");



function cargarServicios(serviciosElegidos) {

  contenedorServicios.innerHTML = "";

  serviciosElegidos.forEach(servicio => {
    
    const div = document.createElement("div"); 
    div.classList.add("servicio"); 
    div.innerHTML = ` 
        <img class="servicio-imagen" src= "${servicio.imagen}" alt="${servicio.titulo}">
        <div class="servicio-detalles">
            <h3 class="servicio-titulo">${servicio.titulo}</h3>
            <p class="servicio-precio">$${servicio.precio}</p>   
            <button class="servicio-agregar" id="${servicio.id}">Agregar</button>
        </div>
     `; 
    
    contenedorServicios.append(div); 

  })
  
  actualizarBotonesAgregar();

}

cargarServicios(servicios); 

botonesCategorias.forEach(boton => {
   boton.addEventListener("click", (e) => {
      
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id !="todos") {
           const servicioCategoria = servicios.find(servicio => servicio.categoria.id === e.currentTarget.id);
           tituloPrincipal.innerText = servicioCategoria.categoria.nombre;
      
           const serviciosBoton = servicios.filter(servicio => servicio.categoria.id === e.currentTarget.id);
           cargarServicios(serviciosBoton);  
    
        } else {
           tituloPrincipal.innerText = "Todos los Servicios";
           cargarServicios(servicios);
        }
      

  }) 
}); 

function actualizarBotonesAgregar(){
     botonesAgregar = document.querySelectorAll(".servicio-agregar"); 
     
     botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito); 
     
     });
}

const serviciosEnCarrito = []; 

function agregarAlCarrito(e){
  const idBoton = e.currentTarget.id; 
  const servicioAgregado = servicios.find(servicio => servicio.id === idBoton); 

  if(serviciosEnCarrito.some(servicio => servicio.id === idBoton)) {
      const index =  serviciosEnCarrito.findIndex(servicio => servicio.id === idBoton ); 
      serviciosEnCarrito[index].cantidad++; 
  } else {
     servicioAgregado.cantidad = 1;
     serviciosEnCarrito.push(servicioAgregado);
  } 
    
   actualizarNumerito(); 
}

function actualizarNumerito() {
   let nuevoNumerito = serviciosEnCarrito.reduce((acc, servicio) => acc + servicio.cantidad, 0 ); 
   numerito.innerText = nuevoNumerito; 

}