//DEFINICION DEL CASO
//1. Desarrollar el flujo para solicitar un credito; simple, hipotecario o automotriz y evaluar el riesgo
//2. Llenar una solicitu de credito con datos generales e ingresos
//3. Indicar monto y plazo
//4. Evaluar el riesgo comparando ingreso vs credito solicitado 
//5. SI se acepto - alamcenar la solicitu en solicitudes
//5. NO se acepto - avisar de rechazo 

//PROCESO DE DESARROLLO
//1. Definir un objeto de tipo array con los tipos de credito que existen y cada uno con un array de tres esquemas
//2. Preguntarle al cliente que tipo de credito quiere
//3. Todas las solicitudes se guardan y se evaluan con el metodo autorizado
//4. Definir una clase "Solictudes" con el objeto de la solicitud de credito y la funcion/metodo de autorizar
//5. De ser aprobada =>Funcion (agregar la solicitud a la clase.objeto)


//ARRAY: El tipoDeCredito son los tipos de credito que existen y que eligira el cliente 

tiposDeCredito = [
    [
      {
        tipo: 'Simple',
        esquema: [
          {
            plazo: 12,
            interes: 60,
          },
          {
            plazo: 24,
            interes: 40,
          },
          {
            plazo: 36,
            interes: 30,
          },
        ],
      },
      {
          tipo: 'Hipotecario',
          esquema: [
          {
            plazo: 120,
            interes: 15,
          },
          {
            plazo: 180,
            interes: 12,
          },
          {
            plazo: 240,
            interes: 10,
          },
        ],
      },
      {
          tipo: 'Automotriz',
          esquema: [
          {
            plazo: 12,
            interes: 20,
          },
          {
            plazo: 24,
            interes: 18,
          },
          {
            plazo: 36,
            interes: 15,
          },
        ],
      },
  
  ]
  ]
  
  
  //Después de haberle preguntado al cliente en el Index, leemos el formularo del storage
const solicitud = []
const div1 = document.querySelector('.div1')
const formulario = document.getElementById('form')
formulario.onsubmit = (e)=>{
    e.preventDefault()
    Array.from(e.target.children).forEach(elemento=>{
      //En el array solicitud cargo todos los elementos que lei del cliente 
        solicitud.push(elemento.value)
    })
}
//Es la informacion de la solicitud del cliente

const nombre  = solicitud[0]
const monto   = solicitud[1]
const ingreso = solicitud[2]
const credito = solicitud[3]
const plazo   = solicitud[4]

console.log(nombre)

  // Las solicitudes son todas las que han solicitado los clientes 

  class Solicitudes {
    constructor(nombre, monto, ingreso, credito, plazo) {
      this.nombre = nombre
      this.monto = monto
      this.ingreso = ingreso
      this.credito = credito
      this.plazo = plazo
    }
    //Con idexof busco el interes que aplica de acuerdo al credito solicitado en el array tiposDeCredito
      // indice1 = tiposDeCredito.indexOf(this.credito)
      // indice2 = tiposDeCredito[indice1].esquema.indexOf(plazo)
      // intereporaplicar = tiposDeCredito[indice1].esquema.interes[this.indice2]



      // encontrar el interes de acuerdo al plazo elegido
      autorizado(){
          pagomensual = (this.monto*(1+interesporaplicar/100)/this.plazo)
          if (pagomensual>=(this.ingreso*0.3)){
            return false}
          else {return true}
          }
      //alert("El credito fue autorizado ? $autorizado()")
      if (autorizado){
          Swal.fire({
            icon: 'success',
            title: 'Oops... lo sentimos mucho !!',
            text: 'Su crédito no fue autorizado!',})
          }
      else (){
          Swal.fire({
              icon: 'error',
              title: 'Oops... lo sentimos mucho !!',
              text: 'Su crédito no fue autorizado!',})
          }
      }