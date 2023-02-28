let getal = 3
basic.forever(function () {
    if (getal == 12) {
        basic.showNumber(0)
        basic.pause(1000)
        getal = 3
    } else {
        getal += 3
    }
})
