let co2BarValue, waterBarValue, binBarValue, treeBarValue
window.addEventListener("load", function () {
    // Percentage of co2, water, bin and tree bar
    const co2Bar = document.querySelector("#co2barcolor")
    const waterBar = document.querySelector("#waterbarcolor")
    const binBar = document.querySelector("#binbarcolor")
    const treeBar = document.querySelector("#treebarcolor")

    // Set variables for each bar value to localStorage value otherwise set to 50
    co2BarValue = parseInt(localStorage.getItem('co2Bar')) || 50
    waterBarValue = parseInt(localStorage.getItem('waterBar')) || 50
    binBarValue = parseInt(localStorage.getItem('binBar')) || 50
    treeBarValue = parseInt(localStorage.getItem('treeBar')) || 50

    // Set the CSS of each bar with variable value + %
    co2Bar.style.width = co2BarValue + "%"
    waterBar.style.width = waterBarValue + "%"
    binBar.style.width = binBarValue + "%"
    treeBar.style.width = treeBarValue + "%"
}, false)
