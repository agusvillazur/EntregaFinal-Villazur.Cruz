const storeDrinksCart = (drinks) => {
    localStorage.setItem("cart", JSON.stringify(drinks));
  }
  
  const loadDrinksCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  
  const seeDrink = (id) => {
    const drink = searchDrink(id);
    localStorage.setItem("drink", JSON.stringify(drink));
    location.href = "item-description.html";
  }
  
  const loadDrink = () => {
    return JSON.parse(localStorage.getItem("drink"));
  }
  
  const drinkInCart = (id) => {
    const cart_drinks = loadDrinksCart();
  
    return cart_drinks.some(item => item.id === id); 
  }
  
  const addToCart = (id) => {
    const cart_drinks = loadDrinksCart();
  
    if (drinkInCart(id)) {
      let position = cart_drinks.findIndex(item => item.id === id);
      cart_drinks[position].quantity += 1;
    }
    else {
      const drink = drinks.find(item => item.id === id);
      drink.quantity = 1;
      cart_drinks.push(drink);
    }
  
    storeDrinksCart(cart_drinks);
    renderCartButton();
  }
  
  const deleteItemCart = (id) => {
    const cart_drinks = loadDrinksCart();
    const drinks = cart_drinks.filter(item => item.id !== id);
    storeDrinksCart(drinks);
    renderDrinksCart();
    renderCartButton();
  }
  
  const emptyCart = () => {
    localStorage.removeItem("cart");
    renderDrinksCart();
    renderCartButton();
  }
  
  const totalCart = () => {
    const cart_drinks = loadDrinksCart();
  
    return cart_drinks.reduce((total, item) => total += item.quantity, 0);
  }
  
  const subtotal = () => {
    const cart_drinks = loadDrinksCart();
  
    return cart_drinks.reduce((total, item) => total += item.quantity * item.price, 0);
  }
  
  const tax = () => {
    const cart_drinks = loadDrinksCart();
    
    return cart_drinks.reduce((total, item) => total += item.quantity * item.price * 0.075, 0);
  }
  
  const sumCart = () => {
    const cart_drinks = loadDrinksCart();
  
    return cart_drinks.reduce((total, item) => total += item.quantity * item.price + item.quantity * item.price * 0.075, 0);
  }
  
  const renderCartButton = () => {
    let output = `<button type="button" class="btn btn-cart position-relative text-light">
                    <img src="img/logo/logoCart.png" alt="Cart">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light">${totalCart()}</span>
                  </button>`;
    document.getElementById("cart_button").innerHTML = output;
  }
  
  const addDrinkItem = (id) => {
    const cart_drinks = loadDrinksCart();
    let position = cart_drinks.findIndex(item => item.id === id);
    cart_drinks[position].quantity += 1;
    storeDrinksCart(cart_drinks);
    renderDrinksCart();
    renderCartButton();
  }
  
  const deleteDrinkItem = (id) => {
    const cart_drinks = loadDrinksCart();
    let position = cart_drinks.findIndex(item => item.id === id);
    cart_drinks[position].quantity -= 1;
  
    if (cart_drinks[position].quantity == 0) {
      deleteItemCart(id);
    }
    else {
      storeDrinksCart(cart_drinks);
      renderDrinksCart();
      renderCartButton();
    }
  }
  
  const searchDrink = (id) => {
    return drinks.find(item => item.id === id);
}