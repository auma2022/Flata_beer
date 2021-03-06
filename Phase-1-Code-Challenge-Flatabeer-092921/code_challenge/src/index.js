
// Code here
const beerUl = document.getElementById("beer-list");
const beerElemName = document.getElementById("beer-name");
const beerElemImage = document.getElementById("beer-image");
const beerElemDescription = document.getElementById("beer-description");


document.addEventListener("DOMContentLoaded", () => {
getBeerData();
  });

  function getBeerData() {
    fetch("http://localhost:3000/beers")
      .then((response) => response.json())
      .then((data) => beerData(data));
  }
  
  
  function beerData(data) {
    data.forEach((data) => {
      const list = document.createElement("li");
      list.style.fontSize = "18px";
      list.innerText = data.name;
      beerUl.appendChild(list);

      list.addEventListener("click", () => {
        beerElemName.textContent = data.name;
        beerElemName.style.color = "red";       
        beerElemImage.setAttribute("src", data.image_url);
        beerElemDescription.textContent = data.description;
        beerElemDescription.style.fontSize = "18px"
      });
    });
  }
const beerReviews = document.getElementById('review-list');
  document.querySelector('#review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let text = document.querySelector('#review-form textarea')
    let listReveiw = document.createElement('li');
    listReveiw.innerText = text.value;
    beerReviews.appendChild(listReveiw);
    document.querySelector('#review-form').reset();
})

