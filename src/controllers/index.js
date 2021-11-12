import Home from '../controllers/sidebar/home.controller'
import Sondeo from '../controllers/excel/sondeo.controller'
import notFound from '../controllers/sidebar/404.controller'
import Structure from '../controllers/sidebar/structure.controller'
import Profile from '../controllers/sidebar/profile'
import Save from './admins/button.controller'

const pages = {
    home: Home,
    sondeo: Sondeo,
    structure: Structure,
    notFound: notFound,
    profile: Profile
}

const btnSave = document.getElementById('btn-save')
btnSave.addEventListener('click',Save)



export {pages};

