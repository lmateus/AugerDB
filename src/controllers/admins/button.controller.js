const HtmlTableToJson = require('html-table-to-json')

export default () => {
  // Buscamos la tabla con la informacion del registro de perforacion
  let table = document.getElementById('root')
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
  
  const muestrasArray = Object.keys(MUESTRAS)
  // Eliminamos los colores repetidos
  let uniqueColores= Array.from(new Set(colores));

  // Creamos un objeto layers cada color identificado es un estrato
  let Layers = {}

  for (let i in uniqueColores){
    let colorEstrato = uniqueColores[i];
    //Layers[i] = i

    let estrato1 = {}

    for (let j in muestrasArray){
      let colorMuestra = MUESTRAS[muestrasArray[j]]['color'];

      if (colorEstrato === colorMuestra){
        //console.log(MUESTRAS[muestrasArray[j]])  
        console.log(i)
        estrato1[j] = MUESTRAS[muestrasArray[j]]   

      };
      
    };
    
    Layers[i] = estrato1
    
  };

  console.log(Layers)
  

  
  

  /*Ahora necesitamos agrupar las muestras que tienen el mismo color para 
  obtener los estratos*/



  // Creamos un objeto sondeo
  let infoSondeo = {
    ID_EXPLORACION: '1486442648676',
    NOMBRE_EXPLORACION: 'Prueban',
    geometry: {
      coordinates: [-74.102648, 4.613989],
      type: 'Point'
    },
    layers: {
      '10660432334091': {
        COOR_X: {
          UNIT: 'u',
          VALUE: 98679
        },
        COOR_Y: {
          UNIT: 'u',
          VALUE: 101730
        },
        'DESCRIPCIoN ': 'Arena limosa color gris clara',
        ID_ESTRATO: '10660432334091',
        ID_EXPLORACION: '1486442648676',
        MUESTRAS: {
          '33393313057656': {
            COOR_X: {
              UNIT: 'u',
              VALUE: 98679
            },
            COOR_Y: {
              UNIT: 'u',
              VALUE: 101730
            },
            ID_ESTRATO: '10660432334091',
            ID_EXPLORACION: '1486442648676',
            ID_MUESTRA: '33393313057656',
            NOMBRE_ESTRATO: 'PSI2P45E13',
            NOMBRE_EXPLORACION: 'PSI2P45',
            NOMBRE_MUESTRA: 'PSI2P45E13M7',
            No_MUESTRA: {
              UNIT: 'u',
              VALUE: 7
            },
            PROFUNDIDAD_MEDIA: {
              UNIT: 'u',
              VALUE: 40.05
            },
            WN: {
              UNIT: 'u',
              VALUE: 20
            }
          },
          '33393313057652': {
            COOR_X: {
              UNIT: 'u',
              VALUE: 98679
            },
            COOR_Y: {
              UNIT: 'u',
              VALUE: 101730
            },
            ID_ESTRATO: '10660432334091',
            ID_EXPLORACION: '1486442648676',
            ID_MUESTRA: '33393313057656',
            NOMBRE_ESTRATO: 'PSI2P45E13',
            NOMBRE_EXPLORACION: 'PSI2P45',
            NOMBRE_MUESTRA: 'PSI2P45E13M7',
            No_MUESTRA: {
              UNIT: 'u',
              VALUE: 7
            },
            PROFUNDIDAD_MEDIA: {
              UNIT: 'u',
              VALUE: 10
            },
            WN: {
              UNIT: 'u',
              VALUE: 20
            }
          }
        },
        NOMBRE_ESTRATO: 'PSI2P45E13',
        NOMBRE_EXPLORACION: 'PSI2P45',
        No_CAPA: {
          UNIT: 'u',
          VALUE: 13
        },
        'TRAMO_DESDE(m)': {
          UNIT: 'u',
          VALUE: 0
        },
        'TRAMO_HASTA(m)': {
          UNIT: 'u',
          VALUE: 41.5
        },
        USCS: 'SP'
      }
    },
    properties: {
      clase: 'PERFORACION MECANICA',
      direccion: 'Cll. 68 Cra. 82',
      fecha: {
        UNIT: 'u',
        VALUE: 929404800000
      },
      nivel_freatico: {
        UNIT: 'u',
        VALUE: 5
      },
      nombre: 'CALLE 68 POR CARRERA 82',
      title: 'Prueba1'
    },
    type: 'Feature'
  }

  //dbRt.ref('PROYECTOS/HSDJH343467/12089904614874/123456789').set(
  //infoSondeo
  //);
}
