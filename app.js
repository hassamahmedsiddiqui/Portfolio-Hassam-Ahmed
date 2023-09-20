const typed = new Typed('.multiple-text', {
    strings: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT JS'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})


// SideBar
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menuButton');
const crossBtn = document.querySelector('.crossButton');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('showSidebar');
});

crossBtn.addEventListener('click', () => {
    sidebar.classList.remove('showSidebar')
})