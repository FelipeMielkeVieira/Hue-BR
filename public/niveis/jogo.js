let totalWidth = window.innerWidth * 0.98;
let totalHeight = window.innerHeight * 0.96;
let temChave = false
let scaleBut = 2

kaboom({
    debug: true,
    font: "sinko",
    width: totalWidth,
    height: totalHeight,
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
loadSprite("whiteButL", "sprites/backgroundBut/whiteButL.png")
loadSprite("yellowButR", "sprites/backgroundBut/yellowButR.png")
loadSprite("yellowButL", "sprites/backgroundBut/yellowButL.png")
loadSprite("redButR", "sprites/backgroundBut/redButR.png")
loadSprite("redButL", "sprites/backgroundBut/redButL.png")
loadSprite("orangeButR", "sprites/backgroundBut/orangeButR.png")
loadSprite("orangeButL", "sprites/backgroundBut/orangeButL.png")
loadSprite("blackButR", "sprites/backgroundBut/blackButR.png")
loadSprite("blackButL", "sprites/backgroundBut/blackButL.png")
loadSprite("greenWall", "sprites/walls/greenWall.png")
loadSprite("yellowWall", "sprites/walls/yellowWall.png")
loadSprite("blueWall", "sprites/walls/blueWall.png")
loadSprite("whiteWall", "sprites/walls/whiteWall.png")
loadSprite("blackWall", "sprites/walls/blackWall.png")
loadSprite("redWall", "sprites/walls/redWall.png")
loadSprite("orangeWall", "sprites/walls/orangeWall.png")

scene("nivel1", () => {

    const background = add([
        pos(0, 0),
        rect(totalWidth, totalHeight),
        outline(4),
        color(255, 255, 255),
        area(),
    ])

    add([
        pos(20, 20),
        color(0, 0, 0, 0),
        text("Nivel 1", {
            size: 35,
        }),
    ])

    add([
        "greenBut",
        sprite("greenButL"),
        pos(totalWidth * 0.05, totalHeight * 0.2),
        scale(2.5),
        area(),
    ])

    add([
        "whiteBut",
        sprite("whiteButR"),
        pos(totalWidth * 0.08, totalHeight * 0.2),
        scale(2.5),
        area(),
    ])

    add([
        "blueBut",
        sprite("blueButL"),
        pos(totalWidth * 0.47, totalHeight * 0.8),
        scale(2.5),
        area(),
    ])

    add([
        "greenBut",
        sprite("greenButR"),
        pos(totalWidth * 0.5, totalHeight * 0.8),
        scale(2.5),
        area(),
    ])

    add([
        "yellowBut",
        sprite("yellowButL"),
        pos(totalWidth * 0.85, totalHeight * 0.2),
        scale(2.5),
        area(),
    ])

    add([
        "blueBut",
        sprite("blueButR"),
        pos(totalWidth * 0.88, totalHeight * 0.2),
        scale(2.5),
        area(),
    ])

    add([
        "alcapao",
        sprite("alcapao"),
        pos(totalWidth * 0.9, totalHeight * 0.85),
        scale(2),
        area(),
        solid(),
    ])

    add([
        "key",
        sprite('key'),
        pos(totalWidth * 0.45, totalHeight * 0.3),
        scale(2),
        area(),
    ])

    const greenWall = add([
        "greenWall",
        rect(70, totalHeight - 20),
        color(0, 255, 0),
        pos(totalWidth * 0.2, 10),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const blueWall = add([
        "blueWall",
        rect(70, (totalHeight * 0.3) - 10),
        pos(totalWidth * 0.7, 10),
        color(0, 0, 255),
        area(),
        solid(),
    ])

    const yellowWall = add([
        "yellowWall",
        rect(70, (totalHeight * 0.7) - 10),
        pos(totalWidth * 0.7, totalHeight * 0.3),
        color(247, 217, 23),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.6, 70),
        pos(totalWidth * 0.755, totalHeight * 0.4),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    const player = add([
        "player",
        sprite("playerU"),
        pos(totalWidth * 0.05, totalHeight * 0.85),
        area(),
        solid(),
    ])

    player.onCollide("greenBut", () => {
        background.use(color(0, 255, 0))
        destroy(greenWall)
        readd(blueWall)
        readd(yellowWall)
    })

    player.onCollide("whiteBut", () => {
        background.use(color(255, 255, 255))
        readd(greenWall)
        readd(blueWall)
        readd(yellowWall)
    })

    player.onCollide("blueBut", () => {
        background.use(color(0, 0, 255))
        destroy(blueWall)
        readd(greenWall)
        readd(yellowWall)
    })

    player.onCollide("yellowBut", () => {
        background.use(color(247, 217, 23))
        destroy(yellowWall)
        readd(greenWall)
        readd(blueWall)
    })

    player.onCollide("key", () => {
        temChave = true;
        destroyAll("key")
    })

    player.onCollide("alcapao", () => {
        if (temChave) {
            destroyAll("alcapao")
            add([
                "levelEnd",
                sprite("levelEnd"),
                pos(totalWidth * 0.9, totalHeight * 0.85),
                scale(1.5),
                area(),
            ])
        }
    })

    player.onCollide("levelEnd", () => {
        go("nivel2")
    })

    let speed = 200;

    onKeyDown("left", () => {
        player.use(sprite("playerL"));
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.use(sprite("playerL"));
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.use(sprite("playerR"));
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.use(sprite("playerR"));
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        player.use(sprite("playerU"));
        player.move(0, -speed);
    })
    onKeyDown("w", () => {
        player.use(sprite("playerU"));
        player.move(0, -speed);
    })

    onKeyDown("down", () => {
        player.use(sprite("playerD"));
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.use(sprite("playerD"));
        player.move(0, speed);
    })

    const borderTop = add([
        "borderTop",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderLeft = add([
        "borderLeft",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderBottom = add([
        "borderBottom",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, totalHeight - 10),
        area(),
        solid(),
    ])

    const borderRight = add([
        "borderRight",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(totalWidth - 10, 0),
        area(),
        solid(),
    ])

});

scene("nivel2", () => {
    const background = add([
        pos(0, 0),
        rect(totalWidth, totalHeight),
        outline(4),
        color(255, 255, 255),
        area(),
    ])

    add([
        pos(20, 20),
        color(125, 125, 125),
        text("Nivel 2", {
            size: 35,
        }),
    ])

    add([
        "greenBut",
        sprite("greenButL"),
        pos(totalWidth * 0.056, totalHeight * 0.65),
        scale(scaleBut),
        area(),
    ])

    add([
        "redBut",
        sprite("redButL"),
        pos(totalWidth * 0.056, totalHeight * 0.1),
        scale(scaleBut),
        area(),
    ])

    add([
        "redBut",
        sprite("redButR"),
        pos(totalWidth * 0.056, totalHeight * 0.3),
        scale(scaleBut),
        area(),
    ])

    add([
        "orangeBut",
        sprite("orangeButL"),
        pos(totalWidth * 0.056, totalHeight * 0.5),
        scale(scaleBut),
        area(),
    ])

    add([
        "whiteBut",
        sprite("whiteButR"),
        pos(totalWidth * 0.08, totalHeight * 0.65),
        scale(scaleBut),
        area(),
    ])

    add([
        "blueBut",
        sprite("blueButL"),
        pos(totalWidth * 0.47, totalHeight * 0.8),
        scale(scaleBut),
        area(),
    ])

    add([
        "greenBut",
        sprite("greenButR"),
        pos(totalWidth * 0.5, totalHeight * 0.8),
        scale(scaleBut),
        area(),
    ])

    add([
        "yellowBut",
        sprite("yellowButL"),
        pos(totalWidth * 0.85, totalHeight * 0.2),
        scale(scaleBut),
        area(),
    ])

    add([
        "blueBut",
        sprite("blueButR"),
        pos(totalWidth * 0.88, totalHeight * 0.2),
        scale(scaleBut),
        area(),
    ])

    const greenWall = add([
        "greenWall",
        rect(70, totalHeight - 20),
        color(0, 255, 0),
        pos(totalWidth * 0.2, 10),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const orangeWall = add([
        "orangeWall",
        rect(30, 105),
        color(249, 157, 49),
        pos(totalWidth * 0.89, totalHeight * 0.818),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const redWall = add([
        "redWall",
        rect(30, 105),  
        color(255, 0, 0),
        pos(totalWidth * 0.8, totalHeight * 0.818),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const blueWall = add([
        "blueWall",
        rect(70, (totalHeight * 0.3) - 10),
        pos(totalWidth * 0.7, 10),
        color(0, 0, 255),
        area(),
        solid(),
    ])

    const yellowWall = add([
        "yellowWall",
        rect(70, (totalHeight * 0.7) - 10),
        pos(totalWidth * 0.7, totalHeight * 0.3),
        color(247, 217, 23),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(30, 140),
        pos(totalWidth * 0.12, totalHeight * 0.5963),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(170, 30),
        pos(totalWidth * 0, totalHeight * 0.77),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(170, 30),
        pos(totalWidth * 0.89, totalHeight * 0.77),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    const player = add([
        "player",
        sprite("playerU"),
        pos(totalWidth * 0.05, totalHeight * 0.85),
        area(),
        solid(),
    ])

    player.onCollide("greenBut", () => {
        background.use(color(0, 255, 0))
        destroy(greenWall)
        readd(blueWall)
        readd(orangeWall)
        readd(redWall)
        readd(yellowWall)
    })

    player.onCollide("whiteBut", () => {
        background.use(color(255, 255, 255))
        readd(greenWall)
        readd(blueWall)
        readd(yellowWall)
        readd(orangeWall)
        readd(redWall)
    })

    player.onCollide("blueBut", () => {
        background.use(color(0, 0, 255))
        destroy(blueWall)
        readd(greenWall)
        readd(yellowWall)
        readd(orangeWall)
        readd(redWall)
    })

    player.onCollide("yellowBut", () => {
        background.use(color(247, 217, 23))
        destroy(yellowWall)
        readd(greenWall)
        readd(blueWall)
        readd(orangeWall)
        readd(redWall)
    })

    player.onCollide("orangeBut", () => {
        background.use(color(249, 157, 49))
        destroy(orangeWall)
        readd(greenWall)
        readd(blueWall)
        readd(yellowWall)
        readd(redWall)
    })

    player.onCollide("redBut", () => {
        background.use(color(255, 0, 0))
        destroy(redWall)
        readd(greenWall)
        readd(blueWall)
        readd(yellowWall)
        readd(orangeWall)
    })

    add([
        "levelEnd",
        sprite("levelEnd"),
        pos(totalWidth * 0.93, totalHeight * 0.85),
        scale(1.5),
        area(),
    ])

    player.onCollide("levelEnd", () => {
        go("level2")
    })

    let speed = 200;

    onKeyDown("left", () => {
        player.use(sprite("playerL"));
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.use(sprite("playerL"));
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.use(sprite("playerR"));
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.use(sprite("playerR"));
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        player.use(sprite("playerU"));
        player.move(0, -speed);
    })
    onKeyDown("w", () => {
        player.use(sprite("playerU"));
        player.move(0, -speed);
    })

    onKeyDown("down", () => {
        player.use(sprite("playerD"));
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.use(sprite("playerD"));
        player.move(0, speed);
    })

    const borderTop = add([
        "borderTop",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderLeft = add([
        "borderLeft",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderBottom = add([
        "borderBottom",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, totalHeight - 10),
        area(),
        solid(),
    ])

    const borderRight = add([
        "borderRight",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(totalWidth - 10, 0),
        area(),
        solid(),
    ])
})

go("nivel2");