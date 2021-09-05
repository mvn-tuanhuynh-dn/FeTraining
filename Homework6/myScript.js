var product = [
    {
        'id': 1,
        'name': 'Product 1',
        'price': 100000,
        'oldPrice': 90000,
        'image1': './img/imgPro1.jpeg',
        'image2': './img/imgPro2.jpeg'
    },
    {
        'id': 2,
        'name': 'Product 2',
        'price': 200000,
        'oldPrice': 180000,
        'image1': './img/imgPro3.jpeg',
        'image2': './img/imgPro4.jpeg'
    },
    {
        'id': 3,
        'name': 'Product 3',
        'price': 300000,
        'oldPrice': 280000,
        'image1': './img/imgPro1.jpeg',
        'image2': './img/imgPro2.jpeg'
    },
    {
        'id': 4,
        'name': 'Product 4',
        'price': 120000,
        'oldPrice': 30000,
        'image1': './img/imgPro3.jpeg',
        'image2': './img/imgPro4.jpeg'
    },
    {
        'id': 5,
        'name': 'Product 5',
        'price': 210000,
        'oldPrice': 200000,
        'image1': './img/imgPro1.jpeg',
        'image2': './img/imgPro2.jpeg'
    },
    {
        'id': 6,
        'name': 'Product 6',
        'price': 230000,
        'oldPrice': 190000,
        'image1': './img/imgPro3.jpeg',
        'image2': './img/imgPro4.jpeg'
    },
    {
        'id': 7,
        'name': 'Product 7',
        'price': 4300000,
        'oldPrice': 340000,
        'image1': './img/imgPro1.jpeg',
        'image2': './img/imgPro2.jpeg'
    },
    {
        'id': 8,
        'name': 'Product 8',
        'price': 230000,
        'oldPrice': 200000,
        'image1': './img/imgPro3.jpeg',
        'image2': './img/imgPro4.jpeg'
    }
];

var $btnAddProduct = document.getElementById('add-to-cart');
var LOCAL_KEY = 'PRODUCTS';
var cartNumber = 0;

// function genProductItem(product) {
//     var li = document.createElement('li');
//     var btn = document.createElement('button');
//     var id = randomID();
//     btn.innerText = 'Remove';
//     btn.setAttribute('data-product-id', id);
//     li.innerHTML = content;
//     li.classList.add('cart-item');
//     li.appendChild(btn);
//     addItemToLocal(content, id);
//     return li;
// }

// function randomID() {
//     return Math.floor(Math.random() * 999999);
// }

function getLocaProduct() {
    return localStorage.getItem(LOCAL_KEY) ? JSON.parse(localStorage.getItem(LOCAL_KEY)) : [];
}

function setLocalProduct(product) {
    return localStorage.setItem(LOCAL_KEY, JSON.stringify(product));
}

function updateCartNum(e) {
    var cartBadge = document.getElementById('cart-badge');
    cartNumber += e;
    cartBadge.innerHTML = cartNumber;
}

function selectItem(array, key, value) { 
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return i;
        } 
    }
    return -1;
}

function addItemToLocal(id) {
    var getProduct = getLocaProduct();
    var indexCart = getProduct.length !== 0 ? selectItem(getProduct,'id', +id): -1;
    if (indexCart === -1) {
        getProduct.push({
            'id': +id,
            'amount': 1
        })
    } else {
        getProduct[indexCart]['amount'] += 1;
    }
    setLocalProduct(getProduct);
    updateCartNum(1);
}

function removeItemFromLocal(id) {
    var getProduct = getLocaProduct();
    var indexRemoveItem = selectItem(getProduct, 'id', +id);
    var removeAmount = getProduct[indexRemoveItem]['amount']
    var newCart = getProduct.filter(function (e) {
        return e.id !== +id;
    })
    setLocalProduct(newCart);
    updateCartNum(-removeAmount);
}

function loadLocalToUI() {
    var getProduct = getLocaProduct();
    var $productList = document.querySelector('.products-list');
    var cartBadge = document.getElementById('cart-badge');
    var html = '';
    product.forEach(function (e) {
        html += `<li class="product-item col-3" id="`+ e.id +`">
                    <div class="product-img">
                        <a href="#">
                            <div class="img-slide">
                                <img src="`+ e.image1 + `" alt="product image 1">
                                <div class="overlay">
                                    <img src="`+ e.image2 + `" alt="product image 2">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="product-information">
                        <div class="title-price">
                            <h3><a href="#">`+ e.name +`</a></h3>
                            <div class="price">
                                <span>`+ e.price + `VND</span>
                                <span class="old">`+ e.oldPrice + `VND</span>
                            </div>
                        </div>
                    </div>
                    <div class="add-to-cart">
                        <button title="Add to cart" id="add-to-cart" class="btn add-item">
                            Add Product
                        </button>
                    </div>
                </li>`
    });
    $productList.innerHTML = html;
  
    if(getProduct.length === 0) {
        cartBadge.classList.add('hide');
    } else {
        for(var i in getProduct) {
            cartNumber += getProduct[i]['amount'];
        }
    }
    cartBadge.innerHTML = cartNumber;
};
  
window.onload = function productPage() {
    loadLocalToUI();

    var $productList = document.querySelector('.products-list');
    $productList.addEventListener('click', function(e) {
        if(e.target.className === 'btn add-item') {
            e.preventDefault();
            addItemToLocal(e.target.parentElement.dataset.id);
        }
    })
};

