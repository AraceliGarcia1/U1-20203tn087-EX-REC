console.log("hola");
const producto = {
  nombre: "",
  precio: 0.0,
  cantidad: 0,
  generarTotalProducto: function() {
    let totalP = this.precio * this.cantidad;
    return totalP;
  }
};

const carrito = {
  productos: [],
  folio: getRandomInt(1000).toString(),
  agregarProducto: function(producto) {
    this.productos.push(producto);
  },
  calcularTotal: function() {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].generarTotalProducto();
    }
    return total;
  },
  calcularTotalConIVA: function() {
    const iva = 0.16; // 16% de impuesto
    const totalSinIVA = this.calcularTotal();
    const totalConIVA = totalSinIVA * (1 + iva);
    return totalConIVA;
  }
};

const addProduct = document.getElementById("add");
addProduct.addEventListener("click", () => {
  const nuevoProducto = Object.create(producto);
  nuevoProducto.nombre = document.getElementById("nombre").value;
  nuevoProducto.precio = parseFloat(document.getElementById("precio").value);
  nuevoProducto.cantidad = parseInt(document.getElementById("cantidad").value);
  carrito.agregarProducto(nuevoProducto);
  console.log(carrito.productos);
  console.log(nuevoProducto);
});

const closeCar = document.getElementById("close");
closeCar.addEventListener("click", () => {
  const total = carrito.calcularTotal();
  const totalConIVA = carrito.calcularTotalConIVA();
  console.log("Total: ", total);
  console.log("Total con IVA: ", totalConIVA);

  const subtotalInput = document.getElementById("subtotal");
  subtotalInput.value = carrito.calcularTotal();

  const totalInput = document.getElementById("total");
  totalInput.value = carrito.calcularTotalConIVA();
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
