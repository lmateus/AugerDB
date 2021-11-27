export default (data) => {

  
    jexcel(document.getElementById('divContentTable'), {
        data: data,

        toolbar:[
          {
              type: 'color',
              content: 'format_color_fill',
              k: 'background-color'
          },
      ],
        columns: [
          { type: 'numeric', title: 'Capa', width: 50, decimal: ',' },
          { type: 'numeric', title: 'Inicial', width: 50, decimal: ',' },
          { type: 'numeric', title: 'Final', width: 50, decimal: ',' },
          { type: 'numeric', title: 'Muestra', width: 80 },
          { type: 'text', title: 'Tipo', width: 40 },
          { type: 'text', title: 'Descripcion', width: 500 },
          { type: 'text', title: 'SPT', width: 40 },
          { type: 'text', title: 'RPI', width: 40 },
          { type: 'text', title: 'RQD', width: 40 },
          { type: 'text', title: 'Recobro', width: 70 }
        ]

      })
}

