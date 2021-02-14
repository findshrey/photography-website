// MOBILE NAVIGATION
const hamburger = document.getElementById('js-hamburger')
const nav = document.getElementById('js-nav-main')
const navLinks = document.querySelectorAll('#js-nav-main li')

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

// SECTION FADE-IN ANIMATION
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

// GET FOOTER IMAGES
const footerImages = document.getElementById('js-footer-img')

// Create element and render image
const renderFooterImage = (doc) => {
   const img = document.createElement('img')

   // Setup image
   img.setAttribute('src', `${doc.data().sm}`)
   img.setAttribute('srcset',
      `${doc.data().sm} 500w, 
      ${doc.data().md} 1000w`
   )

   footerImages.appendChild(img)
}

// Check if on Contact page
if (!location.pathname.includes('contact')) {
   // Get collection data
   db.collection(`footer-instagram`).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
         renderFooterImage(doc)
      })
   })
}
