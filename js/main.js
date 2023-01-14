const renderDrinks = () => {
    const drinks = loadDrinksLS();
    let output = "";
  
    for (let drink of drinks) {
      output += `<div class="col-md-2 mb-4 mt-2">
                  <a href="#" onClick="seeDrink(${drink.id});" class="text-decoration-none text-light">
                    <div class"card">
                      <img src="img/energyDrinks/${drink.image}" alt="${drink.name}" class="card-img-top">
                      <div class="card-body text-center mt-3">
                        <h5 class="card-title mb-2">${drink.name}</h5>
                        <p>US$${drink.price}</p>
                      </div>
                    </div>
                  </a>
                </div>`;
    }
    document.getElementById("drinks").innerHTML = output;
}
  
renderDrinks();
renderCartButton();