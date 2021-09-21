import Home from './home.controller'
import Sondeo from './sondeo.controller'
import notFound from './404.controller'

const pages = {
    home: Home,
    sondeo: Sondeo,
    notFound: notFound
}

export {pages};