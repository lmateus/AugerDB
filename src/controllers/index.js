import Home from './home.controller'
import Sondeo from './sondeo.controller'
import notFound from './404.controller'
import Structure from './structure.controller'

const pages = {
    home: Home,
    sondeo: Sondeo,
    structure: Structure,
    notFound: notFound
}

export {pages};