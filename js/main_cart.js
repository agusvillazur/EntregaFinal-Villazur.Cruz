const renderDrinksCart = () => {
    const cart_drinks = loadDrinksCart();
    let output = ""
  
    if (totalCart() > 0) {
      output = `<table class="table">
                  <tbody>
                    <tr>
                      <td colspan="5" class="text-end"><a href="#" class="btn btn-info" onClick="emptyCart()">Delete Cart<img src="img/trash.png" alt="Delete Cart" width="24"></a></td>
                    </tr>`;
  
      for (let drink of cart_drinks) {
        output +=   `<tr>
                      <td class="pt-3 pb-3"><img src="img/energyDrinks/${drink.image}" alt="${drink.name}" width="96"></td>
                      <td class="align-middle fs-6 text-light"><b>Item:</b> ${drink.name}<br>
                      <td class="align-middle fs-6 pt-3 text-light"><button class="btn btn-light rounded" title="Delete Item" onClick="deleteDrinkItem(${drink.id})">-</button> ${drink.quantity} x US$${drink.price} <button class="btn btn-light rounded" title="Add Item" onClick="addDrinkItem(${drink.id})">+</button></td>
                      <td class="align-middle text-start pt-3 fs-6 text-light">US$${(drink.quantity * drink.price).toFixed(2)}</td>
                      <td class="align-middle text-end"><a href="#" title="Delete Item"><img src="img/trash.png" alt="Delete Item" onClick="deleteItemCart(${drink.id});" width="32"></a></td>
                    </tr>`;
      }
  
      output +=     `<tr>
                      <td colspan="3" class="fs-6 text-start text-light">Subtotal</td>
                      <td class="fs-6 text-start text-light">US$${subtotal().toFixed(2)}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="3" class="fs-6 text-start text-light">Estimated Tax</td>
                      <td class="fs-6 text-start text-light">US$${tax().toFixed(2)}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="3" class="fs-3 text-start text-light"><b>Total</b></td>
                      <td class="fs-3 text-start text-light"><b>US$${sumCart().toFixed(2)}</b></td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>`;
    }
    else {
      output = `<div class="alert alert-danger text-center" role="alert">You have no items added to the cart yet!</div>`
    }
  
    document.getElementById("drinks_selected").innerHTML = output;
  }

renderDrinksCart();
renderCartButton();