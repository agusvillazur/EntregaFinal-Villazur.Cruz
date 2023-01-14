const renderDrink = () => {
    const drink = loadDrink();
    let output = `<div class="col-4">
                    <img src="img/energyDrinks/${drink.image}" alt="${drink.name}" class="img-fluid ps-3">
                  </div>
                  <div class="col-8">
                    <h2>${drink.name}</h2>
                    <h5 class="pt-1 pb-1">${drink.category}</h5>
                    <p class="pt-1 pb-1">${drink.description}</p>
                    <p>US$${drink.price}</p>
                    <p><a href="#" class="btn btn-info" onClick="addToCart(${drink.id});">Add (+)</a></b></p>
                  </div>`;
    
    document.getElementById("drink").innerHTML = output;
}
  
renderDrink();
renderCartButton();