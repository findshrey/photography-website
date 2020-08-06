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

// Animation

const sections = document.querySelectorAll('.section-fade-in')

const options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.1
}

const callback = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.style.animation = 'sectionFadeIn 1s ease forwards'
         observer.unobserve(entry.target)
      }
   })
}

const observer = new IntersectionObserver(callback, options)

sections.forEach((section) => {
   observer.observe(section)
})