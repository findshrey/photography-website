// GET SHOWCASE IMAGES FROM FIRESTORE
const showcaseImages = document.getElementById("js-showcase")

let activeSlide = true

const renderShowcaseImage = (doc) => {
   const img = document.createElement("img")

   // Setup image
   img.classList.add("slide")
   activeSlide ? img.classList.add("current") : null
   img.setAttribute("src", `${doc.data().sm}`)
   img.setAttribute(
      "srcset",
      `${doc.data().sm} 800w, 
      ${doc.data().md} 1500w, 
      ${doc.data().lg} 2200w`
   )

   showcaseImages.appendChild(img)
}

db.collection("showcase")
   .get()
   .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
         renderShowcaseImage(doc)
         activeSlide = false
      })
   })

// AUTO SLIDESHOW
const slideShow = () => {
   const slides = document.querySelectorAll(".slide")

   const nextSlide = () => {
      const current = document.querySelector(".current")
      current.classList.remove("current")

      if (current.nextElementSibling) {
         current.nextElementSibling.classList.add("current")
      } else {
         slides[0].classList.add("current")
      }
   }

   setInterval(nextSlide, 5000)
}
setTimeout(slideShow, 1000)

// REVIEW NAVIGATION
const reviews = document.querySelectorAll(".review")
const prevBtn = document.getElementById("js-prev-review")
const nextBtn = document.getElementById("js-next-review")
const currentReview = document.getElementById("js-current-review")

let currentActiveReview = 1

nextBtn.addEventListener("click", () => {
   const active = document.querySelector(".active")

   if (active.nextElementSibling) {
      // removes active class and adds left
      active.className = "review left"
      active.nextElementSibling.className = "review active"

      currentActiveReview += 1
      updateCurrentReviewText()
   }
})

prevBtn.addEventListener("click", () => {
   const active = document.querySelector(".active")

   if (active.previousElementSibling) {
      active.classList.remove("active")
      active.previousElementSibling.className = "review active"

      currentActiveReview -= 1
      updateCurrentReviewText()
   }
})

const updateCurrentReviewText = () => {
   currentReview.innerText = `${currentActiveReview} of ${reviews.length}`
}

updateCurrentReviewText()
