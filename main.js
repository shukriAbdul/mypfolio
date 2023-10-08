// let  toggle_btn = document.querySelector(".toggle_btn")
// let  toggle_btnIcon = document.querySelector(".toggle_btn i")
// let dropdown_menu = document.querySelector(".dropdown_menu")



// toggle_btn.onclick = function (){
//     dropdown_menu.classList.toggle('open')
//     const isopen = dropdown_menu.classList.contains('open')
 

//     toggle_btnIcon.classList = isopen
//     ? 'fa-solid fa-xmark'
//     : 'fa-solid fa-bars' 
// }
   
let  toggle_btn = document.querySelector(".toggle_btn")
let  toggle_btnIcon = document.querySelector(".toggle_btn i")
let dropdown_menu = document.querySelector(".dropdown_menu")



toggle_btn.addEventListener("click", () =>{

    dropdown_menu.classList.toggle('open')
   
    const isopen = dropdown_menu.classList.contains('open')
 

    toggle_btnIcon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars' 
});
   




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a[href*=' + id + ' ]').classList.add('active');
            });

        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};













ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.Header_prnt, .action_btn', { origin:'top' });
 ScrollReveal().reveal('.section_about, .Prt2, ', { origin:'bottom' });
 ScrollReveal().reveal('.bx1_prnt, .icn i h2', { origin: 'top' });
 ScrollReveal().reveal('.Project_prnt, .partOne', { origin: 'bottom' });
 ScrollReveal().reveal('.contact_parent, .box_One', { origin: 'bottom' });


 const typed = new Typed('.multipler-text', {
    strings: [ ,'Full Stack Developer' ,'Graphic Design'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 })


// Full Stack Web Developer &<br> Graphic Design </h2>