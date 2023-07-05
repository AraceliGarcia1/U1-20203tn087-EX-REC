console.log("hola");
const producto={
    nombre:"",
    precio:0.0,
    cantidad:0,
    generarTotalProducto:()=>{
        let totalP=precio*cantidad;
        return totalP;
    } 
    
}

var addProduct = document.getElementById("add");

let productos=[]
addProduct.addEventListener("click",()=>{
    console.log("recuperando...")
    producto.nombre=document.getElementById("nombre").value;
    producto.precio=document.getElementById("precio").value;
    producto.cantidad=document.getElementById("cantidad").value;
    productos.push(producto)
    console.log(productos) 
    console.log(producto)      
});

var closeCar=document.getElementById("close")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const prototipoCarrito = {
    agregarProducto: function(producto){
      if(!this.productos){
       this.productos = [producto]
      } else {
       this.productos.push(producto);
      }
    },
    obtenerPrecioTotal: function(){
      return this.productos.reduce((total, p) => total + p.precio, 0);
    },
    folio:getRandomInt(),
    obtenerPrecioTotal: function(){
        return this.productos.reduce((total, p) => total + p.precio, 0);
      },
    
  }

 

closeCar.addEventListener("click",()=>{
    
   obtenerPrecioTotal()
   

});






  





