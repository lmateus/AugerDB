import {pages} from '../controllers/index'

let content = document.getElementById('root');

const router = (route) =>{
    content.innerHTML = '';
    switch(route){
        case '#/home':{
            return(content.appendChild(pages.home()));
        } 
        case '#/users':
            return(console.log('users'))
        case '#/structurs':
            return(console.log('structures'))
        case '#/sondeo':
            return(console.log('sondeo'))
        case '#/profiles':
             return(console.log('profiles'))
        default:{
            return(content.appendChild(pages.notFound()));
        }

    }
};

export {router};