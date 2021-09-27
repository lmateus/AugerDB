export default (data) => {

    jexcel(document.getElementById('root'), {
        data: data,
        columns: [
          { type: 'numeric', title: 'Inicial', width: 50, decimal: ',' },
          { type: 'numeric', title: 'Final', width: 50, decimal: ',' },
          { type: 'numeric', title: 'Muestra', width: 80 },
          { type: 'text', title: 'Tipo', width: 40 },
          { type: 'text', title: 'Descripcion', width: 500 },
          { type: 'text', title: 'SPT', width: 40 },
          { type: 'text', title: 'RPI', width: 40 },
          { type: 'text', title: 'RQD', width: 40 },
          { type: 'text', title: 'Recobro', width: 70 },
          { type: 'text', title: 'Nivel freático', width: 100 },
          { type: 'image', title: 'Photo', width: 120 }
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
}

