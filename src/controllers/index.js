import Home from '../controllers/sidebar/home.controller'
import Sondeo from '../controllers/excel/sondeo.controller'
import notFound from '../controllers/sidebar/404.controller'
import Structure from '../controllers/sidebar/structure.controller'
import Profile from '../controllers/sidebar/profile'
import Save from './admins/button.controller'
import Create from './admins/newLog'

const pages = {
    home: Home,
    sondeo: Sondeo,
    structure: Structure,
    notFound: notFound,
    profile: Profile
}
// Evento para guardar el sondeo
const btnSave = document.getElementById('btn-save')
btnSave.addEventListener('click',Save)
// Evento para crear el sondeo
const btnCreate = document.getElementById('btn-newLog')
btnCreate.addEventListener('click',Create)



export {pages};

