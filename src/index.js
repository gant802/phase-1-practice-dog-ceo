
//fetch urls and containers to append to
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogContainer = document.querySelector('#dog-image-container')
const breedsContainer = document.querySelector('#dog-breeds')

//fetching image url from api
fetch(imgUrl)
    .then(response => response.json())
    .then(data => renderImages(data))
    .catch(error => console.error('Error:', error));

//render images to page
function renderImages(data) {
    data.message.forEach(element => {
        const img = document.createElement('img')
        img.src = element
        img.style.width = "400px"
        dogContainer.appendChild(img)
    });
}

//fetching breeds url
fetch(breedUrl)
    .then(response => response.json())
    .then(data => renderBreeds(data))
    .catch(error => console.error('Error:', error));

//rendering breeds to page in a list 
function renderBreeds(data) {
    for (let [key, value] of Object.entries(data.message)) {
        makeList(key, value)
    }
}

//this makes a list of breeds that allow you to use the dropdown to select only the breeds
//that start with the corresponding letter. If you click a breed name, it turns magenta
function makeList(key, value) {
    const dogBreedLi = document.querySelectorAll('.dogBreeds')
    const li = document.createElement('li')
    li.classList = "dogBreeds"
    li.textContent = `${key}: ${value}`
    breedsContainer.appendChild(li)
    const dropdown = document.querySelector('#breed-dropdown')
    dropdown.addEventListener('change', (e) => {
        const selectedValue = e.target.value
        if (li.textContent[0] !== selectedValue) {
            li.style.display = "none"
        } else {
            li.style.display = ""
        }
})
 for (const item of dogBreedLi) {
        item.addEventListener('click', (e) => {
            e.target.style.color = "magenta"
        })
    }

}





