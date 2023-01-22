const items = document.querySelectorAll(".date-container span")
function updateTime() {
    let tempyear = new Date().getFullYear();
    let newYear = new Date(tempyear, 11, 31, 23, 59, 59)
    let now = new Date();
    let totalSeconds = (newYear - now) / 1000
    let days = Math.floor(totalSeconds / 24 / 60 / 60)
    let hours = Math.floor(totalSeconds / 60 / 60) % 24
    let minutes = Math.floor(totalSeconds / 60) % 60
    let seconds = Math.floor(totalSeconds) % 60
    let value = [days, ("0" + hours).slice(-2), ("0" + minutes).slice(-2), ("0" + seconds).slice(-2)]
    items.forEach(function (item, index) {
        item.innerHTML = value[index]
    })
}
window.setInterval(updateTime,1)