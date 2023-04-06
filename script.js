let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('you clicked red')
// yellowDiv.onclick = () => console.log('you clicked yellow')
// greenDiv.onclick = () => console.log('you clicked green')

const button = document.querySelectorAll('.colorbutton')

// console.log(button[0].value);
// console.log(button[1].value);
// console.log(button[2].value);

const timeclicked = { 'red': 0, 'yellow': 0, 'green': 0 }

button.forEach(button => {
  button.onclick = () => {
    timeclicked[button.value] += 1;
    button.innerText = timeclicked[button.value];
  }
})

const clearscore = () => {
  button.forEach(button => button.innerText = ' ')
}

const clrgamediv = document.getElementById('clrgame');
// clrgamediv.onclick = () => clearscore();
clrgamediv.onclick = clearscore;
