const numberEl = document.getElementById("numb")
const convertBtn = document.getElementById("convert-btn")
const metersEl = document.getElementById("meters")
const litersEl = document.getElementById("liters")
const kilosEl = document.getElementById("kilos")

convertBtn.addEventListener("click", function() {
    let numbers = numberEl.value

    metersEl.innerHTML = `<h4>${numbers} meters = ${Math.round((numbers * 3.281) * 1000) / 1000} feet | ${numbers} feet = ${Math.round((numbers / 3.281) * 1000) / 1000} meters</h4>`
    litersEl.innerHTML = `<h4>${numbers} liters = ${Math.round((numbers * 0.264) * 1000) / 1000} gallons | ${numbers} gallons = ${Math.round((numbers / 0.264) * 1000) / 1000} liters</h4>`
    kilosEl.innerHTML = `<h4>${numbers} kilos = ${Math.round((numbers * 2.204) * 1000) / 1000} pounds | ${numbers} pounds = ${Math.round((numbers / 2.204) * 1000) / 1000} kilos</h4>`
})
