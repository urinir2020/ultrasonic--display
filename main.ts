input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Heart)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
})
input.onPinReleased(TouchPin.P1, function () {
    basic.showIcon(IconNames.No)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
})
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    SuperBit.MotorRun(SuperBit.enMotors.M1, pins.analogReadPin(AnalogPin.P1) / 4)
})
