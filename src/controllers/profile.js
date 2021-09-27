const CHART = document.getElementById('lineChart')

export default () => {
 
  
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
        scales: {
          y: {
            min: 2506.5,
            max: 2580.5
          }
        }
      }
    })
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      Punto_inicial: [-74.079102, 4.65059],
      Punto_final: [-74.077911, 4.650547]
    })
  })
    .then(response => response.json())
    .then(data => plot(data.distancia_x, data.elevacion))
}
