"use strict";
//# sourceMappingURL=app.js.map

//zum vereinfachen nehme greife ich nicht auf die id sondern auf die
//klasse zu per querry

//variablen zugriff
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
4;
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
//selektiert das DIV
const productsDOM = document.querySelector(".products-center");
const btns = document.querySelectorAll(".bag-btn");

//main cart : mit ganzen informationen etc
let cart = [];

//buttons
let buttonsDOM = [];

// responsible class für getting products
class Products {
  //async await wird immer promise zurückgeben, brauchen für await
  async getProducts() {
    try {
      //await warten bis wir etwas zurückbekommen und dann durchführen
      let result = await fetch("products.json");
      let data = await result.json();
      //products hält data
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        //return clean object
        return { title, price, id, image };
      });
      return products;
      //wir bekommen die items zurück
    } catch (error) {
      console.log(error);
    }
  }
}
//produkte anzeigen
class UI {
  //call diese methode sobald wir die products bekommen
  displayProducts(products) {
    let result = "";
    //elemente des produkts nehmen und in html setzen zum anzeigen
    products.forEach((product) => {
      result += `
            <article class="product">
                <div class="img-container">
                    <img
                        src=${product.image}
                        alt="product"
                        class="product-img"
                    />
                    <button class="bag-btn" data-id=${product.id}>
                        <i class="fas fa-shopping-cart">ZUTAT HINZUFÜGEN</i>
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>${product.price}</h4>
            </article>   `;
    });
    productsDOM.innerHTML = result;
  }
  //bekommen buttons zurück nachdem wir sie geladen haben
  getBagButtons() {
    const buttons = /*[... macht zum array und keiner nodelist*/ [
      ...document.querySelectorAll(".bag-btn"),
    ];
    buttonsDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "Bereits gewählt";
        button.disabled = true;
      }
      button.addEventListener("click", (event) => {
        event.target.innerText = "Bereits gewählt";
        event.target.disabled = true;
        //bekommen product aus products
        let cartItem = { ...Storage.getProduct(id), ammount: 1 };
        //product zum eis hinzufügen
        cart = [...cart, cartItem];
        //im local storage speichern
        Storage.saveCart(cart);
        //cart values setzten
        this.setCartValues(cart);
        //display cart item
        this.addCartItem(cartItem);
        // eis anzeigen
        this.showCart();
      });
    });
  }
  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.price * item.ammount;
      itemsTotal += item.ammount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }
  addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<img src=${item.image} alt="Zutat" />
            <div>
              <h4>${item.title}</h4>
              <h5>$${item.price}</h5>
              <span class="remove-item" data-id=${item.id}>entfernen</span>
            </div>
            <div>
              <i class="fas fa-chevron-up" data-id=${item.id}></i>
              <p class="item-amount">${item.ammount}</p>
              <i class="fas fa-chevron-down" data-id=${item.id}></i>
            </div>`;
    cartContent.appendChild(div);
  }
  showCart() {
    //acces auf "hidden" bei klasse in css
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
  }
  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);
    cartBtn.addEventListener("click", this.showCart);
    closeCartBtn.addEventListener("click", this.hideCart);
  }
  populateCart(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }
  hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
  }
  cartLogic() {
    //clear cart Btn
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });
    //zum warenkorb cart Btn
    //cart funktionalität
    cartContent.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-item")) {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(removeItem.parentElement.parentElement);
        this.removeItem(id);
      } else if (event.target.classList.contains("fa-chevron-up")) {
        let addAmount = event.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.ammount = tempItem.ammount + 1;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        addAmount.nextElementSibling.innerText = tempItem.ammount;
      } else if (event.target.classList.contains("fa-chevron-down")) {
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        //brauchen nun logik damit wenn amount bei 0 ist, um das tempItem zu entfernen
        tempItem.ammount = tempItem.ammount - 1;
        if (tempItem.ammount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);
          lowerAmount.previousElementSibling.innerText = tempItem.ammount;
        } else {
          cartContent.removeChild(lowerAmount.parentElement.parentElement);
          this.removeItem(id);
        }
      }
    });
  }
  clearCart() {
    let cartItems = cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeItem(id));
    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    this.hideCart();
  }
  removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>ZUTAT HINZUFÜGEN`;
  }
  getSingleButton(id) {
    return buttonsDOM.find((button) => button.dataset.id === id);
  }
}
//local storage
class Storage {
  //reusen die methode
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static getCart() {
    return localStorage.getItem("cart")
      ? //wenn etwas da ist , dann : (?)
        JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener(
  "DOMContentLoaded",
  () /*arrow function syntax zum callen*/ => {
    const ui = new UI();
    const products = new Products();
    //setup app
    ui.setupAPP();

    //alle produkte bekommen
    //gleiches array in displayproducts weitergeben
    //.then will run only after adding ui.displayProdcuts
    products
      .getProducts()
      .then((products) => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
      })
      .then(() => {
        ui.getBagButtons();
        ui.cartLogic();
      });
    //brauchen hierfür keine neue instanz, benutzen eif die klasse
  }
);

//müssen jetzt die einträge im warenkorb in die database einfügen
