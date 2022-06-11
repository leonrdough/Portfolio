// template_4lv62kt
// service_96fm8ab 
// 0W9tGCbfyGYwEmuic
let contrastToggle = false
let isModalOpen = false

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    event.preventDefault();
    emailjs
        .sendForm(
            'service_96fm8ab ',
            'template_4lv62kt',
            event.target,
            '0W9tGCbfyGYwEmuic'
        ).then( () => {
            loading.classList.remove("modal__overlay--visible")
            success.classList+= " modal__overlay--visible"
            console.log('this worked')
        }).catch( () => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable, please contact me directly."
            )
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true
    document.body.classList += ' modal--open' 
}