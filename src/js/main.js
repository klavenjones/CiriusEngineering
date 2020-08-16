import 'bootstrap'

window.onscroll = function() {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.nav-custom').style.backgroundColor = '#303745'
  } else {
    document.querySelector('.nav-custom').style.backgroundColor = 'transparent'
  }
}
