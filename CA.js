let num = document.getElementById('num')
let converted = document.getElementById('converted')
let fromcurrency = document.getElementById('fromcurrency')
let tocurrency = document.getElementById('tocurrency')
function currencyconverter(){
    const amount =parseFloat(num.value);
    const fromrate = parseFloat(fromcurrency.value)
    const torate = parseFloat(tocurrency.value);
    const result = (amount / fromrate) * torate;
    converted.value = result.toFixed(2)
}
num.addEventListener("input",currencyconverter)
fromcurrency.addEventListener("change",currencyconverter)
tocurrency.addEventListener("change",currencyconverter)
currencyconverter()

