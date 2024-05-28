function motorReloj(){
    const actual = new Date();
    const horas = String(actual.getHours()).padStart(2,'0');
    const minutos = String(actual.getMinutes()).padStart(2,'0');
    const segundos = String(actual.getSeconds()).padStart(2,'0');

    const horaActual = `${horas}:${minutos}:${segundos}`

    document.getElementById('reloj').innerText = horaActual;
}
setInterval(motorReloj, 1000);
motorReloj();