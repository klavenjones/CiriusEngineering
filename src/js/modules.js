// This will get imported in main.js
export const logSomething = msg => {
  console.log(msg)
}

export const scrollChecker = (position, elementPosition) => {
  console.log(position)
  console.log(elementPosition)
  if (position > 20 || elementPosition > 20) {
    document.querySelector('.nav-custom').style.background = 'black'
  } else {
    document.querySelector('.nav-custom').style.background = 'transparent'
  }
}
