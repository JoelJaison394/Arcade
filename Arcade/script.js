const div1 = document.getElementById('arrow1')
const div2 = document.getElementById('arrow2')
const div3 = document.getElementById('arrow3')
const div4 = document.getElementById('arrow4')
const title = document.getElementById('main-title')

function showArrow1 () {
    div1.classList.add('arrow')
    title.classList.add('green-neon')
}

function showArrow2 () {
    div2.classList.add('arrow')
    title.classList.add('pink-neon')
}

function showArrow3 () {
    div3.classList.add('arrow')
    title.classList.add('red-neon')
}

function showArrow4 () {
    div4.classList.add('arrow')
    title.classList.add('blue-neon')
}

function removeArrow1 () {
    div1.classList.remove('arrow')
    title.classList.remove('green-neon')
}

function removeArrow2 () {
    div2.classList.remove('arrow')
    title.classList.remove('pink-neon')
}

function removeArrow3 () {
    div3.classList.remove('arrow')
    title.classList.remove('red-neon')
}

function removeArrow4 () {
    div4.classList.remove('arrow')
    title.classList.remove('blue-neon')
}