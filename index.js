let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
    usuario = usuarioStorage;
    let mensaje = `Bienvenido nuevamente ${usuario}`
        ; alert(mensaje);
} else {
    usuario = prompt("por favor ingrese su usuario");
    alert("Bienvenido por primera vez");
    sessionStorage.setItem("usuario", usuario);
}

let img = document.getElementsByClassName("img-box");
console.log(img[0].innerHTML);
console.log(img[1].innerHTML);
console.log(img[2].innerHTML);
console.log(img[3].innerHTML);
console.log(img[4].innerHTML);
console.log(img[5].innerHTML);



const productos = [
    { id: 1, nombre: "ilustracion", precio: 1000 },
    { id: 2, nombre: "cm", precio: 1800 },
    { id: 3, nombre: "mapa estelar", precio: 700 },
    { id: 4, nombre: "sticker", precio: 500 },
    { id: 5, nombre: "filtro", precio: 900 },
    { id: 6, nombre: "ilustraciondet", precio: 1100 },
];

localStorage.setItem("productos", JSON.stringify(productos));

let productosStorage = JSON.parse(localStorage.getItem("productos"));


let nombre = prompt("Ingrese el nombre del producto");

let encontrado = productos.find(producto => producto.nombre === nombre);


if (encontrado) {
    let mensaje = `
    id: ${encontrado.id}
    nombre: ${encontrado.nombre}
    $: ${encontrado.precio}

`;

    alert(mensaje);
} else {
    alert("Producto no encontrado")
}



const nombres = productos.map((item) =>
    item.nombre);
console.log(nombres);
const precios = productos.map((item) =>
    item.precio);
console.log(precios);
const productosActualizados = productos.map((item) => {
    return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio + item.precio * 0.21,
    };
});

console.log(productosActualizados);

const total = productos.reduce((acum, item) => acum + item.precio,);
console.log(total);

let boton = document.getElementsByClassName("boton");
boton.addEventListener("click", () => console.log("click"));

