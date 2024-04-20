const lists = document.querySelectorAll(".nav-menu li")
lists.forEach(link => {
    link.addEventListener('click',()=>{
     document.querySelector('.active').classList.remove('active');
     link.classList.add("active");
     
    })
 })

const dropdown = document.querySelector(".select")
const menu = document.querySelector(".menu-social")
dropdown.addEventListener('click',()=>{
    menu.classList.toggle("showSocial")
})

const menuIcon = document.querySelector('.bx-menu')
const menuList = document.querySelector('.nav-menu')
menuIcon.addEventListener('click',()=>{
    menuList.classList.toggle("showNav")
})

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("animate__fadeInDown");
//         } else {
//             entry.target.classList.remove("animate__fadeInDown");
//         }
//     });
// });
// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));