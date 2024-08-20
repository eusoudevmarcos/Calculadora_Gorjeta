function ajustarGrana(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value
}

function formatSplit(value) {
    if (value ==1) return value + ' pessoa'
    return value + ' pessoas'
}

function update() {
    let bill = Number(document.getElementById('yourBill').value)
    console.log(bill)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent/100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = ajustarGrana(tipValue)
    document.getElementById('totalWithTip').innerHTML = ajustarGrana(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = ajustarGrana(billEach)
}