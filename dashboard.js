const p = console.log

const menu = document.querySelector('#menu')
const dashNav = document.querySelector('.lrg__nav')
const createBtn = document.querySelector('.create__quiz')
const modal = document.querySelector('.modal')

menu.onclick = () => {
  dashNav.classList.toggle("hide")
}

createBtn.onclick = () =>{
  modal.classList.remove('hide')
    modal.classList.add('show')

}

modal.onclick = () =>{
    modal.classList.remove('show')
  modal.classList.add('hide')
}

