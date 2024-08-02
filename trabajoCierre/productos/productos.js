"use strict";

    const products = [  
        { name: 'Arroz Dos Hermanos', price: 2550, stock: 6, img:"./productos/productos/producto1.webp"}, 
        { name: 'Fideos Matarazzo', price: 870, stock: 3, img:"./productos/productos/producto2.webp"},  
        { name: 'Leche Ramolac', price: 1550, stock: 25,img:"./productos/productos/producto3.png"},  
        { name: 'Hamburguesas Paty x4', price: 2900, stock: 5,img:"./productos/productos/producto4.webp" },  
        { name: 'Cerveza Palermo', price: 1500, stock: 35,img:"./productos/productos/producto5.png" },  
        { name: 'Gaseosa Cunnington Pomelo', price: 1100, stock: 50,img:"./productos/productos/producto6.webp" },
        { name: 'Jugo en polvo Arcor', price: 320, stock: 100,img:"./productos/productos/producto7.webp" },  
        { name: 'Vino Blanco Cosecha Tardia', price: 2500, stock: 15,img:"./productos/productos/producto8.webp" },  
        { name: 'Tomate x 1 kilo', price: 4500, stock: 10,img:"./productos/productos/producto9.png" },
        { name: 'Palta x unidad',price: 950, stock: 25,img:"./productos/productos/producto10.png" },  
        { name: 'Choclo x unidad',price: 350, stock: 35,img:"./productos/productos/producto11.png" },  
        { name: 'Banana x kilo',price: 3520, stock: 5,img:"./productos/productos/producto12.png" },
      ]  
      



let cart = [];  
let total = 0;  

function cargarProducts() {  
    const productsElement = document.getElementById('products');  
    productsElement.innerHTML = ''; // Limpiar el contenido actual  

    // Usando un bucle for común  
    for (let i = 0; i < products.length; i++) {  
        const product = products[i];  
        const productElement = document.createElement('div');  
        productElement.classList.add('product');
 
        productElement.innerHTML = `  
            <img class="producto-imagen" src="${product.img}"  alt="${product.name}">
            <div class="producto-detalles">
            <h2 class="producto-titulo">${product.name}</h2>  
            <p class="producto-precio">$${product.price}</p>  
            <p>Stock: ${product.stock}</p>  
            <button onclick="addToCart(${i})" ${product.stock === 0 ? 'disabled' : ''}>  
                Agregar al carrito  
            </button>  
        `;  
        productsElement.appendChild(productElement);  
    }  
}  

function addToCart(productIndex) {
    const product = products[productIndex];
    if (product.stock > 0) {
      const existingProduct = cart.find(item => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({
          name: product.name,
          price: product.price,
          img: product.img, // Agregar propiedad img
          quantity: 1
        });
      }
      total += product.price;
      product.stock -= 1;
      cargarProducts();
      renderCart();
    } else {
        alert(`No hay suficiente stock ${product.name}`);
    }
  }
     
  function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `
        <img src="${item.img}" alt="${item.name}" width="50" height="50">
        <span>${item.name} x${item.quantity} - $${item.price * item.quantity}</span>
      `;
      cartElement.appendChild(itemElement);
    }
    document.getElementById('total').textContent = `$${total}`;
  }

// Inicializar la lista de productos  
cargarProducts();

const botonComprar=document.getElementById("boton-comprar");
botonComprar.addEventListener('click',comprarProducto);


function comprarProducto(){
    alert("¡gracias por su compra!")
}
