const searchicon = document.getElementById('searchicon')
const searchengine = document.getElementById('searchengine')

searchicon.addEventListener('click', () => {
    searchengine.classList.toggle('active')
})