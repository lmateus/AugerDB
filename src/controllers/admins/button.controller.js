const HtmlTableToJson = require('html-table-to-json')

export default () => {
  // Buscamos la tabla con la informacion del registro de perforacion
  let table = document.getElementById('divContentTable')
  // Herramienta para convertir tabla a JSON
  let jsonTables = HtmlTableToJson.parse(table.childNodes[1].innerHTML)
  let muestras = jsonTables.results[0]
  /* La libreria JEXCEL permite extraer los atributos de la tabla pero no fue posible usarla
    por lo tanto es necesario extraer la informacion de la tabla de una manera mas ruda
    
  La siquiente linea convierte la tabla en formato JEXCEL pero cambia la edicion de la tabla
  cuando esta es usada */
  //let nuevaTabla = jspreadsheet(table.childNodes[1].childNodes[0]);
  //console.log(nuevaTabla.getStyle())

  let tableElement = table.childNodes[1].childNodes[0].childNodes[2]//Ubicacion de la tabla con rows
  let arrayTable = tableElement.rows
  let MUESTRAS = {}

  let colores = []
  // Recorremos la tabla solo para saber el estilo de la columna Capa y agregamos el color del bg al objeto
  for (let row = 0; row < arrayTable.length; row++) {
    if (arrayTable[row].childNodes[1].style['background-color'] === '') {
      arrayTable[row].childNodes[1].style['background-color'] =
        'rgb(255, 255, 255)'
    };
    colores.push(arrayTable[row].childNodes[1].style['background-color'])
    // Creamos una clave aleatoria para la clave de la muestra
    let muestraKey = Math.floor(Math.random() * 1000000000000)
    let muestraInfo = muestras[row]
    // Creamos un objeto con la info por muestra
    MUESTRAS[muestraKey] = muestraInfo
    // Color de la primera celda de cada fila, relacionada con la columna CAPA
    let cellColor = arrayTable[row].childNodes[1].style['background-color']
    MUESTRAS[muestraKey]['color'] = cellColor
  };
  /*Ahora necesitamos agrupar las muestras que tienen el mismo color para 
  obtener los estratos*/
  const muestrasArray = Object.keys(MUESTRAS)
  // Eliminamos los colores repetidos
  let uniqueColores= Array.from(new Set(colores));

  // Creamos un objeto layers cada color identificado es un estrato
  let Layers = {}

  for (let i in uniqueColores){
    let colorEstrato = uniqueColores[i];
    let estrato = {}
    let strataDepth = []
    for (let j in muestrasArray){
      let colorMuestra = MUESTRAS[muestrasArray[j]]['color'];
        if (colorEstrato === colorMuestra){
        let randomMuestra = Math.floor(Math.random() * 1000000000000)
        estrato[randomMuestra] = MUESTRAS[muestrasArray[j]]  
        // Comparamos las profundidades iniciales y finales 
        let sampleSup =  parseFloat(MUESTRAS[muestrasArray[j]]['Inicial']);
        let sampleInf =  parseFloat(MUESTRAS[muestrasArray[j]]['Final']);
        strataDepth.push(sampleSup,sampleInf)
      };

    
    };
    let strataStart = Math.min.apply(null,strataDepth);
    let strataEnd = Math.max.apply(null,strataDepth);
    
    let randomEstrato = Math.floor(Math.random() * 1000000000000)
    Layers[randomEstrato] = estrato
    Layers[randomEstrato]["TRAMO_DESDE(m)"] = {"UNIT":"m","VALUE":strataStart}
    Layers[randomEstrato]["TRAMO_HASTA(m)"] = {"UNIT":"m","VALUE":strataEnd}
    Layers[randomEstrato]["DESCRIPCIoN "] = "Arcilla limosa de color gris"
    Layers[randomEstrato]["NOMBRE_ESTRATO"] = Math.floor(Math.random() * 1000000000000)
    
  };

  const idHeadTable = ["logLocation","nameLog","north","date","levelF","east","driller","typeLog"]
  let infoLog = {}
  idHeadTable.forEach(element => {
    infoLog[element] = document.getElementById(element).textContent
  });
    
  // Creamos un objeto sondeo
  let infoSondeo = {
    ID_EXPLORACION: '1486442648676',
    NOMBRE_EXPLORACION: infoLog.nameLog,
    geometry: {
      coordinates: [infoLog.east, infoLog.north],
      type: 'Point'
    },
    layers: Layers,
    properties: {
      clase: infoLog.typeLog,
      direccion: infoLog.logLocation,
      fecha: {
        UNIT: 'u',
        VALUE: infoLog.date
      },
      nivel_freatico: {
        UNIT: 'u',
        VALUE: infoLog.levelF
      },
      nombre: infoLog.nameLog,
      title: infoLog.nameLog
    },
    type: 'Feature'
  }

  console.log(infoSondeo)

  dbRt.ref('PROYECTOS/HSDJH343467/12089904614874/123456789').set(
  infoSondeo);
}
