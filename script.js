let item1 = {
  id: 1,
  search: "burger",
  name: "chicken burger special",
  price: 520,
  rating: 4.8,
  img: "./assets/burger1.jpg",
};
let item2 = {
  id: 2,
  search: "burger",
  name: "Cheese burger hunger",
  price: 480,
  rating: 4.2,
  img: "./assets/burger2.jpg",
};
let item3 = {
  id: 3,
  search: "burger",
  name: "Italian burger Hunger",
  price: 450,
  rating: 3.5,
  img: "./assets/burger3.jpg",
};
let item4 = {
  id: 4,
  search: "pizza",
  name: "Italian pizza",
  price: 400,
  rating: 3.9,
  img: "./assets/pizza1.jpg",
};
let item5 = {
  id: 5,
  search: "pizza",
  name: "Chesse veg pizza",
  price: 430,
  rating: 4.5,
  img: "./assets/pizza2.jpg",
};
let item6 = {
  id: 6,
  search: "pizza",
  name: "chicken nonveg pizza",
  price: 500,
  rating: 4.4,
  img: "./assets/pizza3.jpg",
};
let item7 = {
  id: 7,
  search: "pizza",
  name: "Margreta butter pizza",
  price: 520,
  rating: 5.0,
  img: "./assets/pizza4.jpg",
};
let item8 = {
  id: 8,
  search: "sandwich",
  name: "butter loaded sandwich",
  price: 1000,
  rating: 3.4,
  img: "./assets/sandwich1.jpg",
};
let item9 = {
  id: 8,
  search: "sandwich",
  name: "delight sandwich",
  price: 220,
  rating: 4.8,
  img: "./assets/sandwich2.jpg",
};
let item10 = {
  id: 10,
  search: "sandwich",
  name: "Chesse Grill sandwich",
  price: 520,
  rating: 4.8,
  img: "./assets/sandwich3.jpg",
};
let item11 = {
  id: 11,
  search: "sandwich",
  name: "sausage sandwich",
  price: 120,
  rating: 4.8,
  img: "./assets/sandwich3.jpg",
};
let item12 = {
  id: 12,
  search: "noodles",
  name: "Spicy garlic noodles",
  price: 80,
  rating: 3.0,
  img: "./assets/noodle1.jpg",
};
let item13 = {
  id: 13,
  search: "noodles",
  name: "Veg hakka noodles",
  price: 230,
  rating: 3.6,
  img: "./assets/noodle2.jpg",
};
let item14 = {
  id: 14,
  search: "noodles",
  name: "Chicken Hakka noodles",
  price: 150,
  rating: 4.6,
  img: "./assets/noodle3.jpg",
};
const items = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
];
const inputFood = document.querySelector(".input-search");
const container = document.querySelector(".main-container");
const containerItem = document.querySelector(".item-container");
const buttonSearch = document.querySelector(".search-button");
const pizzaBtn = document.querySelector(".pizza");
const burgerBtn = document.querySelector(".burger");
const sandwichBtn = document.querySelector(".sandwich");
const noodlesBtn = document.querySelector(".noodles");
function displayItems(img, name, rating, price) {
  let html = `<div class="item-container">
          <div class="img-box">
            <img
              src="${img}"/>
              
          </div>
            <div class="description">
              <div class="name">
                <p class="dish-name">Dish Name: ${name}</p>
              </div>
              <div class="rating-con">
                <p class="rating" >⭐ ${rating} Star is Coustmer's Rating</p><br>
              </div>
              <div class="price-con">
                <P class="price">Price : ${price} ₹ Only</P>
              </div>
                <div class="quan-con">
                  <p class="quan">Quantity : </p>
                </div>
                  <select name="" id=""></select>
                  <div class="order"><button class="now">Order now</button>
                  </div>
                  <div class="cart"><button class="add">Add to cart</button>
                  </div>
              </div>
            </div>
          </div>
        </div>`;
  return html;
}
function displayAllitems() {
    container.innerHTML = "";
    items.forEach(function(item){
      let html = displayItems(item.img, item.name, item.rating, item.price);
      container.insertAdjacentHTML("afterbegin", html);
    });
  }


buttonSearch.addEventListener("click", function () {
  container.innerHTML = "";
  let inputValue = inputFood.value;
  const searchedItem = items.filter(function (el) {
    return el.search === inputFood.value;
  });
  if(inputValue === "all"){
    displayAllitems();
  }
  searchedItem.forEach(function (item) {
    let html = displayItems(item.img, item.name, item.rating, item.price);
    container.insertAdjacentHTML("afterbegin", html);
  });
});

pizzaBtn.addEventListener("click", function () {
  console.log("pizza");
  container.innerHTML = "";
  let pizzaArr = [item4, item5, item6, item7];
  pizzaArr.forEach(function (el) {
    let html = displayItems(el.img, el.name, el.rating, el.price);
    container.insertAdjacentHTML("afterbegin", html);
  });
});
noodlesBtn.addEventListener("click", function () {
  console.log("pizza");
  container.innerHTML = "";
  let noodlesArr = [item12, item13, item14];
  noodlesArr.forEach(function (el) {
    let html = displayItems(el.img, el.name, el.rating, el.price);
    container.insertAdjacentHTML("afterbegin", html);
  });
});
sandwichBtn.addEventListener("click", function () {
  console.log("pizza");
  container.innerHTML = "";
  let sandwichArr = [item8, item9, item10, item11];
  sandwichArr.forEach(function (el) {
    let html = displayItems(el.img, el.name, el.rating, el.price);
    container.insertAdjacentHTML("afterbegin", html);
  });
});
burgerBtn.addEventListener("click", function () {
  console.log("pizza");
  container.innerHTML = "";
  let burgerArr = [item1, item2, item3];
  burgerArr.forEach(function (el) {
    let html = displayItems(el.img, el.name, el.rating, el.price);
    container.insertAdjacentHTML("afterbegin", html);
  });
});
