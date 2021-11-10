import './../../styles/profile.css'
import views from '../../views/profile.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views
    return divElement;
};





// Ejemplo de extraer la informacion, por ahora esta suspendida
/* 
export default () => {
 
  const CHART = document.getElementById('lineChart')
  
  const url = 'http://localhost:4000/products'

  function plot (distancia, elevacion) {
    let lineChart = new Chart(CHART, {
      type: 'line',
      data: {
        labels: distancia,
        datasets: [
          {
            label: 'Perfil',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: elevacion
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Este es tu perfil'
          }
        },
      }
    })
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      Punto_inicial: [-74.067074, 4.625538],
      Punto_final: [-74.057700, 4.623399] 
    })
  })
    .then(response => response.json())
    .then(data => plot(data.distancia_x, data.elevacion))
}

*/