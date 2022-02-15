input.onButtonPressed(Button.A, function () {
    hrac.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    hrac.change(LedSpriteProperty.Y, -1)
})
let hrac: game.LedSprite = null
OLED.init(128, 128)
OLED.drawLoading(0)
basic.pause(1000)
OLED.drawLoading(25)
basic.pause(1000)
OLED.drawLoading(50)
basic.pause(1000)
OLED.drawLoading(75)
basic.pause(1000)
OLED.drawLoading(100)
OLED.clear()
OLED.writeStringNewLine("Vitaj v hre.")
OLED.writeStringNewLine("Precitaj si prosim vsetke podmienky pre tuto hru.")
basic.pause(5000)
OLED.clear()
OLED.writeStringNewLine("Pravidla hry. Znaz sa dorazit do ciela co najskor a snaz sa netrafit prekazky a stenu. Za kazdu netrafenu prakazku dostanes 10 bodov")
basic.pause(5000)
OLED.clear()
OLED.writeStringNewLine("Prosim nezdielajte tuto hru.")
OLED.writeStringNewLine("pozri hore na obrazovku a moze sa hrat.")
basic.pause(5000)
OLED.clear()
basic.pause(1000)
hrac = game.createSprite(1, 2)
let stena = game.createSprite(0, 0)
stena = game.createSprite(1, 0)
stena = game.createSprite(2, 0)
stena = game.createSprite(3, 0)
stena = game.createSprite(4, 0)
stena = game.createSprite(0, 4)
stena = game.createSprite(1, 4)
stena = game.createSprite(2, 4)
stena = game.createSprite(3, 4)
stena = game.createSprite(4, 4)
stena = game.createSprite(0, 1)
stena = game.createSprite(0, 2)
stena = game.createSprite(0, 3)
let prekazka = game.createSprite(randint(3, 4), randint(1, 3))
basic.pause(2000)
loops.everyInterval(500, function () {
    prekazka.move(-1)
    if (prekazka.isTouchingEdge()) {
        prekazka = game.createSprite(randint(3, 4), randint(1, 3))
    }
})
basic.forever(function () {
    if (hrac.isTouchingEdge()) {
        OLED.writeStringNewLine("game over")
        game.gameOver()
        basic.pause(5000)
        OLED.clear()
    }
    if (prekazka.get(LedSpriteProperty.Y) < 1) {
        game.addScore(2)
    }
    if (hrac.isTouching(prekazka)) {
        game.gameOver()
    }
})
