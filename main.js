window.addEventListener('load', function () {
  var switchery = document.getElementsByClassName('switchery')[0]
  switchery.addEventListener('click', function (e) {
    console.log('click')
    console.log('switchery', switchery)
    switchery.classList.add('active')
  }, true)
})