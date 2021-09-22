// EXTRAEMOS INFORMACION DE LA BASE DE DATOS DE UN SONDEO CUALQUIERA

export default async () => {

  console.log('lo estoy haciendo')
var starCountRef = await dbRt.ref('PROYECTOS/471808842170/5467190946839/38360578691279')

starCountRef.on('value', snapshot => {
  const data = snapshot.val()
  var sortData = []
  for (var sample in data['layers']) {
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
  };
  sortData.sort()

  jexcel(document.getElementById('spreadsheet'), {
    data: sortData,
    columns: [
      { type: 'numeric', title: 'Inicial', width: 50, decimal: ','},
      { type: 'numeric', title: 'Final', width: 50, decimal: ','},
      { type: 'numeric', title: 'Muestra', width: 80},
      { type: 'text', title: 'Tipo', width: 40 },
      { type: 'text', title: 'Descripcion', width: 500},
      { type: 'text', title: 'SPT', width: 40 },
      { type: 'text', title: 'RPI', width: 40 },
      { type: 'text', title: 'RQD', width: 40 },
      { type: 'text', title: 'Recobro', width: 70 },
      { type: 'text', title: 'Nivel freático', width: 100 },
      { type: 'image', title: 'Photo',width: 120 }
    ],

    nestedHeaders: [
      [
        {
          title: 'Profundidad',
          colspan: '2'
        },
        {
          title: 'Información general',
          colspan: '9'
        }
      ]
    ]
  })
})
};
