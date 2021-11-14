// EXTRAEMOS INFORMACION DE LA BASE DE DATOS DE UN SONDEO CUALQUIERA
import configSheet from "./configSheet"

export default async (sondeo) => {
  document.getElementById('root').innerHTML = ''

  var starCountRef = await dbRt.ref('PROYECTOS/HSDJH343467/12089904614874/' + sondeo)

  starCountRef.on('value', snapshot => {
    const data = snapshot.val()

    var sortData = []
    var layers = data['layers']

    for (var sample in layers) {
      sortData.push([
        '',
        parseFloat(data['layers'][sample]['TRAMO_DESDE(m)']['VALUE']),
        parseFloat(data['layers'][sample]['TRAMO_HASTA(m)']['VALUE']),
        parseFloat(data['layers'][sample]['No_CAPA']['VALUE']),
        '',
        data['layers'][sample]['DESCRIPCIoN '],
        '',
        '',
        '',
        ''
      ])
    };
    //console.log(sortData.sort());
    configSheet(sortData);
  });

}


