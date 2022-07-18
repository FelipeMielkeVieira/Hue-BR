kaboom({
    width: 320,
    height: 240,
    font: "sinko",
    background: [ 0, 0, 255, ],
})

loadSprite("player", "sprites/player.png")

add([
    sprite("player"),
    pos(80, 40),
])