fetch('js/citys.json')
.then((response) => response.json())
.then((data) => {
    console.log(data);
    const result = document.getElementById("result");
    data.forEach(value => {
        let column = document.createElement("div");
        column.className = "col-md-3";
        let div_father = document.createElement("div");
        div_father.className = "card text-white bg-dark mb-4";
        let imagen = document.createElement("img");
        imagen.src = "./img/citys/"+value.imagen;
        imagen.alt = value.city;
        imagen.width = 250;
        let div_son2 = document.createElement("div");
        div_son2.className = "card-body text-center";
        let div_son1 = document.createElement("div");
        div_son1.className = "card-img-top text-center";
        let info = document.createElement("p");
        div_son2.innerHTML = `${value.city} <b>(${value.neighborhood})</b>`;
        info.innerText = value.attention_hours;
        div_son2.appendChild(info);
        div_son1.appendChild(imagen);
        div_father.appendChild(div_son1);
        div_father.appendChild(div_son2);
        column.appendChild(div_father);
        result.appendChild(column);
    });
})