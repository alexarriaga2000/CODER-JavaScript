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
      tipo: 'simple',
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
        tipo: 'hipotecario',
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
        tipo: 'automotriz',
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

// Las solicitudes son todas las que han solicitado los clientes 

let credito = [] //[tipo, [esquema.plazo, esquema.interes]]

class Solicitudes {
  constructor(nombre, monto, ingreso, credito) {
    this.nombre = nombre
    this.monto = monto
    this.ingreso = ingreso
    this.credito = credito
  }
    autorizado(){
        pagomensual = this.monto/this.credito.plazo*this.tipodecredito.interes
        if (pagomensual>=(this.ingreso*0.3)){
          return false}
        else {return true}
        }
    }

//Preguntarle al cliente que tipo de credito quiere, monto y plazo


//Se instancia la solicitud como una nueva de la clase Solicitudes 
const solicitud = new Solicitudes(nombre,monto,ingreso,credito)

