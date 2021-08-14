const scores = JSON.parse(localStorage.getItem('scores')) || []
let data =[]
scores.forEach(element => {
  data.push(element)
  
})

data.sort(function (a, b) {
  return a.name.localeCompare(b.name) || b.correct - a.correct
})

console.log('hi')
console.log(data)



const renderScores = () => {

  data.forEach((key) => {
    const scoreElem = document.createElement('div')

    scoreElem.innerHTML = `
          <div  class="row mt-5">
            <div class="col">
              ${key.name}
            </div>
            <div class="col">
              ${key.percentage}
            </div>
            <div class="col">
              ${key.correct}
            </div>
            <div class="col">
              ${key.elapsedTime} seconds
            </div>

          </div>
          </div>
  `
    document.getElementById('scores').append(scoreElem)
  })
}



renderScores()
