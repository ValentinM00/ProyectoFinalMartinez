const developer = ("Valentin Martinez")

let cursoJavaScript = ("PreEntrega3Martinez")

console.log(developer,cursoJavaScript)



// let nombreIngresado = prompt("Ingresar nombre");

// let apellidoIngresado = prompt("Ingresar apellido");

// if((nombreIngresado !="") && (apellidoIngresado !="")){
//     alert("BIenvenido/a" + "\nNombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
// }else{
//     alert("Error: Ingresar nombre y apellido");
// }


// alert("Seleccione su oferta, de no querer ninguna presione 0")
// let seleccionarProducto = Number(prompt("Ofertas 1-Seda morada $2500 2-Seda azul $3000 3-Lino multicolor $2800"))
// let seleccionarCantidad;
// let total = 0

// function cantidad (cant,precio) {
//     return cant * precio
// }

// while (seleccionarProducto != 0){
//     switch(seleccionarProducto){
//         case 1:
//             seleccionarCantidad= Number(prompt("el producto elegido fue Seda violeta, indique la cantidad"))
//                 total += cantidad (seleccionarCantidad, 2500)
//             break;

//         case 2:
//             seleccionarCantidad= Number(prompt("el producto elegido fue Seda azul, indique la cantidad"))
//                 total += cantidad(seleccionarCantidad, 3000)
//             break;
            
//         case 3:
//             seleccionarCantidad= Number(prompt("el producto elegido fue Lino multicolor, indique la cantidad"))
//                 total += cantidad(seleccionarCantidad, 2800)
//             break;
//     }
//     seleccionarProducto = Number(prompt("Ofertas 1-Seda morada $2500 2-Seda azul $3000 3-Lino multicolor $2800"))
// }

// alert("el total de la compra fue: " + total)


function dueños (nombre, apellido, edad, funcion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.funcion = funcion;
}

const dueño = new dueños ("Javier", "Lonardi", 46, "administrativo")
const dueña = new dueños ("Mariela", "Benitez", 38, "ventas")

console.log(dueño, dueña)

const lomasvendido = [
    {
        nombre: "lino vintage",
        precio: 1200
    },
    {
        nombre: "poliester wild colores claros",
        precio: 1000
    },
    {
        nombre: "poliester wild colores oscuros",
        precio: 1100
    },
    {
        nombre: "poliester colores claros",
        precio: 900
    },
    {
        nombre: "poliester colores oscuros",
        precio: 950
    }
]

const solouna = lomasvendido.find ((tela) => tela.nombre === "lino vintage")
const varias = lomasvendido.filter ((telas) => telas.nombre.includes ("oscuros"))
const dinero = lomasvendido.filter ((caro) => caro.precio >= 1000)

console.log(solouna)
console.log(varias)
console.log(dinero)



const oferjs = document.getElementById("oferjs")
oferjs.innerHTML = '<b>!!!Lo mejor en telas, lo mejor para vos!!!</b>'


const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

cards.addEventListener('click', e => {
    addCarrito(e)
})

items.addEventListener('click', e => {
    btnAccion(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        // console.log (data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.getElementById('precioscards').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}


const addCarrito = e => {
    // console.log(e.target)
    // console.log(e.target.classList.contains('btn-dark'))
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    // console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()
}

const pintarCarrito = () => {
    // console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">todavia nada? seguro?</th>
        `
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc,{ cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = e => {
    if (e.target.classList.contains('btn-info')){
        // console.log(carrito[e.target.dataset.id])
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }

    e.stopPropagation()
}










