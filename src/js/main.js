import 'bootstrap'
import '@fortawesome/fontawesome-free/js/all.js'
import {
  scrollFunction,
  clickFunction,
  checkWidth,
  rotateFunctionHistory,
  rotateFunctionVision,
  rotateFunctionMission
} from './modules'

window.onscroll = function() {
  scrollFunction()
}

window.onresize = function() {
  checkWidth()
}

document.querySelector('.navbar-toggler').onclick = function() {
  clickFunction()
}

document.querySelector('#history .accordian__toggle').onclick = function() {
  rotateFunctionHistory()
}

document.querySelector('#mission .accordian__toggle').onclick = function() {
  rotateFunctionMission()
}

document.querySelector('#vision .accordian__toggle').onclick = function() {
  rotateFunctionVision()
}
