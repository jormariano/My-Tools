/* 
localStorage: setItem() para configurar un valor. en ll cual necesito una key y un valor que debe ser una cadena de caracteres 
.getItem() para obtenerlo
Todo se transforma en string

JSON: Es un string con formato especial. Los objetos hay que pasarlos por JSON
*/

import './App.css'

const App = () => {

  localStorage.setItem("objetivo1", "programar");
  localStorage.setItem("objetivo2", 10000);
  localStorage.setItem("objetivo3", true);

  let verObjetivos = localStorage.getItem("objetivo2");
  console.log(verObjetivos, typeof verObjetivos);

  const objetivos = {
    nombre: "FrontEnd",
    tiempo: 2,
    plazo: "meses"
  }

  // 1- Se pasa el objeto a JSON
  const objetivosJSON = JSON.stringify(objetivos);

  // 2- Se guarda el objeto en el localStorage
  localStorage.setItem("objetivos", objetivosJSON);

  // 3- Si se quiere recuperar el objeto, se hace lo contrario. Se recupera el JSON del localStorage
  const metaJSON = localStorage.getItem("objetivos");

  // 4- Se pasa JSON a objeto de nuevo
  const metaObjeto = JSON.parse(metaJSON);
  console.log(metaObjeto);

  return (
    <div>App</div>
  )
}

export default App
