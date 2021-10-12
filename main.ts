basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
