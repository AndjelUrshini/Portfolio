const lists = document.querySelectorAll(".nav-menu li")
lists.forEach(link => {
    link.addEventListener('click',()=>{
     document.querySelector('.active').classList.remove('active');
     link.classList.add("active");
     
    })
 })

const dropdown = document.querySelector(".select")
const menu = document.querySelector(".menu-social")
console.log(dropdown);
console.log(menu);

dropdown.addEventListener('click',()=>{
    menu.classList.toggle("showSocial")
})

const menuIcon = document.querySelector('.bx-menu')
const menuList = document.querySelector('.nav-menu')

menuIcon.addEventListener('click',()=>{
    menuList.classList.toggle("showNav")
})