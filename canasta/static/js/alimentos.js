function cambioCeviches(button){
    let nombreCeviche = document.getElementById("nomCeviche");
    let ingredientesCeviche = document.getElementById("ingrCeviche");
    let imagenCeviche = document.getElementById("imgCeviche");
    let precioCeviche = document.getElementById("prcCeviche");
    let descripcionCeviche = document.getElementById("descrCeviche");
    let opcionCeviche = button.getAttribute("data-value");

    switch (opcionCeviche) {
        case "1":
            nombreCeviche.innerText = "Ceviche de Mariscos";
            ingredientesCeviche.innerText = "Limon, Mariscos, Cebolla morada, ciboulette";
            imagenCeviche.src = "img/Ceviche de mariscos.jpg";
            precioCeviche.innerText = "$2500";
            descripcionCeviche.innerText = "Surtido de mariscos, con una buena cantidad de limon, cebolla morada y un toque de ciboullete";
            break;
        case "2":
            nombreCeviche.innerText = "Ceviche de Mariscos con Piure";
            ingredientesCeviche.innerText = "Limon, Mariscos, Cebolla Morada, ciboulette, Piure";
            imagenCeviche.src = "img/Ceviche de piure.jpg";
            precioCeviche.innerText = "$3000";
            descripcionCeviche.innerText = "Surtido de mariscos, con una buena cantidad de limon, cebolla morada y un toque de ciboullete con piure";
            break;
        case "3":
            nombreCeviche.innerText = "Ceviche de Salmon";
            ingredientesCeviche.innerText = "Limon, Salmon, Cebolla morada, ciboulette";
            imagenCeviche.src = "img/Ceviche de salmon.jpg";
            precioCeviche.innerText = "$3000";
            descripcionCeviche.innerText = "Surtido de Salmon, con una buena cantidad de limon, cebolla morada y un toque de ciboullete";
            break;
        case "4":
            nombreCeviche.innerText = "Ceviche de Salmon con Camarones";
            ingredientesCeviche.innerText = "Limon, Salmon, Cebolla morada, ciboulette, Camarones";
            imagenCeviche.src = "img/ceviche de salmon con camarones.jpg";
            precioCeviche.innerText = "$3500";
            descripcionCeviche.innerText = "Surtido de salmon, con una buena cantidad de limon, cebolla morada y un toque de ciboullete con camarones";
            break;
        case "5":
            nombreCeviche.innerText = "Ceviche de Reineta";
            ingredientesCeviche.innerText = "Limon, Reineta, Cebolla morada, ciboulette";
            imagenCeviche.src = "img/CevicheReineta.jpg";
            precioCeviche.innerText = "$2500";
            descripcionCeviche.innerText = "Surtido de Reineta, con una buena cantidad de limon, cebolla morada y un toque de ciboullete";
            break;
        case "6":
            nombreCeviche.innerText = "Ceviche de Reineta con Camarones";
            ingredientesCeviche.innerText = "Limon, Reineta, Cebolla morada, ciboulette, camarones";
            imagenCeviche.src = "img/Ceviche de reineta con camarones.jpg";
            precioCeviche.innerText = "$3000";
            descripcionCeviche.innerText = "Surtido de reineta, con una buena cantidad de limon, cebolla morada y un toque de ciboullete con camarones";
            break;
    }
}

function cambioPlatos(button){
    let nombrePlato = document.getElementById("nomPlato");
    let ingredientesPlato = document.getElementById("ingrPlato");
    let imagenPlato = document.getElementById("imgPlato");
    let precioPlato = document.getElementById("prcPlato");
    let descripcionPlato = document.getElementById("descrPlato");
    let opcionPlato = button.getAttribute("data-value");

    switch (opcionPlato){
        case "1":
            nombrePlato.innerText = "Trio Marino";
            ingredientesPlato.innerText = "Reineta, Camarones, Champiñones, Ciboullete";
            imagenPlato.src = "img/TrioMarino.jpg"
            precioPlato.innerText = "$6500";
            descripcionPlato.innerText = "Paila de reineta con camarones y champiñones.";
            break;
        case "2":
            nombrePlato.innerText = "Ostiones a la Parmesana";
            ingredientesPlato.innerText = "10 Ostiones, Mantequilla, Cebolla Picada, Crema, Vino blanco";
            imagenPlato.src = "img/OstionesCarrucel.jpg"
            precioPlato.innerText = "$10000";
            descripcionPlato.innerText = "PLatillo consistente en 10 Ostiones preparados en un mix de mantequilla, cebolla picada, crema y vino blanco";
            break;
        case "3":
            nombrePlato.innerText = "Salmon con Papas a la Plancha";
            ingredientesPlato.innerText = "1 filete de salmon, una porcion de papas a la negra, salsa de camaron";
            imagenPlato.src = "img/SalmonPlancha.jpg"
            precioPlato.innerText = "$9000";
            descripcionPlato.innerText = "Salmon a la plancha bañado en salsa de camarones con papas al estilo La Negra.";
            break;
        case "4":
            nombrePlato.innerText = "Pastel de Jaiva";
            ingredientesPlato.innerText = "Pastelera de choclo, pino de jaiva.";
            imagenPlato.src = "img/PastelJaiva1.jpg"
            precioPlato.innerText = "$8000";
            descripcionPlato.innerText = "Es el pastel de jaiva, ese clasico de la costa, aqui, ahora, esperando por ti.";
            break;
        case "5":
            nombrePlato.innerText = "Paila Marina";
            ingredientesPlato.innerText = "Mariscos, surtido de camarones, papas, y pulpitos.";
            imagenPlato.src = "img/Mariscal.jpg"
            precioPlato.innerText = "$6000";
            descripcionPlato.innerText = "una buena cantidad de mariscos, con un surtido de camarones, papitas y pulpito.";
            break;
        case "6":
            nombrePlato.innerText = "Paila Marina";
            ingredientesPlato.innerText = "1 filete de pescado con arroz y ensalada";
            imagenPlato.src = "img/Colacion 1.jpg"
            precioPlato.innerText = "$6500";
            descripcionPlato.innerText = "Una colacion de pescado frio con arroz y ensalada.";
            break;
    }
}

