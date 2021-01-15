const form = document.querySelector('form')
const contactsList = document.querySelector('.contacts-list')

form.addEventListener('submit', (event) => {
    const formData = new FormData(form)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const description = formData.get('description')

    const newContact = {
        "name": name,
        "phone": phone,
        "description": description
    }
    const contactCard = document.createElement('div')
    contactCard.classList.add('contact-card')
    contactsList.append(contactCard)
    contactCard.innerHTML += `
    <h5>Name: ${newContact.name}</h5>
    <h5>Phone: ${newContact.phone}</h5>
    <p>Description: ${newContact.description}</p>
    <button class="favorite"><i class="fas fa-star"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    `
    form.reset()
    event.preventDefault()
})