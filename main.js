var menuEmail = document.querySelector('.navbar-email');
var menuDesktop = document.querySelector('.desktop-menu');
var menuMobile = document.querySelector('.mobile-menu');
var logoMenu = document.querySelector('.menu');
var shopMenu = document.querySelector('.navbar-shopping-cart');
var producDetail = document.querySelector('.product-detail');
var cardsContainer = document.querySelector('.cards-container');
let cartQuantity = document.getElementById('cart_quantity');

var cartItemsQuantity = 0;
var totalPrice = 0;


menuEmail.addEventListener('click', toggleMenuDesktop);
logoMenu.addEventListener('click', toggleMenuMobile);
shopMenu.addEventListener('click', toggleMenuShop);


function toggleMenuDesktop() {
    var isAsideClosed = producDetail.classList.contains('inactive');

    if (!isAsideClosed) {
        producDetail.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive'); // agrega o quita la class inactive
}

function toggleMenuMobile() {
    var isAsideClosed = producDetail.classList.contains('inactive');

    if (!isAsideClosed) {
        producDetail.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');


};

function toggleMenuShop() {
    var isMenuMobileClosed = menuMobile.classList.contains('inactive');

    if (!isMenuMobileClosed) {
        menuMobile.classList.add('inactive');
    }
    producDetail.classList.toggle('inactive');
};



document.addEventListener('DOMContentLoaded', () => {
    const productList = [
        {
            name: 'Bike',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            name: 'TV Samsung',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            name: 'Licuadora Imusa',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            name: 'Horno Microondas',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    ];

    const cardsContainer = document.getElementById('cards-container');

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div>
                    <p>$${product.price.toFixed(2)}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img  src="./icons/bt_add_to_cart.svg" alt="Add to cart" class = "add" 
                    data-product-name="${product.name}"
                    data-product-price="${product.price}"
                    data-product-image="${product.image}">
                </figure>
            </div>
        `;
        const addProduct = productCard.querySelector('.add');
        addProduct.addEventListener('click', addQuantityToCart); // cuando está sin atributos no se llama la funcion inmediatamente
        addProduct.addEventListener('click', function () { // aqui sí está con atributos por lo que toca declarar la funcion
            addItemToOrder(addProduct.getAttribute('data-product-name'),
                addProduct.getAttribute('data-product-price'), addProduct.getAttribute('data-product-image'))
        });      

        cardsContainer.appendChild(productCard );
    });

});

function addItemToOrder(name, price, image) {
    let myOrderContent = document.getElementById('my-order-content');
    let myOrder = document.createElement('div');
    let figure = document.createElement('figure');
    let productImage = document.createElement('img');
    let productName = document.createElement('p');
    let productPrice = document.createElement('p');
    let closeImage = document.createElement('img');

    myOrder.classList.add('shopping-cart');
    myOrder.setAttribute('id', 'my-order');
    productImage.setAttribute('src', image)
    productImage.setAttribute('alt', name)
    figure.appendChild(productImage);
    productName.innerText = name;
    productPrice.innerText = price;
    closeImage.setAttribute('src', './icons/icon_close.png');
    closeImage.setAttribute('id', 'product-close');
    myOrder.append(figure, productName, productPrice, closeImage);
    myOrderContent.appendChild(myOrder);
    getTotalPrice('a', price);
    removeItemFromOrder(myOrderContent, myOrder, closeImage, price); 
}

function addQuantityToCart() {
    cartItemsQuantity++;
    cartQuantity.textContent = cartItemsQuantity
    window.alert("Item has been added to cart!")
}


function getTotalPrice(type, price) {
    if (type === 'r') {
        totalPrice -= Number(price);
    } else {
        totalPrice += Number(price);
    }
    total.innerText = totalPrice;
}

function removeItemFromOrder(myOrderContent,myOrder, closeImage, price) {
    closeImage.addEventListener('click', 
        function () { getTotalPrice('r', price)
    });  
    
    closeImage.addEventListener('click',  
        function () { myOrderContent.removeChild(myOrder)
    });

    closeImage.addEventListener('click', removeItemFromCart);
    
}

function removeItemFromCart(){
    cartItemsQuantity--;
    cartQuantity.textContent = cartItemsQuantity
    window.alert("Item has been removed from cart!")
}


