import './styles/main.css'
import './styles/root.css'
import { router } from './routes/index.routes'
import Sheet from './controllers/excel/SpreedSheet'

window.addEventListener('hashchange', () => {
  router(window.location.hash)
})

window.addEventListener('hashchange', () => {
    var path = window.location.hash;
    var sondeoSplit = path.split('/');
    
    if (sondeoSplit[1] != 'sondeo'){
        //console.log()
    } else{
        //console.log(sondeoSplit.length)
        if (sondeoSplit.length < 3){
            //console.log()
        } else{
            var sondeo = sondeoSplit[2]
            Sheet(sondeo);
        }
    }
    
  });

  // El anterior codigo deberia optimizarse
