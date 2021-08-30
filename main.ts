radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    while (input.buttonIsPressed(Button.A)) {
        radio.sendString("go")
        basic.showIcon(IconNames.Yes)
    }
})
