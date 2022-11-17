basic.forever(function () {
    if (input.temperature() > 49 && input.lightLevel() > 200) {
        basic.showString("Evaporación")
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else if (input.temperature() == 30) {
        basic.showString("Condensación")
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    } else if (input.temperature() < 30 && input.lightLevel() < 70) {
        basic.showString("Precipitación")
        basic.showIcon(IconNames.Umbrella)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
