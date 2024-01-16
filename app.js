const panel = document.querySelectorAll('.panels')

panel.forEach(panels =>{
    panels.addEventListener('click',() =>{
        removeActiveClass()
        panels.classList.add('active')
    })
})

function removeActiveClass() {
    panel.forEach(panels =>{
        panels.classList.remove('active')
    })
}