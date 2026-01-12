const Btn = document.querySelector('button')
const on = document.querySelector('#ON')
const off = document.querySelector('#OFF')
const bulb = document.querySelector('#bulb')


const chnageText = () => {
    console.log(on.classList.contains('hidden'))
    if (on.classList.contains('hidden')) { // true
        on.classList.remove('hidden') //  <span id="ON" >On</span>
        off.classList.add('hidden') // <span id="OFF"  class="hidden">OFF</span>
        bulb.style.backgroundColor = "Yellow"

    } else {
        off.classList.remove('hidden') //<span id="OFF">OFF</span>
        on.classList.add('hidden') // <span id="ON" class="hidden">On</span>
        bulb.style.backgroundColor = "red"
        }

 }