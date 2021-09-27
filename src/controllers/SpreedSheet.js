// EXTRAEMOS INFORMACION DE LA BASE DE DATOS DE UN SONDEO CUALQUIERA
import configSheet from "./configSheet"

export default async (sondeo) => {
  document.getElementById('root').innerHTML = ''

  var starCountRef = await dbRt.ref('PROYECTOS/PUBLIC/2280496994730/' + sondeo)

  starCountRef.on('value', snapshot => {
    const data = snapshot.val()
    var sortData = []
    var layers = data['layers']

    for (var sample in layers) {
      sortData.push([
        data['layers'][sample]['TRAMO_DESDE(m)']['VALUE'],
        data['layers'][sample]['TRAMO_HASTA(m)']['VALUE'],
        data['layers'][sample]['No_CAPA']['VALUE'],
        '',
        data['layers'][sample]['DESCRIPCIoN '],
        '',
        '',
        '',
        '',
        ''
      ])
    }
    sortData.sort()
    configSheet(sortData);
  })
}
