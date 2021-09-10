document.addEventListener('submit', async (e) => {
  if(e.target.matches('.editTariff')) {
    e.preventDefault()
    const {action} = e.target
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData));
    const response = await fetch(action, {
    method: 'PUT',
    body: formData
  })
  if(response.ok) {
    e.target.innerText = 'Готово'
    window.location.assign('/#tariffs')
    }
  }
  if(e.target.matches('.deleteTariff')) {
    e.preventDefault()
    const {action} = e.target
    const response = await fetch(action, {
    method: 'DELETE',
  })
  if(response.ok) {
    e.target.innerText = 'Готово'
    window.location.assign('/#tariffs')
    }
  }
})

