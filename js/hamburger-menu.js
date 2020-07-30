// MOBILE NAVIGATION
const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav-main')
const navLinks = document.querySelectorAll('#nav-main li')

hamburger.addEventListener('click', () => {
   // Toggle nav
   nav.classList.toggle('active')
   hamburger.classList.toggle('active')

   // Animate links
   navLinks.forEach((link, index) => {
      if (link.style.animation) {
         link.style.animation = ''
      } else {
         link.style.animation = `navLinksFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`
      }
   })
})