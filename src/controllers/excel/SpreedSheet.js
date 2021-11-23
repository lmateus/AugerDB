// EXTRAEMOS INFORMACION DE LA BASE DE DATOS DE UN SONDEO CUALQUIERA
import configSheet from "./configSheet"
import tableInfo from "./tableInfo";

export default async (sondeo) => {
  document.getElementById('root').innerHTML = ''
  
  // Creamos la tabla encabezado
  tableInfo();

  // Creamos la tabla contenido
  let divContentTable = document.createElement("div");
  divContentTable.setAttribute("id", "divContentTable");
  document.getElementById('root').appendChild(divContentTable);
  
  //Hacemos la peticiion a la base de datos
  var starCountRef = await dbRt.ref('PROYECTOS/HSDJH343467/12089904614874/' + sondeo)
  starCountRef.on('value', snapshot => {
    const data = snapshot.val()
    console.log(data)
    var sortData = []
    var layers = data['layers']
    for (var sample in layers) {

      let infoSample = data['layers'][sample]
      sortData.push([
        '',
        infoSample['TRAMO_DESDE(m)']['VALUE'],
        infoSample['TRAMO_HASTA(m)']['VALUE'],
        infoSample['No_CAPA']['VALUE'],
        '',
        infoSample['DESCRIPCIoN '],
        '',
        '',
        '',
        ''
      ])
    };
    //Re ordenamos la lista
    sortData.sort(function(a,b){
      return a[1] -b[1]
    })
    configSheet(sortData);
  });

}


