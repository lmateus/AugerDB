export default data => {
  let table = document.getElementById('divContentTable')
  let tableElement = table.childNodes[1].childNodes[0].childNodes[2]
  let arrayTable = tableElement.rows

  for (let row = 0; row < arrayTable.length; row++) {
    arrayTable[row].childNodes[1].innerText = ''
    arrayTable[row].childNodes[1].style['background-color'] = data[row][0]
    console.log(data[row])
  }
}
