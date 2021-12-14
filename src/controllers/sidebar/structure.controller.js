// Listamos las perforaciones de un proyecto
var structureList = document.getElementById('structurlist')

export default async () => {
  structureList.innerHTML = ''

  var starCountRef = await dbRt.ref('PROYECTOS/HSDJH343467/')
  starCountRef.on('value', snapshot => {
    const data = snapshot.val()

    var structurs = Object.keys(data)
    structurs.forEach(element => {
      
      if (element === 'NAME' || element == 'USERS') {
        ;('')
      } else {
        structureList.innerHTML += `
            <li>
                <a href=#/structur/${element}>${data[element]['NOMBRE_ESTRUCTURA']}</a>
            </li>
        `
      }
    })
  })
}
