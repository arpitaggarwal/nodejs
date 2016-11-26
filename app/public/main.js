var update = document.getElementById('update')

update.addEventListener('click', function () {
  fetch('quotes', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': 'Arpit',
    'quote': 'Stay Calm and Node JS!'
  })
}).then(res => {
  if (res.ok) return res.json()
})
.then(data => {
  console.log(data)
  window.location.reload(true)
})
})
