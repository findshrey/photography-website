const imgContainer = document.getElementById('js-img-container')

// Create element and render image
const renderImage = (doc) => {
   const img = document.createElement('img')

   img.setAttribute('data-id', doc.id)
   img.setAttribute('src', `${doc.data().sm}`)

   img.setAttribute('srcset',
      `${doc.data().sm} 500w, 
      ${doc.data().md} 1000w, 
      ${doc.data().lg} 1500w`
   )

   img.setAttribute('sizes', '(max-width: 800px) 90vw, 60vw')

   // console.log(img);

   imgContainer.appendChild(img)
}

db.collection('annie-rob').get().then((snapshot) => {
   snapshot.docs.forEach(doc => {
      renderImage(doc)
   })
})