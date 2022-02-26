let horas = 00
let minutos = 00
let segundos = 00

let tempo = 1000 //definição do tempo em segundos

function start(){
    cronometro = setInterval( timer , tempo)
    let button = document.getElementById("btn-start").disabled = true
    document.getElementById("btn-start").classList.add("disabled")
    document.getElementById("btn-stop").classList.add("stopButton")  
}
function pause(){
    clearInterval(cronometro)
    document.getElementById("btn-iniciar").disabled = false
}
function stop(){
    clearInterval(cronometro)
    horas = 0
    minutos = 0
    segundos = 0

    document.getElementById('cron').innerHTML = "00:00:00"
    document.getElementById("btn-start").disabled = false
    document.getElementById("btn-start").classList.remove("disabled")
    document.getElementById("btn-stop").classList.remove("stopButton")
}

function timer(){
    segundos++

    if(segundos == 59){
        segundos = 0
        minutos++
    }if(minutos == 59){
        minutos = 0
        horas++
    }

    const formatoCron = (horas < 10 ? "0" + horas : horas) +":"+(minutos < 10 ? "0" + minutos : minutos)+":"+(segundos < 10 ? "0" + segundos : segundos)
    document.getElementById('cron').innerHTML = formatoCron
    return formatoCron
}


