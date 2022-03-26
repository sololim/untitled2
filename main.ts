input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello in stage 2")
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
