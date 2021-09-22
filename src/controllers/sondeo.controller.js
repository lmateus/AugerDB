import Sheet from './SpreedSheet'

var path = window.location.hash
console.log(path.split('/'))

// Listamos las perforaciones de un proyecto
var sondeolist = document.getElementById('sondeolist')

export default async () => {
  sondeolist.innerHTML = ''
  var starCountRef = await dbRt.ref('PROYECTOS/PUBLIC/2280496994730')
  starCountRef.on('value', snapshot => {
    const data = snapshot.val()
    var sondeos = Object.keys(data)
    // Agregamos los sondeos omitiendo ID_ESTRUCTURA, NOMBRE_ESTRUCTURA,reseverdGeometry
    sondeos.forEach(element => {
      if (
        element === 'ID_ESTRUCTURA' ||
        element === 'NOMBRE_ESTRUCTURA' ||
        element === 'reservedGeometry'
      ) {
        sondeolist.innerHTML += ''
      } else {
        sondeolist.innerHTML += `
                <li>
                    <a href=#/sondeo/${element}>${data[element]['NOMBRE_EXPLORACION']}</a>
                </li>
            `
      }
    })
  })
}
