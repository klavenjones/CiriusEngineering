// This will get imported in main.js
export const logSomething = msg => {
  console.log(msg)
}

export const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('#nav').classList.add('nav-scrolling')
  } else {
    document.querySelector('#nav').classList.remove('nav-scrolling')
  }
}

export const clickFunction = () => {
  document.querySelector('#nav').classList.toggle('nav-expanded')
}
