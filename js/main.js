const button = document.querySelector('.button')
const wrap = document.querySelector('.wrap')

const addElem = () => {
    const div = document.createElement('div')
    div.className = 'newBlock'
    div.textContent = button.textContent
    wrap.append(div)
}

button.addEventListener('click', (e) => {
    addElem()
})