function mostrarDiasFeriados(){
    let url = 'https://api.boostr.cl/feriados/en.json';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            fechas(data)
        })
        .catch(error => console.log(error))

    const fechas = (data) => {
        let body = "";
        for(var i=0; i<data.length; i++){
            body += `<tr>
                <td class="sora deoro">${data[i].title}</td>
                <td class="sora deoro">${data[i].type}</td>
                <td class="sora deoro">${data[i].date}</td>
                <td class="sora deoro">${data[i].inalienable}</td>
            </tr>`
        }
        document.getElementById('fechas').innerHTML = body;
    }
}