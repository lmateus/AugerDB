import tableInfo from "../excel/tableInfo";

export default () => {
    
    document.getElementById('root').innerHTML = ''
    tableInfo();
    
    let divContentTable = document.createElement("div");
    divContentTable.setAttribute("id", "divContentTable");

    let table = jexcel(divContentTable, { minDimensions:[1,1] ,
        toolbar:[
        {
            type: 'color',
            content: 'format_color_fill',
            k: 'background-color'
        }],
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
    
    });

    
    document.getElementById('root').appendChild(divContentTable);




}