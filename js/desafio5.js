

//traer todas las tasas vigentes de mercado del archivo tasas.json simulnado la API
formulario.onsubmit = async () => {

  // fetch a archivo interno

fetch('/tasas.json')
then((res) => res.JSON())
then((data => {  

let tasas = getElementsByClassName('tasas')[0]

}))
  console.log(tasas)}

//   botonFiltrado.onclick = async () => {
//     let info
//     const inputValue = credito.value
//     const selectValue = tasa.value
    
//     if (inputValue === 'simple' && selectValue !== 'todos') {
//       info = await fetch("/.tasas.jason/?tasa=${inputValue})}")
      
//     } else if (inputName !== '' && selectValue === 'todos') {
//       info = await fetch(
//         `https://rickandmortyapi.com/api/character/?name=${inputValue}`
//       )
//     } else {
//       info = await fetch(
//         `https://rickandmortyapi.com/api/character/?status=${selectValue}`
//       )
//     }

// }
// }
