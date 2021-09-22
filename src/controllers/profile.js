import views from '../views/profile.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = views
    return divElement;
};