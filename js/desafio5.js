

//traer todas las tasas vigentes de mercado del archivo tasas.json simulnado la API
formulario.onsubmit = async () => {

  // fetch a archivo interno
  const infoTasas = await fetch('./tasas.json')
  const infoTasasJson = await infoTasas.json()

}

filtrado.onsubmit = async () => {
    let info
    const credito = solicitud[3]
    
    if (credito === 'simple') {
      info = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${tasa}`
      )
    } else if (credito === 'automotriz') {
      info = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${tasa}`
      )
    } else {
      info = await fetch(
        `https://rickandmortyapi.com/api/character/?status=${tasa}`
      )
    }
}