function cambioSandwiches(button){
    let nombreSandwich = document.getElementById("nomSand");
    let ingredientesSandwich = document.getElementById("ingrSand");
    let imagenSandwich = document.getElementById("imgSand");
    let precioSandwich = document.getElementById("prcSand");
    let descripcionSandwich = document.getElementById("descrSand");
    let opcionSandwich = button.getAttribute("data-value");
    switch(opcionSandwich){
        case "1":
            nombreSandwich.innerText = "Terucazo Doble";
            ingredientesSandwich.innerText = "2 filetes de pescado, cebolla morada, tomate, ciboulette.";
            imagenSandwich.src = "img/TerucazoDoble.jpg"
            precioSandwich.innerText = "$7000";
            descripcionSandwich.innerText = "Sandwich compuesto por 2 filetes de pescado, cebolla morada, tomate, ciboulette.";
            break;
        case "2":
            nombreSandwich.innerText = "Terucazo";
            ingredientesSandwich.innerText = "1 filetes de pescado, cebolla morada, tomate, ciboulette.";
            imagenSandwich.src = "img/TerucazoSimple.jpg"
            precioSandwich.innerText = "$5000";
            descripcionSandwich.innerText = "Sandwich compuesto por 1 filetes de pescado, cebolla morada, tomate, ciboulette.";
            break;
        case "3":
            nombreSandwich.innerText = "Empanas de Mariscos";
            ingredientesSandwich.innerText = "Mariscos";
            imagenSandwich.src = "img/Empanada de mariscos.jpg"
            precioSandwich.innerText = "$5000";
            descripcionSandwich.innerText = "Empanada frita de mariscos";
            break;
    }
}


function mostrarCeviches(){
    let url = 'http://localhost:3300/ceviches'
    fetch(url)

    const ceviches = (data) => {
        let body = ""
        for(var i=0; i<data.length; i++){
            body += `<tr>
            <td><img src="${data[i].imagen}" class="rounded-3 m-3" width="200px" height="200px" alt="${data[i].name}"></td>
            <td class="lora">${data[i].name}</td>
            <td class="lora">${data[i].ingredientes}</td>
            <td class="sora">${data[i].descripcion}</td>
        </tr>`
        }
        document.getElementById("ceviches").innerHTML = body
    }
}

function mostrarPlatos(){
    let url = 'http://localhost:3300/platos'
    fetch(url)
    .then(response => response.json())
    .then(data => platos(data))
    .catch(error => console.log(error))

    const platos = (data) => {
        let body = ""
        for(var i=0; i<data.length; i++){
            body += `<tr>
            <td><img src="${data[i].imagen}" class="rounded-3 m-3" width="200px" height="200px" alt="${data[i].name}"></td>
            <td class="lora">${data[i].name}</td>
            <td class="lora">${data[i].ingredientes}</td>
            <td class="sora">${data[i].descripcion}</td>
        </tr>`
        }
        document.getElementById("platos").innerHTML = body
    }
}

function mostrarSandwiches(){
    let url = 'http://localhost:3300/sandwiches'
    fetch(url)
    .then(response => response.json())
    .then(data => sandwiches(data))
    .catch(error => console.log(error))

    const sandwiches = (data) => {
        let body = ""
        for(var i=0; i<data.length; i++){
            body += `<tr>
            <td><img src="${data[i].imagen}" class="rounded-3 m-3" width="150px" height="150px" alt="${data[i].name}"></td>
            <td class="lora">${data[i].name}</td>
            <td class="lora">${data[i].ingredientes}</td>
            <td class="sora">${data[i].descripcion}</td>
        </tr>`
        }
        document.getElementById("sandwiches").innerHTML = body
    }
}

