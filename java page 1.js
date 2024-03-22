function desolcutarmenu() {
    var navResponsive = document.querySelector('.nav-responsive');
    var navUl = document.querySelector('header nav ul');

    if (navUl.style.display === 'flex') {
        navUl.style.display = 'none';
    } else {
        navUl.style.display = 'flex';
    }
}


const myObserver = new IntersectionObserver ( (entries) =>{
    entries.forEach ( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.hidden')
elements.forEach( ( element) => myObserver.observe (element))

