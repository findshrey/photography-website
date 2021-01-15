const imgContainer = document.getElementById('js-img-container')

// Create element and render image
const renderImage = (doc) => {
   const img = document.createElement('img')

   // Setup image
   img.setAttribute('src', `${doc.data().sm}`)
   img.setAttribute('srcset',
      `${doc.data().sm} 500w, 
      ${doc.data().md} 1000w, 
      ${doc.data().lg} 1500w`
   )
   img.setAttribute('sizes', '(max-width: 800px) 90vw, 60vw')

   imgContainer.appendChild(img)
}

if (location.pathname === '/journal-pages/annie-rob.html') {
   db.collection('annie-rob').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
         renderImage(doc)
      })
   })
}

if (location.pathname === '/journal-pages/lindsey-jayce.html') {
   db.collection('lindsey-jayce').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
         renderImage(doc)
      })
   })
}

if (location.pathname === '/journal-pages/jessica-paul.html') {
   db.collection('jessica-paul').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
         renderImage(doc)
      })
   })
}

if (location.pathname === '/journal-pages/desiree-bradley.html') {
   db.collection('desiree-bradley').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
         renderImage(doc)
      })
   })
}