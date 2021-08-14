// GET JOURNAL IMAGES FROM FIRESTORE
const journalPageImages = document.getElementById("js-journal-page-img")

// Create element and render image
const renderJournalImage = (doc) => {
   const img = document.createElement("img")

   // Setup image
   img.setAttribute("src", `${doc.data().sm}`)
   img.setAttribute(
      "srcset",
      `${doc.data().sm} 500w, 
      ${doc.data().md} 1000w, 
      ${doc.data().lg} 1500w`
   )
   img.setAttribute("sizes", "(max-width: 800px) 90vw, 60vw")

   journalPageImages.appendChild(img)
}

// Get collection name
const collectionName = location.pathname.substring(15).split(".")[0]

// Get collection data
db.collection(`${collectionName}`)
   .get()
   .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
         renderJournalImage(doc)
      })
   })
