// const API ='api.freeapi.app/api/v1/public/books'
// console.log(API);

const SearchInput = document.querySelector('input')
const btn = document.querySelector('button')
const MainCardContainer = document.getElementById('MainCardcontainer')



function getData(){
  const url = "https://api.freeapi.app/api/v1/public/books"
  getBooks(url)
}


const getBooks = async(url)=>{
    try{
        const repsonse = await fetch(url)
        const data = await repsonse.json()
        const result = data.data.data       
        
        result.forEach(Data => {     
             MainCardContainer.innerHTML += `
         <div class="book-card">
            <img
              src="${Data.volumeInfo.imageLinks.thumbnail}"
              alt="Book Cover"
            />
            <div class="book-info">
              <h2>${Data.volumeInfo.title}</h2>
              <p class="author">${Data.volumeInfo.authors[0]}</p>
              <p class="price">${Data.saleInfo.saleability}</p>
              <p class="desc">
                ${Data.volumeInfo.description}
              </p>
              <div class="buttons">
                <a
                  href="${Data.volumeInfo.previewLink}"
                  target="_blank"
                  >Read Sample</a
                >
                <a
                  href="${Data.volumeInfo.canonicalVolumeLink}"
                  target="_blank"
                  >Buy Now</a
                >
              </div>
            </div>
          </div> `
        });        
    }catch(error){
        console.log(error);
    }
}
 

btn.addEventListener('click',()=>{
    const Querry = SearchInput.value
    let url = `https://api.freeapi.app/api/v1/public/books?query=${Querry}`
    getBooks(url)
    MainCardContainer.innerHTML = ""

})

window.addEventListener('DOMContentLoaded',getData())

