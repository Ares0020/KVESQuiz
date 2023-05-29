const p = console.log

const menuBtn = document.querySelector('#menu')
const link = document.querySelector('.links')


menuBtn.addEventListener('click', () => {
  link.classList.remove('hide')
})

link.onclick = () => {
    link.classList.add('hide')
}

