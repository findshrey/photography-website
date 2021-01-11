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


// REVIEW NAVIGATION
const reviews = document.querySelectorAll('.review')
const prevBtn = document.getElementById('js-prev-review')
const nextBtn = document.getElementById('js-next-review')
const currentReview = document.getElementById('js-current-review')

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
