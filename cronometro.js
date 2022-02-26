let horas = 0
let minutos = 0
let segundos = 0

let tempo = 1000 //Tempo em segundos
let cronometro;

function start(){
    timer()
    cronometro = setInterval( timer , tempo)
    document.querySelector(".start-btn").disabled = true
    document.querySelector(".start-btn").classList.add("disabled")
    document.querySelector(".stop-btn").classList.add("stopButton")  
}
function pause(){
    clearInterval(cronometro)
    document.querySelector(".start-btn").disabled = false
    document.querySelector(".start-btn").classList.remove("disabled")
    document.querySelector(".stop-btn").classList.remove("stopButton")
}
function stop(){
    clearInterval(cronometro)
    horas = 0
    minutos = 0
    segundos = 0

    document.getElementById('cron').innerHTML = "00:00:00"
    document.querySelector(".start-btn").disabled = false
    document.querySelector(".start-btn").classList.remove("disabled")
    document.querySelector(".stop-btn").classList.remove("stopButton")
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

