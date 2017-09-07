window.addEventListener('load', function () {
  var switchery = document.getElementsByClassName('switchery')[0]
  var checkbox = document.getElementsByClassName('js-switch')[0]
  switchery.addEventListener('click', function (e) {
    console.log('click')
    console.log('switchery', switchery)
    if (switchery.classList.contains('active')) {
      switchery.classList.remove('active')
      checkbox.checked = false
    } else {
      switchery.classList.add('active')
      checkbox.checked = true
    }
  }, true)
})