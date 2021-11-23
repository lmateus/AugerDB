export default () =>{

  let divHeaderTable = document.createElement("div");
  divHeaderTable.setAttribute("id", "divHeadTable");
  
  divHeaderTable.innerHTML = `
  <div class="row">
          <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td bgcolor="F3F3F3">Ubicacion</td>
                      <td contenteditable="true" bgcolor=#FFFFFF colspan="5" id="logLocation"></td>
                    </tr>
                    <tr>
                    <td bgcolor="F3F3F3">Nombre del sondeo</td>
                    <td contenteditable="true" bgcolor="FFFFFF" id="nameLog"></td>
                    <td bgcolor="F3F3F3">Norte</td>
                    <td contenteditable="true" bgcolor="FFFFFF" id="north"></td>
                    <td bgcolor="F3F3F3">Fecha</td>
                    <td contenteditable="true" bgcolor="FFFFFF" id="date"></td>
                    </tr>
                    <tr>
                      <td bgcolor="F3F3F3">Nivel freático (m)</td>
                      <td contenteditable="true" bgcolor="FFFFFF" id="levelF"></td>
                      <td bgcolor="F3F3F3">Este</td>
                      <td contenteditable="true" bgcolor="FFFFFF" id="east"></td>
                      <td bgcolor="F3F3F3">Equipo</td>
                      <td contenteditable="true" bgcolor="FFFFFF" id="driller"></td>
                    </tr>
                    <tr>
                      <td bgcolor="F3F3F3">Tipo de perforación</td>
                      <td contenteditable="true" bgcolor="FFFFFF" colspan="5" id="typeLog"></td>
                      
                      
                    </tr>
                  </tbody>
          </table>
    </div>
    `
  document.getElementById('root').appendChild(divHeaderTable);

}

