const { addAnimalForm, addEmployeeForm, addTariffForm, addNewsForm } = document;

addAnimalForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch(`/categories/${formData.categoryId}/animals`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
});

addEmployeeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target));

  const response = await fetch(`/admins`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
});

addTariffForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch(`/tariffs`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log({ data });
  }
});

addNewsForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch(`/news`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log({ data });
  }
});
