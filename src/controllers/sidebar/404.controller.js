import view from '../../views/404.controller.html'

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view;
    return divElement
}