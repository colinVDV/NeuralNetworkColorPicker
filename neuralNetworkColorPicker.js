// creating a neural network object
const net = new brain.NeuralNetwork()

//This is the data that we will use to train the AI
//more training data equals a more accurate AI
const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.17005920677742425,"g":0.8474744789894213,"b":0.8242437990789684},"output":[0]},{"input":{"r":0.8279136970163603,"g":0.782961300220921,"b":0.30829970046527966},"output":[0]},{"input":{"r":0.548537617054828,"g":0.8750130098796347,"b":0.41429567634499387},"output":[0]},{"input":{"r":0.8164033121140184,"g":0.8601963998609052,"b":0.456412967347936},"output":[0]},{"input":{"r":0.880117927527996,"g":0.7210333557122566,"b":0.3596949604363431},"output":[0]},{"input":{"r":0.7648098651765898,"g":0.4365762398180555,"b":0.012616715953178259},"output":[0]},{"input":{"r":0.5990835379999677,"g":0.1610561252416911,"b":0.056959956396481326},"output":[1]},{"input":{"r":0.43407872724093965,"g":0.38863623280257675,"b":0.414692807148032},"output":[1]},{"input":{"r":0.2895089701226181,"g":0.24958683541797533,"b":0.5709806568090521},"output":[1]},{"input":{"r":0.19599027926432222,"g":0.29206119978965117,"b":0.39002693965469404},"output":[1]},{"input":{"r":0.12197020191012409,"g":0.10138456760221626,"b":0.6556000267596751},"output":[1]},{"input":{"r":0.5325237766120725,"g":0.2286605933032524,"b":0.6243479461698447},"output":[1]},{"input":{"r":0.9825282046755432,"g":0.1747671381705329,"b":0.4610706126326194},"output":[0]} ,{"input":{"r":0.8886485746882755,"g":0.4294852106106515,"b":0.8860087899337876},"output":[0]}]

//Here we train the array, its input parameters have to be arrays.
net.train(data)

const colorElement = document.getElementById('color')
const guessElement = document.getElementById('guess')
const whiteButton = document.getElementById('whiteButton')
const blackButton = document.getElementById('blackButton')
const printButton = document.getElementById('printButton')
const changeColor = document.getElementById('changeColor')
const output = document.getElementById('output')
let color
setRandomColor()


whiteButton.addEventListener('click', () => {
    chooseColor(1)
})

blackButton.addEventListener('click', () => {
    chooseColor(0)
})

changeColor.addEventListener('click', setRandomColor)

printButton.addEventListener('click', print)


function chooseColor(value) {
    data.push({
      input: color,
      output: [value]
    })
    setRandomColor()
  }
  
  function print() {
    console.log(JSON.stringify(data))
  }





// This function returns a random rgb color code and sets our html element
// to that specific color
function setRandomColor() {
   //picks a random color
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    }

    const guess = net.run(color)[0]
    output.innerHTML = guess;

    //sets the guess text to the calculated color
    //if >0.5 white, else black
    guessElement.style.color = guess > 0.5 ? '#FFF' : '#000'

    //sets background to a random color
    colorElement.style.backgroundColor = 
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}


//visualizing our neural network on the html page
// const diagram = document.getElementById('diagram');
// diagram.innerHTML = brain.utilities.toSVG(net);
