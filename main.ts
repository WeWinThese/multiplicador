input.onButtonPressed(Button.A, function () {
    Num1 = randint(0, 10)
    Num2 += randint(0, 10)
    basic.showNumber(Num1)
    basic.showString("X")
    basic.showNumber(Num2)
    Nrjogadas += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Pontuação)
    basic.showString("De")
    basic.showNumber(Nrjogadas)
    basic.pause(2000)
    basic.clearScreen()
    Nrjogadas = 0
    Pontuação = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Num1 * Num2)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Pontuação += 1
    basic.showString("Boa!")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
let Pontuação = 0
let Nrjogadas = 0
let Num2 = 0
let Num1 = 0
Num1 = 0
Num2 = 0
Nrjogadas = 0
Pontuação += 0
