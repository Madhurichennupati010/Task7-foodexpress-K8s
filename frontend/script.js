const foods = [

{
    id:1,
    name:"Chicken Biryani",
    price:249,
    image:"https://placehold.co/600x400?text=Chicken+Biryani"
},

{
    id:2,
    name:"Veg Pizza",
    price:349,
    image:"https://placehold.co/600x400?text=Veg+Pizza"
},

{
    id:3,
    name:"Cheese Burger",
    price:199,
    image:"https://placehold.co/600x400?text=Cheese+Burger"
},

{
    id:4,
    name:"White Sauce Pasta",
    price:229,
    image:"https://placehold.co/600x400?text=Pasta"
}

];

const featured=document.getElementById("featuredFoods");

if(featured){

foods.forEach(food=>{

featured.innerHTML+=`

<div class="col-md-3 mb-4">

<div class="card h-100">

<img src="${food.image}" class="card-img-top">

<div class="card-body text-center">

<h5 class="card-title">

${food.name}

</h5>

<p class="price">

₹${food.price}

</p>

<button class="btn btn-danger"

onclick="addToCart(${food.id})">

Add to Cart

</button>

</div>

</div>

</div>

`;

});

}

function addToCart(id){

let cart=JSON.parse(localStorage.getItem("cart"))||[];

let item=foods.find(f=>f.id===id);

cart.push(item);

localStorage.setItem("cart",JSON.stringify(cart));

alert(item.name+" added to cart!");

}