import 'bootstrap'
import { scrollFunction, clickFunction, checkWidth } from './modules'

window.onscroll = function() {
  scrollFunction()
}

window.onresize = function() {
  checkWidth()
}

document.querySelector('.navbar-toggler').onclick = function() {
  clickFunction()
}
