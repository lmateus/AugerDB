import './styles/main.css';
import {router} from './routes/index.routes'
import Sheet from './controllers/SpreedSheet'

window.addEventListener('hashchange',()=>{
    router(window.location.hash)
})

Sheet();