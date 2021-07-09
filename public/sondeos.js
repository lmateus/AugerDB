// Listamos las perforaciones de un proyecto
var sondeoList = document.getElementById('sondeolist')


async function GetSondeos () {
  var starCountRef = await dbRt.ref('PROYECTOS/471808842170/5467190946839')
  starCountRef.on('value', snapshot => {
    const data = snapshot.val()
    var sondeos = Object.keys(data)

    console.log(data)

    for (var i in sondeos){
        
        var li = document.createElement('li')
        li.appendChild(document.createTextNode(data[sondeos[i]]['NOMBRE_EXPLORACION']))
        sondeoList.appendChild(li)
    }

  })
}

GetSondeos()
