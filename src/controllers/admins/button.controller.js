const HtmlTableToJson = require('html-table-to-json');

export default()=>{

    // Buscamos la tabla con la informacion del registro de perforacion
    let table = document.getElementById('root')
    let jsonTables = HtmlTableToJson.parse(table.childNodes[1].innerHTML);
    
    let muestras =  jsonTables.results[0]
    
    let MUESTRAS = {}

    for (let i = 0; i < muestras.length; i++){
        let muestraKey = Math.floor(Math.random() * 1000000000000);
        let muestraInfo = muestras[i]
        MUESTRAS[muestraKey] = muestraInfo
    };

    console.log(MUESTRAS);

   

    // Creamos un objeto
    let infoSondeo = {
        "ID_EXPLORACION" : "1486442648676",
          "NOMBRE_EXPLORACION" : "Prueban",
          "geometry" : {
            "coordinates" : [-74.102648, 4.613989],   
            "type" : "Point"
          },
          "layers" : {
            "10660432334091" : {
                "COOR_X" : {
                  "UNIT" : "u",
                  "VALUE" : 98679
                },
                "COOR_Y" : {
                  "UNIT" : "u",
                  "VALUE" : 101730
                },
                "DESCRIPCIoN " : "Arena limosa color gris clara",
                "ID_ESTRATO" : "10660432334091",
                "ID_EXPLORACION" : "1486442648676",
                "MUESTRAS" : {
                  "33393313057656" : {
                    "COOR_X" : {
                      "UNIT" : "u",
                      "VALUE" : 98679
                    },
                    "COOR_Y" : {
                      "UNIT" : "u",
                      "VALUE" : 101730
                    },
                    "ID_ESTRATO" : "10660432334091",
                    "ID_EXPLORACION" : "1486442648676",
                    "ID_MUESTRA" : "33393313057656",
                    "NOMBRE_ESTRATO" : "PSI2P45E13",
                    "NOMBRE_EXPLORACION" : "PSI2P45",
                    "NOMBRE_MUESTRA" : "PSI2P45E13M7",
                    "No_MUESTRA" : {
                      "UNIT" : "u",
                      "VALUE" : 7
                    },
                    "PROFUNDIDAD_MEDIA" : {
                      "UNIT" : "u",
                      "VALUE" : 40.05
                    },
                    "WN" : {
                      "UNIT" : "u",
                      "VALUE" : 20
                    }
                  },
                  "33393313057652" : {
                    "COOR_X" : {
                      "UNIT" : "u",
                      "VALUE" : 98679
                    },
                    "COOR_Y" : {
                      "UNIT" : "u",
                      "VALUE" : 101730
                    },
                    "ID_ESTRATO" : "10660432334091",
                    "ID_EXPLORACION" : "1486442648676",
                    "ID_MUESTRA" : "33393313057656",
                    "NOMBRE_ESTRATO" : "PSI2P45E13",
                    "NOMBRE_EXPLORACION" : "PSI2P45",
                    "NOMBRE_MUESTRA" : "PSI2P45E13M7",
                    "No_MUESTRA" : {
                      "UNIT" : "u",
                      "VALUE" : 7
                    },
                    "PROFUNDIDAD_MEDIA" : {
                      "UNIT" : "u",
                      "VALUE" : 10
                    },
                    "WN" : {
                      "UNIT" : "u",
                      "VALUE" : 20
                    }
                  }
                },
                "NOMBRE_ESTRATO" : "PSI2P45E13",
                "NOMBRE_EXPLORACION" : "PSI2P45",
                "No_CAPA" : {
                  "UNIT" : "u",
                  "VALUE" : 13
                },
                "TRAMO_DESDE(m)" : {
                  "UNIT" : "u",
                  "VALUE" : 0
                },
                "TRAMO_HASTA(m)" : {
                  "UNIT" : "u",
                  "VALUE" : 41.5
                },
                "USCS" : "SP"
              }
          },
          "properties" : {
            "clase" : "PERFORACION MECANICA",
            "direccion" : "Cll. 68 Cra. 82",
            "fecha" : {
              "UNIT" : "u",
              "VALUE" : 929404800000
            },
            "nivel_freatico" : {
              "UNIT" : "u",
              "VALUE" : 5
            },
            "nombre" : "CALLE 68 POR CARRERA 82",
            "title" : "Prueba1"
          },
          "type" : "Feature"

    };

    //dbRt.ref('PROYECTOS/HSDJH343467/12089904614874/123456789').set(
        //infoSondeo
      //);

};