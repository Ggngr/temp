let temp = 0
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
    if (temp < 16) {
        basic.showString("cold")
    } else if (26 < temp) {
        basic.showString("hot")
    } else {
        basic.showString("warm")
    }
})
