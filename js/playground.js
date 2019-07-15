const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];
  
function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return "1 year old";
  } else if (calculatedAge == 0) {
    return "Baby";
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map(food => `<li>${food}</li>`).join("")}
  </ul>
`;
}

function petTemplate(pet) {
  return `
    <div class="animal">
    <img class="pet-photo" src="${pet.photo}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
    ${pet.favFoods ? foods(pet.favFoods) : ""}
    </div>
  `;
}





/***************/
/***************/
/***************/
/***************/
/***************/
/***************/

/*************************************** 
    bike rentals product json   
****************************************/
const productData = [
  {
    "id": 1,
    "name": "Adult Male Bike",
    "price": 20.50,
    "image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
    "product_type": "bike"
  },
  {
    "id": 2,
    "name": "Adult Female Bike",
    "price": 20.50,
    "image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
    "product_type": "bike"
  },
  {
    "id": 3,
    "name": "Kids Unisex Bike",
    "price": 12.75,
    "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
    "product_type": "bike"
  },
  {
    "id": 4,
    "name": "Adult Unisex Helmet",
    "price": 4.00,
    "image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
    "product_type": "accessory"
  },
  {
    "id": 5,
    "name": "Kids Unisex Helmet",
    "price": 3.50,
    "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
    "product_type": "accessory"
  },
  {
    "id": 6,
    "name": "Insurance",
    "price": 9.99,
    "image": "http://via.placeholder.com/250x250?text=Insurance",
    "product_type": "addon"
  }
];

function processRental(id, price) {
  console.log("click " + " price:" + price, "id:" + id);
}


function productTemplate(product) {
  return `
    <li class="ProductGridItem">
      <div class="ProductGridItem-image">
        <a>
          <img src="${product.image}" width="100%" height="" alt="">
        </a>
      </div>
      <div class="ProductGridItem-details">
        <a>
          <p class="title u-align-left">${product.name}</p>
        </a>
        <div class="item-type u-align-left">
          <p>${product.product_type}</p>
        </div>
        <div class="gender u-align-left">
          <p>${product.id}</p>
        </div>
        <div class="availability u-align-right">
          <span class="price">${product.price}</span>            
        </div>
        <div class="item-action" onclick="processRental(${product.id}, ${product.price});">Rent this item</div>
      </div>

      <div id="rental-form">
        <div id="pickup_date">
          <p><label class="form">Pickup Date:</label></p>
          <input type="date" class="textbox" id="pick_date_${product.id}" name="pickup_date" onchange="cal(${product.id});GetTotal(${product.price})"/>
        </div>

        <div id="dropoff_date">
          <p><label class="form">Dropoff Date:</label></p>
          <input type="date" class="textbox" id="drop_date_${product.id}" name="dropoff_date" onchange="cal(${product.id});GetTotal(${product.price})"/>
        </div>

        <div id="numdays">
          <p><label class="form">Number of days:</label></p>
          <input type="text" class="textbox" id="numdays_${product.id}" name="numdays" disabled/>
        </div>

        <p>Total Amount in $ </p>
        <input size=12 type="text" name="total" id="total_${product.id}" disabled>

      </div>

    </li>
  `;
}

document.getElementById("products").innerHTML = `
  <div class="Collection-header">
    <p>(${productData.length} results)</p>
  </div>
  <ul class="Collection-productGrid">${productData.map(productTemplate).join("")}</ul>
  <p class="Collection-footer">These ${productData.length} products were added recently. Check back soon for updates.</p>
`;
  







// <form name=myform>
    //   <h4>Enter the item you wish to rent using the list below:
    //   <input size=12 type="text" name="numb1">
    //   </h4>
    //   <li> Books = $300 per week
    //   <li> Calculator = $200 per week
    //   <li> Computer = $100 per week
    //   <li> Camera = $50 per week
    //   <h4> Select how many weeks you wish to rent: </h4>
    //   <p>
    // </form>





// function processit() {
//     targetPrice=document.getElementById("numb1").value;

//     perweek=0;

//     if (targetPrice == 'Books') { perweek=300; }
//     if (targetPrice == 'Calculator') { perweek=200; }
//     if (targetPrice == 'Computer') { perweek=100; }
//     if (targetPrice == 'Camera') { perweek= 50; }
//     return perweek
// }

function GetDays(id){
  let dropdt = new Date(document.getElementById("drop_date_" + id).value);
  let pickdt = new Date(document.getElementById("pick_date_" + id).value);
  return parseInt((dropdt - pickdt) / (24 * 3600 * 1000));
}

function cal(id){
  if(document.getElementById("drop_date_" + id)){
    let result = GetDays(id)
    if(isNaN(result)){
      result="Please fill out both dates"
    }
    document.getElementById("numdays_" + id).value=result;
  }
  console.log("numdays:" + result);
}  
function GetTotal(price){
  let itemPrice = price;
  console.log("price:" + itemPrice + "!");

  // var price = processit(document.getElementById("numb1").value)
  // var duration = document.getElementById("numdays_" + id).value
  //   var total = Math.floor((price*(0.8*(duration)))*100)/100;
  //   if(isNaN(total)){total="Please fill out both dates"}
  //   document.getElementById("total").value = total
}