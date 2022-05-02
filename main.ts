input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    finch.setBeak(100, 0, 0)
    basic.pause(600)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
    finch.setBeak(0, 100, 0)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . .
        # . . . #
        . # # # .
        `)
    finch.setBeak(0, 0, 100)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    finch.setBeak(100, 100, 100)
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    finch.setBeak(100, 0, 0)
    basic.pause(600)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
    finch.setBeak(0, 100, 0)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . .
        # . . . #
        . # # # .
        `)
    finch.setBeak(0, 0, 100)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    finch.setBeak(100, 100, 100)
    basic.pause(250)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Backward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Backward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Backward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Backward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Backward, 1, 100)
    finch.setMove(MoveDir.Backward, 1, 100)
    finch.setMove(MoveDir.Backward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
    finch.setMove(MoveDir.Forward, 1, 100)
})
finch.startFinch()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
finch.setBeak(0, 0, 0)
basic.forever(function () {
	
})
