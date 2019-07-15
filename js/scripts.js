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




function productTemplate(product) {
  return `
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
      <div class="card">
        <img class="card-img-top" src="${product.image}" alt="">
        <div class="card-body">
          <h4 class="card-title">${product.name}</h4>
          <p class="card-text">
            <span>Price:  </span></spa><span class="price">${product.price}</span>
          </p>
          <a href="#" class="btn btn-outline-secondary" data-toggle="modal" data-target="#model_${product.id}">Rent this item</a>        
        </div>
      </div>
    </div>

    <div class="modal fade text-left" id="model_${product.id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${product.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>

          <form class="needs-validation" novalidate>
          <div class="modal-body">
            <div class="form-row">
              <div class="col-md-6 mb-2">
              <label for="validationCustom01" class="col-form-label-sm">First name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="" required>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Name?</div>
              </div>
              <div class="col-md-6 mb-2">
              <label for="validationCustom02" class="col-form-label-sm">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="" required>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Surname?</div>
              </div>
              <div class="col-md-12 mb-2">
              <label for="validationCustom03" class="col-form-label-sm">Email</label>
                <input type="email" class="form-control" id="validationCustom03" placeholder="Email" required>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please enter your email.</div>
              </div>
              <div id="pickup_date" class="col-md-6 mb-2">              
                <label for="validationCustom04" class="col-form-label-sm">Pickup Date:</label>
                <input type="date" class="startdate date-check form-control" id="pick_date_${product.id}" name="pickup_date" onchange="cal(${product.id}, ${product.price});GetTotal(${product.price})" required/>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Pick a day</div>
              </div>
              <div id="dropoff_date" class="form-group col-md-6 mb-2validate-me">              
                <label for="validationCustom05" class="col-form-label-sm">Dropoff Date:</label>
                <input type="date" class="enddate date-check form-control" id="drop_date_${product.id}" name="dropoff_date" onchange="cal(${product.id}, ${product.price});GetTotal(${product.price})" required/>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Pick a day</div>
              </div>
              <div id="numdays" class="col-md-6 mb-2">        
                <label class="col-form-label-sm">Number of days:</label>
                <input type="text" class="form-control" id="numdays_${product.id}" name="numdays" disabled/>
              </div>
              <div class="col-md-6 mb-2">        
                <label class="col-form-label-sm">Total Amount in $ :</label>
                <input class="form-control" size=12 type="text" name="total" id="total_${product.id}" disabled>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

document.getElementById("rentals").innerHTML = `
  <div class="row">${productData.map(productTemplate).join("")}</div>
`;


function GetDays(id){
  let dropdt = new Date(document.getElementById("drop_date_" + id).value);
  let pickdt = new Date(document.getElementById("pick_date_" + id).value);
  return parseInt((dropdt - pickdt) / (24 * 3600 * 1000));
}

function cal(id, price){
  if(document.getElementsByClassName("drop_date_" + id)){
    let result = GetDays(id)
    if(isNaN(result)){
      result="Please fill out both dates"
    } else{
      let rentalPrice = price * result;
      document.getElementById("numdays_" + id).value=result;
      document.getElementById("total_" + id).value=rentalPrice;
    }
  }

}  
function GetTotal(price){
  let itemPrice = price;
  console.log("price:" + itemPrice + "!");
  var valueDate = document.getElementsByClassName("date-check").value;
}



(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {        
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log("fail");
        }
        else {
          alert("Rental confirmed.");
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
  








