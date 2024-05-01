let products = {
  data: [
    {
      productName: "Beef Burger",
      category: "burger",
      price: "25.000",
      image: "Assets/burger.png",
    },
    {
      productName: "Burger with Cheese",
      category: "burger",
      price: "15.000",
      image: "Assets/burger2.png",
    },
    {
      productName: "Bigbone Burger",
      category: "burger",
      price: "40.000",
      image: "Assets/bigbone-burger.jpg",
    },
    {
      productName: "Vegetarian Burger",
      category: "burger",
      price: "20.000",
      image: "Assets/vegetarian-burger.jpg",
    },
    {
    productName: "Compliter Burger",
      category: "burger",
      price: "40.000",
      image: "Assets/compiter-burger.jpg",
    },

    {
      productName: "Beef Pizza",
      category: "pizza",
      price: "50.000",
      image: "Assets/pizza-beef.jpg",
    },
    {
      productName: "Tuna Pizza",
      category: "pizza",
      price: "40.000",
      image: "Assets/pizza-tuna.jpg",
    },
    {
      productName: "Tuna With Onion Pizza",
      category: "pizza",
      price: "40.000",
      image: "Assets/pizza-tuna-onion.jpg",
    },
    {
      productName: "Chicken With Beef Pizza",
      category: "pizza",
      price: "40.000",
      image: "Assets/pizza-chicken.jpg",
    },
    {
      productName: "Milkshake Chollate",
      category: "drink",
      price: "15.000",
      image: "Assets/milshake.jpg",
    },
    {
      productName: "Lime Soda",
      category: "drink",
      price: "15.000",
      image: "Assets/lime-soda.jpg",
    },
    {
      productName: "Black Soda",
      category: "drink",
      price: "15.000",
      image: "Assets/black-soda.jpg",
    },
    {
      productName: "Blue Ocean",
      category: "drink",
      price: "15.000",
      image: "Assets/blue-ocean.jpg",
    },
    {
      productName: "Fries",
      category: "fries",
      price: "10.000",
      image: "Assets/potato.png",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "Rp" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};