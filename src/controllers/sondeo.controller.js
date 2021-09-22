// Listamos las perforaciones de un proyecto
var sondeolist = document.getElementById('sondeolist')

export default async () => {
    
    sondeolist.innerHTML = '';

    var starCountRef = await dbRt.ref('PROYECTOS/PUBLIC/2280496994730');
    starCountRef.on('value', snapshot => {
        const data = snapshot.val()
        var sondeos = Object.keys(data)
        
        sondeos.forEach(element => {
            sondeolist.innerHTML += `
            <li>
                <a href=#/sondeo/${element}>${data[element]['NOMBRE_EXPLORACION']}</a>
            </li>
        `
        });
      })

}
