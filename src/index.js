import './styles/main.css'
import { router } from './routes/index.routes'
import Sheet from './controllers/SpreedSheet'

window.addEventListener('hashchange', () => {
  router(window.location.hash)
})


window.addEventListener('hashchange', () => {
    var path = window.location.hash;
    var sondeoSplit = path.split('/');
    
    if (sondeoSplit[1] != 'sondeo'){
        console.log('no')
    } else{
        console.log(sondeoSplit.length)
        if (sondeoSplit.length < 3){
            console.log('no2')
        } else{
            var sondeo = sondeoSplit[2]
            Sheet(sondeo);
        }
    }
    
  });

  // El anterior codigo deberia optimizarse
