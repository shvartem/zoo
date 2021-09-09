/* eslint-disable no-use-before-define */
document.sendToEditAnimal.addEventListener('submit', showEditForm)


document.editAnimalForm.addEventListener('submit', (e) => {
  e.preventDefault()
})




function showEditForm(e) {
  e.preventDefault();
  const currentCard = e.target.closest('.card')
  const cardBody = currentCard.querySelector('.card-body')
  const name = document.getElementById('cardTitle').innerText
  const descr = document.getElementById('cardDescr').innerText
  const editForm = document.getElementById('editForm')
  document.getElementById('name').setAttribute('value', name)
  document.getElementById('descr').setAttribute('value', descr)
  e.target.parentNode.classList.add('hidden')
  cardBody.classList.add('hidden')
  editForm.classList.remove('hidden')
}




