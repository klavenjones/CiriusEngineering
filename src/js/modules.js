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

export const checkWidth = () => {
  let nav = document.querySelector('#nav').classList
  let navDropdown = document.querySelector('#navbarNavDropdown').classList

  if (window.innerWidth > 840) {
    if (nav.value.includes('nav-expanded')) {
      document.querySelector('#nav').classList.remove('nav-expanded')
    }
    if (navDropdown.value.includes('show')) {
      document.querySelector('#navbarNavDropdown').classList.remove('show')
    }
  }
}
