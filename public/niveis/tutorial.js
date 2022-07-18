let totalWidth = window.innerWidth * 0.98;
let totalHeight = window.innerHeight * 0.96;

kaboom({
    debug: true,
    font: "sinko",
    width: totalWidth,
    height: totalHeight,
    background: [255, 255, 255,],
})

loadSprite("playerR", "sprites/playerR.png")
loadSprite("playerL", "sprites/playerL.png")
loadSprite("playerU", "sprites/playerU.png")
loadSprite("playerD", "sprites/playerD.png")
loadSprite("key", "sprites/key.png")
loadSprite("alcapao", "sprites/alcapao.png")
loadSprite("levelEnd", "sprites/levelEnd.png")
loadSprite("greenButR", "sprites/backgroundBut/greenButR.png")
loadSprite("greenButL", "sprites/backgroundBut/greenButL.png")
loadSprite("blueButR", "sprites/backgroundBut/blueButR.png")
loadSprite("blueButL", "sprites/backgroundBut/blueButL.png")
loadSprite("whiteButR", "sprites/backgroundBut/whiteButR.png")
loadSprite("yellowButL", "sprites/backgroundBut/yellowButL.png")
loadSprite("greenWall", "sprites/walls/greenWall.png")
loadSprite("yellowWall", "sprites/walls/yellowWall.png")
loadSprite("blueWall", "sprites/walls/blueWall.png")
loadSprite("whiteWall", "sprites/walls/whiteWall.png")
loadSprite("blackWall", "sprites/walls/blackWall.png")

const player = add([
    sprite("playerU"),
    pos(),
    area(),
    solid(),
    cleanup(),
])

const alcapao = add([
    sprite("alcapao"),
    scale(1.5),
    area(),
    solid(),
    cleanup(),
])

let speed = 150;

onKeyDown("left", () => {
    player.use(sprite("playerL"));
    player.move(-speed, 0);
})

onKeyDown("right", () => {
    player.use(sprite("playerR"));
    player.move(speed, 0);
})

onKeyDown("up", () => {
    player.use(sprite("playerU"));
    player.move(0, -speed);
})

onKeyDown("down", () => {
    player.use(sprite("playerD"));
    player.move(0, speed);
})