const form = document.querySelector('form')
const contactsList = document.querySelector('.contacts-list')
let storedContactsArray = []

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
    //Store contacts in localstorage
    const stortedContact = localStorage.setItem('Contact', JSON.stringify(newContact))
    storedContactsArray.push(stortedContact)

    const deleteButton = document.querySelector('.delete')
    const favoriteButton = document.querySelector('.favorite')
    //Button listeners
    favoriteButton.addEventListener('click', () => {
        favoriteButton.parentElement.classList.toggle('favorite')
    })
    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove()
    })
    form.reset()
    event.preventDefault()
})
function GetContacts() {
    const savedContats = localStorage.getItem('Contact')
    contactsList.append(savedContats)
    if (savedContats == null) {
        contactsList.remove()
    }
}
document.addEventListener('load', GetContacts())