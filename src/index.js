import './styles/main.css';
import {router} from './routes/index.routes'

window.addEventListener('hashchange',()=>{
    router(window.location.hash)
})