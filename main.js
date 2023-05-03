const developer = ("Valentin Martinez")

let cursoJavaScript = ("PreEntrega1Martinez")

console.log(developer,cursoJavaScript)



let nombreIngresado = prompt("Ingresar nombre");

let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("BIenvenido/a" + "\nNombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}


alert("Seleccione su oferta, de no querer ninguna presione 0")
let seleccionarProducto = Number(prompt("Ofertas 1-Seda morada $2500 2-Seda azul $3000 3-Lino multicolor $2800"))
let seleccionarCantidad;
let total = 0

function cantidad (cant,precio) {
    return cant * precio
}

while (seleccionarProducto != 0){
    switch(seleccionarProducto){
        case 1:
            seleccionarCantidad= Number(prompt("el producto elegido fue Seda morada, indique la cantidad"))
                total += cantidad (seleccionarCantidad, 2500)
            break;

        case 2:
            seleccionarCantidad= Number(prompt("el producto elegido fue Seda azul, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 3000)
            break;
            
        case 3:
            seleccionarCantidad= Number(prompt("el producto elegido fue Lino multicolor, indique la cantidad"))
                total += cantidad(seleccionarCantidad, 2800)
            break;
    }
    seleccionarProducto = Number(prompt("Ofertas 1-Seda morada $2500 2-Seda azul $3000 3-Lino multicolor $2800"))
}

alert("el total de la compra fue: " + total)


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