basic.forever(function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
    basic.pause(1000)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        # # # # #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
})
