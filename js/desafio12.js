
const answerS = "S"
const answerN = "N"

do{
    let nombre = prompt("Escribe tu nombre")
    let respuesta = prompt("¿Sabes programar en Java (S/N)?")
    if(respuesta == answerS){
        alert(nombre + ", estas contratado")
        valor = false}
    else if(respuesta == answerN){
        alert(nombre + ",te invito a que te inscribas al curso en CODERHOUSE")
        valor = false}
    else {
        alert(nombre + ",por favor indica un valor valido")
        valor = true}
  }while(valor)
    //(respuesta !== answerN) || (respuesta == answerS)) 
    
alert("Gracias por tu registro")