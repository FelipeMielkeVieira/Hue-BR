let totalWidth = window.innerWidth * 0.98;
let totalHeight = window.innerHeight * 0.96;
console.log(totalHeight)

kaboom({
    debug: true,
    font: "sinko",
    width: totalWidth,
    height: totalHeight,
    background: [ 0, 255, 255, ],
})

loadSprite("player", "sprites/playerR.png")

const player = add([
    sprite("player"),
    pos(80, 550),
    area()
])

let moveSpeed = 120;

onKeyDown("up", () => {
    player.move(UP, moveSpeed);
})