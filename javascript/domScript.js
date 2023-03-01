const body = document.querySelector('body')

const para1 = document.createElement('p')
para1.classList.add('p1')
para1.textContent = "Hey I'm red!"
para1.style.color = 'red'

const header1 = document.createElement('h3')
header1.classList.add('headerBlue')
header1.textContent = "I'm a blue h3!"
header1.style.color = "blue"

const div1 = document.createElement('div')
div1.classList.add('divPink')
div1.style.backgroundColor = "pink"
div1.style.borderColor = 'black'

const header2 = document.createElement('h1')
header2.textContent = "I'm in a div"

const para2 = document.createElement('p')
para2.textContent = "ME TOO!"

body.appendChild(para1)
body.appendChild(header1)
body.appendChild(div1)
div1.appendChild(header2)
div1.appendChild(para2)