import 'bootstrap'
import { scrollFunction, clickFunction } from './modules'

window.onscroll = function() {
  scrollFunction()
}

document.querySelector('.navbar-toggler').onclick = function() {
  clickFunction()
}
