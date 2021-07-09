// Listamos las perforaciones de un proyecto
var sondeoList = document.getElementById('sondeolist')

// Dado un proyecto se listan las perforaciones

async function GetSondeos () {
  var starCountRef = await dbRt.ref('PROYECTOS/PUBLIC/2280496994730')
  starCountRef.on('value', snapshot => {
    const data = snapshot.val()
    var sondeos = Object.keys(data)

    console.log(data)
    //data[sondeos[i]]['NOMBRE_EXPLORACION']
    for (var i in sondeos){
        
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.appendChild(document.createTextNode(data[sondeos[i]]['NOMBRE_EXPLORACION']))
        li.appendChild(a)
        sondeoList.appendChild(li)
    }

  })
}

GetSondeos()
