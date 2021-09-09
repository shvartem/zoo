/* eslint-disable no-use-before-define */
document.getElementById('sendToEditAnimal').addEventListener('click', showEditForm)

document.getElementById('sendToAddPhoto').addEventListener('click', showPhotoForm)

document.getElementById('sendToDeleteForm').addEventListener('click', showDeleteForm)

document.addPhotoForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const {action} = e.target
  const response = await fetch(action, {
    method: 'POST',
    body: formData
  })
  if(response.ok) {
    console.log(action.split('/'))
    // window.location.href = 'http://localhost:3000/'
  }
})

document.editAnimalForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const {action} = e.target
    const response = await fetch(action, {
    method: 'PUT',
    body: formData
  })
  if(response.ok) {
    console.log(response)
    window.location.href = action
  }
})

document.deleteAnimalForm.addEventListener('submit', async (e) => {
  const {action} = e.target
    const response = await fetch(action, {
    method: 'DELETE',
  })
  if (response.ok) {
  e.target.innerText = 'Удaлено'
  }
})

function showEditForm(e) {
  e.preventDefault();
  const cardBody = e.target.closest('.card').querySelector('.card-body')
  const name = document.getElementById('cardTitle').innerText
  const descr = document.getElementById('cardDescr').innerText
  const editForm = document.getElementById('editForm')
  document.getElementById('name').setAttribute('value', name)
  document.getElementById('descr').innerText = descr
  e.target.parentNode.classList.add('hidden')
  cardBody.classList.add('hidden')
  editForm.classList.remove('hidden')
}

function showPhotoForm(e) {
  e.preventDefault()
  const cardBody = e.target.closest('.card').querySelector('.card-body')
  cardBody.classList.add('hidden')
  e.target.parentNode.classList.add('hidden')
  document.getElementById('addPhoto').classList.remove('hidden')
}

function showDeleteForm(e) {
  e.preventDefault()
  const cardBody = e.target.closest('.card').querySelector('.card-body')
  cardBody.classList.add('hidden')
  e.target.parentNode.classList.add('hidden')
  document.getElementById('deleteAnimal').classList.remove('hidden')
}



