// EXTRAEMOS INFORMACION DE LA BASE DE DATOS DE UN SONDEO CUALQUIERA
import configSheet from "./configSheet"
import tableInfo from "./tableInfo";

export default async (IdSondeo) => {

  // Guardemos el ID del sondeo en el local storage
  localStorage.setItem('IdSondeoLS', IdSondeo);

  
  document.getElementById('root').innerHTML = ''
  
  // Creamos la tabla encabezado
  tableInfo();

  // Creamos la tabla contenido
  let divContentTable = document.createElement("div");
  divContentTable.setAttribute("id", "divContentTable");
  document.getElementById('root').appendChild(divContentTable);
  
  //Hacemos la peticiion a la base de datos
  var starCountRef = await dbRt.ref('PROYECTOS/HSDJH343467/12089904614874/' + IdSondeo)
  starCountRef.on('value', snapshot => {
    const data = snapshot.val()

    let layersLog = Object.keys(data['layers']);
    var sortData = []

    for (let i in layersLog){
      let sampleStrata = data['layers'][layersLog[i]]['MUESTRAS'];
        let samplesList = Object.keys(sampleStrata);
        for (let j in samplesList){
          let infoSample = sampleStrata[samplesList[j]]
          sortData.push([
            '',
            infoSample['Inicial'],
            infoSample['Final'],
            infoSample['Muestra'],
            '',
            infoSample['Descripcion'],
            '',
            '',
            '',
            ''
          ])
        }
    };

    const propLog = data['properties']
    // Agregamos la informacion de las propiedades
    document.getElementById('logLocation').innerText = propLog['direccion']
    document.getElementById('nameLog').innerText = propLog['nombre']
    document.getElementById('levelF').innerText = propLog['nivel_freatico']['VALUE']
    document.getElementById('typeLog').innerText = propLog['clase']
    document.getElementById('date').innerText = propLog['fecha']['VALUE']

    // Agregamos a informacion de las coordenadas
    const coordinates = data['geometry']['coordinates'];
    const east = coordinates[0]
    const north = coordinates[1]

    document.getElementById('north').innerText = north;
    document.getElementById('east').innerText = east;

    /* 
    // Lo siguiente funcionaba cuando se pedia informacion de estratos y no de muestras
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
    };*/
    //Re ordenamos la lista
    sortData.sort(function(a,b){
      return a[1] -b[1]
    })
    configSheet(sortData);
  });
  return(IdSondeo);
}


