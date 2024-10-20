const targets = document.querySelectorAll('.target')

targets.forEach((target) => {
    console.log(target)
})
const options = {
    threshold: 0.1
}
const callBack = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('active') }
        else { entry.target.classList.remove('active') }


    })
}



const observer = new IntersectionObserver(callBack, options)
targets.forEach((target) => { observer.observe(target) })
