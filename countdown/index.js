const daysDiv = document.getElementById('days');
const hoursDiv = document.getElementById('hours');
const minDiv = document.getElementById('mins');
const secDiv = document.getElementById('sec');
const EidDay = '02 may 2022';

function EidResult() {
    const EidDate = new Date(EidDay)
    const CurrentDate = new Date()
    const totalReminingTimes = EidDate - CurrentDate;
    const totalSeconds = totalReminingTimes / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor((totalSeconds / 3600) % 24)
    const mins = Math.floor((totalSeconds / 60) % 60)
    const seconds = Math.floor(totalSeconds  % 60)

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minDiv.innerHTML = mins;
    secDiv.innerHTML = seconds;
}
EidResult();
//setInterval(EidResult, 1000)