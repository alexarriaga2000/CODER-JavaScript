//Calcular el precio final de una compra de medicinas


let cantidadA = 0
let cantidadB = 0
let cantidadC = 0
let subtotalA = 0
let subtotalB = 0
let subtotalC = 0
const preciounitarioA = 100
const preciounitarioB = 200
const preciounitarioC = 300
let seguirComprando = true


while(seguirComprando){
        let medicina = prompt("Elige la medicina que deseas comprar escribiendo una letra: A, B o C")
        if (medicina === "A"){
            let cantidad = parseInt(prompt("Cuantas cajas deseas comprar de A?"))
            cantidadA = cantidadA + cantidad
            subtotalA = subtotalA + preciounitarioA * cantidadA}
        else if (medicina === "B"){
            let cantidad = parseInt(prompt("Cuantas cajas deseas comprar de B?"))
            cantidadB = cantidadB + cantidad
            subtotalB = subtotalB + preciounitarioB * cantidadB}
        else if (medicina === "C"){
            let cantidad = parseInt(prompt("Cuantas cajas deseas comprar de C?"))
            cantidad = cantidadC + cantidad
            subtotalC = subtotalC + preciounitarioC * cantidadC}
        else {alert("Indica un producto valido")
            seguirComprando = "S"}

        let comprarMas = prompt("Deseas seguir comprando S/N?")
        if (comprarMas = "N"){seguirComprando = false}
 }
          


alert("Tu carrito es:")
alert(cantidadA +" de medicina A con un subtotal de " + subtotalA)
alert(cantidadB +" de medicina B con un subtotal de " + subtotalB)
alert(cantidadC +" de medicina C con un subtotal de " + subtotalB)
alert("El TOTAL de compra es $:" +subtotalA + subtotalB + subtotalC)
