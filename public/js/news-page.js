const editBtn = document.getElementById('edit-news')
const deleteBtn = document.getElementById('delete-news')

if(editBtn) {
editBtn.addEventListener('click', e => {
  const cardBody = document.querySelector('.card-body-inner')
  const title = document.querySelector('.card-title')
  const content = document.querySelector('.card-text')
  document.getElementById('title').setAttribute('value', title.innerText)
  document.getElementById('content').innerText = content.innerText
  e.target.parentNode.classList.add('hidden')
  cardBody.classList.add('hidden')
  document.getElementById('editNewsForm').classList.remove('hidden')
})
}

if(deleteBtn) {
deleteBtn.addEventListener('click', e => {
  const cardBody = document.querySelector('.card-body-inner')
  e.target.parentNode.classList.add('hidden')
  cardBody.classList.add('hidden')
  document.getElementById('deleteAnimal').classList.remove('hidden')
})
}

if(document.editNewsForm) {
document.editNewsForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const {action} = e.target
  const formData = new FormData(e.target)
  const response = await fetch(action, {
    method: 'PUT',
    body: formData
  })
  if(response.ok) {
    window.location.assign(action)
  }
})
}
if(document.deleteAnimalForm) {
document.deleteAnimalForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const {action} = e.target
  const response = await fetch(action, {
    method: 'DELETE',
  })
  if(response.ok) {
    e.target.innerText = 'Удалено'
  }
})
}