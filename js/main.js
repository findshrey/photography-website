// AUTO SLIDESHOW
const slides = document.querySelectorAll('.slide')

const nextSlide = () => {
   const current = document.querySelector('.current')
   current.classList.remove('current')

   if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('current')
   } else {
      slides[0].classList.add('current')
   }
}

setInterval(nextSlide, 5000)


// MOBILE NAVIGATION
const burger = document.getElementById('burger')
const nav = document.getElementById('main-nav')
const navLinks = document.querySelectorAll('#main-nav li')

burger.addEventListener('click', () => {
   // Toggle nav
   nav.classList.toggle('active')
   burger.classList.toggle('active')

   // Animate links
   navLinks.forEach((link, index) => {
      if (link.style.animation) {
         link.style.animation = ''
      } else {
         link.style.animation = `navLinksFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`
      }
   })
})


// REVIEW NAVIGATION
const reviews = document.querySelectorAll('.review')
const prevBtn = document.getElementById('prev-review')
const nextBtn = document.getElementById('next-review')
const currentReview = document.getElementById('current-review')

let currentActiveReview = 1

nextBtn.addEventListener('click', () => {
   const active = document.querySelector('.active')

   if (active.nextElementSibling) {
      // removes active class and adds left
      active.className = 'review left'
      active.nextElementSibling.className = 'review active'

      currentActiveReview += 1
      updateCurrentReviewText()
   }
})

prevBtn.addEventListener('click', () => {
   const active = document.querySelector('.active')

   if (active.previousElementSibling) {
      active.classList.remove('active')
      active.previousElementSibling.className = 'review active'

      currentActiveReview -= 1
      updateCurrentReviewText()
   }
})

const updateCurrentReviewText = () => {
   currentReview.innerText = `${currentActiveReview} of ${reviews.length}`
}

updateCurrentReviewText()