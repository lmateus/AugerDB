import { pages } from '../controllers/index'

let content = document.getElementById('root')

const router = route => {
  console.log(route)
  content.innerHTML = '';

  switch (route) {
    case '#/home': {
      return content.appendChild(pages.home())
    }
    case '#/users':
      return console.log('users')
    case '#/structurs':
      return pages.structure()
    case '#/sondeo':
      return pages.sondeo()
    case '#/profiles':
      return content.appendChild(pages.profile())
    default: {
      return content.appendChild(pages.notFound())
    }
  }
}

export { router };
