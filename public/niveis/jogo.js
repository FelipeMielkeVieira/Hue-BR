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
loadSprite("redButL", "sprites/backgroundBut/redButR.png")
loadSprite("redButR", "sprites/backgroundBut/redButL.png")
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
            size: 50,
            font: "apl386o",
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
            size: 50,
            font: "apl386o",
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
        "whiteBut",
        sprite("whiteButR"),
        pos(totalWidth * 0.08, totalHeight * 0.65),
        scale(scaleBut),
        area(),
    ])

    add([
        "yellowBut",
        sprite("yellowButL"),
        pos(totalWidth * 0.056, totalHeight * 0.4),
        scale(scaleBut),
        area(),
    ])

    add([
        "blueBut",
        sprite("blueButR"),
        pos(totalWidth * 0.08, totalHeight * 0.4),
        scale(scaleBut),
        area(),
    ])


    add([
        "yellowBut",
        sprite("yellowButR"),
        pos(totalWidth * 0.08, totalHeight * 0.1),
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
        "orangeBut",
        sprite("orangeButL"),
        pos(totalWidth * 0.25, totalHeight * 0.8),
        scale(scaleBut),
        area(),
    ])

    add([
        "redBut",
        sprite("redButR"),
        pos(totalWidth * 0.273, totalHeight * 0.8),
        scale(scaleBut),
        area(),
    ])

    add([
        "blueBut",
        sprite("blueButL"),
        pos(totalWidth * 0.377, totalHeight * 0.4),
        scale(scaleBut),
        area(),
    ])

    add([
        "greenBut",
        sprite("greenButR"),
        pos(totalWidth * 0.4, totalHeight * 0.4),
        scale(scaleBut),
        area(),
    ])

    const greenWall = add([
        "greenWall",
        rect(30, 53),
        color(0, 255, 0),
        pos(totalWidth * 0.2, totalHeight * 0.566),
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
        rect(70, 30),
        pos(totalWidth * 0.75, totalHeight * 0.2),
        color(255, 0, 0),
        area(),
        solid(),
    ])

    const redWall2 = add([
        "redWall",
        rect(147, 30),
        pos(totalWidth * 0.74, totalHeight * 0.315),
        color(255, 0, 0),
        area(),
        solid(),
    ])

    const blueWall = add([
        "blueWall",
        rect(162, 30),
        pos(totalWidth * 0.17, totalHeight * 0.315),
        color(0, 0, 255),
        area(),
        solid(),
    ])

    const yellowWall = add([
        "yellowWall",
        rect(70, 30),
        pos(totalWidth * 0.7, totalHeight * 0.2),
        color(247, 217, 23),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(30, 106),
        pos(totalWidth * 0.12, totalHeight * 0.65),
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

    add([
        "whiteWall",
        rect(30, 213),
        pos(totalWidth * 0.2, totalHeight * 0.65),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.35, 30),
        pos(totalWidth * 0.2, totalHeight * 0.65),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(30, 213),
        pos(totalWidth * 0.55, totalHeight * 0.36),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.45, 30),
        pos(totalWidth * 0.29, totalHeight * 0.315),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.48, 30),
        pos(totalWidth * 0, totalHeight * 0.52),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(30, 150),
        pos(totalWidth * 0.15, totalHeight * 0.315),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.15, 30),
        pos(totalWidth * 0.85, totalHeight * 0.315),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.7, 30),
        pos(totalWidth * 0, totalHeight * 0.2),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.2, 30),
        pos(totalWidth * 0.8, totalHeight * 0.2),
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
        readd(redWall2)
        readd(yellowWall)
    })

    player.onCollide("whiteBut", () => {
        background.use(color(255, 255, 255))
        readd(greenWall)
        readd(blueWall)
        readd(yellowWall)
        readd(orangeWall)
        readd(redWall)
        readd(redWall2)
    })

    player.onCollide("blueBut", () => {
        background.use(color(0, 0, 255))
        destroy(blueWall)
        readd(greenWall)
        readd(yellowWall)
        readd(orangeWall)
        readd(redWall)
        readd(redWall2)
    })

    player.onCollide("yellowBut", () => {
        background.use(color(247, 217, 23))
        destroy(yellowWall)
        readd(greenWall)
        readd(blueWall)
        readd(orangeWall)
        readd(redWall)
        readd(redWall2)
    })

    player.onCollide("orangeBut", () => {
        background.use(color(249, 157, 49))
        destroy(orangeWall)
        readd(greenWall)
        readd(blueWall)
        readd(yellowWall)
        readd(redWall)
        readd(redWall2)
    })

    player.onCollide("redBut", () => {
        background.use(color(255, 0, 0))
        destroy(redWall)
        destroy(redWall2)
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
        go("nivel3")
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

scene("nivel3", () => {

    let corBackground = "white";
    scaleBut *= 0.75;

    const background = add([
        pos(0, 0),
        rect(totalWidth, totalHeight),
        outline(4),
        color(255, 255, 255),
        area(),
    ])

    add([
        pos(10, 10),
        color(0, 0, 0, 0),
        text("Nivel 3", {
            size: 50,
            font: "apl386o",
        }),
    ])

    const player = add([
        "player",
        sprite("playerU"),
        pos(totalWidth * 0.115, totalHeight * 0.4),
        area(),
        solid(),
        z(1),
    ])

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

    add([
        "whiteWall",
        rect(totalWidth * 0.1, totalHeight * 0.2),
        pos(totalWidth * 0.25, 10),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.1, totalHeight * 0.385),
        pos(totalWidth * 0.285, totalHeight * 0.6),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.2, totalHeight * 0.1),
        pos(totalWidth * 0.457, totalHeight * 0.2),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(totalWidth * 0.2, totalHeight * 0.15),
        pos(totalWidth * 0.375, totalHeight * 0.6),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    const blueWall1 = add([
        "blueWall",
        rect(totalWidth * 0.45, totalHeight * 0.1),
        color(0, 0, 255),
        pos(10, totalHeight * 0.2),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const greenWall1 = add([
        "greenWall",
        rect(totalWidth * 0.08, totalHeight * 0.05),
        color(0, 255, 0),
        pos(10, totalHeight * 0.7),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const redWall1 = add([
        "redWall",
        rect(totalWidth * 0.05, totalHeight * 0.285),
        color(255, 0, 0),
        pos(totalWidth * 0.085, totalHeight * 0.7),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const blueWall2 = add([
        "blueWall",
        rect(totalWidth * 0.075, totalHeight * 0.05),
        color(0, 0, 255),
        pos(totalWidth * 0.135, totalHeight * 0.7),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const yellowWall1 = add([
        "yellowWall",
        rect(totalWidth * 0.075, totalHeight * 0.05),
        color(247, 217, 23),
        pos(totalWidth * 0.21, totalHeight * 0.7),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const orangeWall1 = add([
        "orangeWall",
        rect(totalWidth * 0.1, totalHeight * 0.15),
        color(249, 157, 49),
        pos(totalWidth * 0.285, totalHeight * 0.3),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const redWall2 = add([
        "redWall",
        rect(totalWidth * 0.1, totalHeight * 0.15),
        color(255, 0, 0),
        pos(totalWidth * 0.285, totalHeight * 0.45),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const redWall3 = add([
        "redWall",
        rect(totalWidth * 0.15, totalHeight * 0.1),
        color(255, 0, 0),
        pos(totalWidth * 0.65, totalHeight * 0.2),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const yellowWall2 = add([
        "yellowWall",
        rect(totalWidth * 0.075, totalHeight * 0.185),
        color(247, 217, 23),
        pos(totalWidth * 0.725, 10),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const yellowWall3 = add([
        "yellowWall",
        rect(totalWidth * 0.192, totalHeight * 0.1),
        color(247, 217, 23),
        pos(totalWidth * 0.8, totalHeight * 0.2),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const greenWall2 = add([
        "greenWall",
        rect(totalWidth * 0.15, totalHeight * 0.15),
        color(0, 255, 0),
        pos(totalWidth * 0.575, totalHeight * 0.6),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const blueWall3 = add([
        "blueWall",
        rect(totalWidth * 0.075, totalHeight * 0.3),
        color(0, 0, 255),
        pos(totalWidth * 0.65, totalHeight * 0.3),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const yellowWall4 = add([
        "yellowWall",
        rect(totalWidth * 0.075, totalHeight * 0.235),
        color(247, 217, 23),
        pos(totalWidth * 0.65, totalHeight * 0.75),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const orangeWall2 = add([
        "orangeWall",
        rect(totalWidth * 0.2675, totalHeight * 0.15),
        color(249, 157, 49),
        pos(totalWidth * 0.725, totalHeight * 0.6),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const blueButton1 = add([
        "blueBut1",
        sprite("blueButL"),
        pos(totalWidth * 0.04, totalHeight * 0.4),
        scale(scaleBut),
        area(),
    ])

    const whiteButton1 = add([
        "whiteBut",
        sprite("whiteButR"),
        pos(totalWidth * 0.058, totalHeight * 0.4),
        scale(scaleBut),
        area(),
    ])

    const greenBut1 = add([
        "greenBut1",
        sprite("greenButL"),
        pos(totalWidth * 0.04, totalHeight * 0.5),
        scale(scaleBut),
        area()
    ])

    const yellowBut1 = add([
        "yellowBut1",
        sprite("yellowButR"),
        pos(totalWidth * 0.058, totalHeight * 0.5),
        scale(scaleBut),
        area()
    ])

    const greenBut2 = add([
        "greenBut2",
        sprite("greenButL"),
        pos(totalWidth * 0.04, totalHeight * 0.8),
        scale(scaleBut),
        area()
    ])

    const redBut1 = add([
        "redBut1",
        sprite("redButR"),
        pos(totalWidth * 0.058, totalHeight * 0.8),
        scale(scaleBut),
        area()
    ])

    const blueBut2 = add([
        "blueBut2",
        sprite("blueButL"),
        pos(totalWidth * 0.15, totalHeight * 0.8),
        scale(scaleBut),
        area()
    ])

    const yellowBut2 = add([
        "yellowBut2",
        sprite("yellowButR"),
        pos(totalWidth * 0.168, totalHeight * 0.8),
        scale(scaleBut),
        area()
    ])

    const blueBut3 = add([
        "blueBut3",
        sprite("blueButL"),
        pos(totalWidth * 0.15, totalHeight * 0.09),
        scale(scaleBut),
        area()
    ])

    const redBut2 = add([
        "redBut2",
        sprite("redButR"),
        pos(totalWidth * 0.168, totalHeight * 0.09),
        scale(scaleBut),
        area()
    ])

    const blueBut4 = add([
        "blueBut4",
        sprite("blueButL"),
        pos(totalWidth * 0.45, totalHeight * 0.09),
        scale(scaleBut),
        area()
    ])

    const redBut3 = add([
        "redBut3",
        sprite("redButR"),
        pos(totalWidth * 0.468, totalHeight * 0.09),
        scale(scaleBut),
        area()
    ])

    const greenBut3 = add([
        "greenBut3",
        sprite("greenButL"),
        pos(totalWidth * 0.4, totalHeight * 0.8),
        scale(scaleBut),
        area()
    ])

    const yellowBut3 = add([
        "yellowBut3",
        sprite("yellowButR"),
        pos(totalWidth * 0.418, totalHeight * 0.8),
        scale(scaleBut),
        area()
    ])

    const redBut4 = add([
        "redBut4",
        sprite("redButL"),
        pos(totalWidth * 0.5, totalHeight * 0.5),
        scale(scaleBut),
        area()
    ])

    const greenBut4 = add([
        "greenBut4",
        sprite("greenButR"),
        pos(totalWidth * 0.518, totalHeight * 0.5),
        scale(scaleBut),
        area()
    ])

    const blueBut5 = add([
        "blueBut5",
        sprite("blueButL"),
        pos(totalWidth * 0.8, totalHeight * 0.5),
        scale(scaleBut),
        area()
    ])

    const orangeBut = add([
        "orangeBut",
        sprite("orangeButR"),
        pos(totalWidth * 0.818, totalHeight * 0.5),
        scale(scaleBut),
        area()
    ])

    const redBut5 = add([
        "redBut5",
        sprite("redButL"),
        pos(totalWidth * 0.9, totalHeight * 0.5),
        scale(scaleBut),
        area()
    ])

    const yellowBut4 = add([
        "yellowBut4",
        sprite("yellowButR"),
        pos(totalWidth * 0.918, totalHeight * 0.5),
        scale(scaleBut),
        area()
    ])

    const yellowBut5 = add([
        "yellowBut5",
        sprite("yellowButL"),
        pos(totalWidth * 0.9, totalHeight * 0.85),
        scale(scaleBut),
        area()
    ])

    const orangeBut2 = add([
        "orangeBut2",
        sprite("orangeButR"),
        pos(totalWidth * 0.918, totalHeight * 0.85),
        scale(scaleBut),
        area()
    ])

    function trocaCor() {
        readd(blueWall1);
        readd(blueWall2);
        readd(blueWall3);
        readd(redWall1);
        readd(redWall2);
        readd(redWall3);
        readd(greenWall1);
        readd(greenWall2);
        readd(yellowWall1);
        readd(yellowWall2);
        readd(yellowWall3);
        readd(yellowWall4);
        readd(orangeWall1);
        readd(orangeWall2);

        if (corBackground == "blue") {
            destroy(blueWall1);
            destroy(blueWall2);
            destroy(blueWall3);
        }
        if (corBackground == "red") {
            destroy(redWall1);
            destroy(redWall2);
            destroy(redWall3);
        }
        if (corBackground == "green") {
            destroy(greenWall1);
            destroy(greenWall2);
        }
        if (corBackground == "yellow") {
            destroy(yellowWall1);
            destroy(yellowWall2);
            destroy(yellowWall3);
            destroy(yellowWall4);
        }
        if (corBackground == "orange") {
            destroy(orangeWall1);
            destroy(orangeWall2);
        }
    }

    player.onCollide("whiteBut", () => {
        if (corBackground == "blue") {
            corBackground = "white";
            background.use(color(255, 255, 255));
            trocaCor();
        }
    })

    player.onCollide("blueBut1", () => {
        if (corBackground == "white") {
            corBackground = "blue";
            background.use(color(0, 0, 255))
            trocaCor();
        }
    })

    player.onCollide("greenBut1", () => {
        if (corBackground == "yellow") {
            corBackground = "green";
            background.use(color(0, 255, 0));
            trocaCor();
        }
    })

    player.onCollide("yellowBut1", () => {
        if (corBackground == "green") {
            corBackground = "yellow";
            background.use(color(247, 217, 23));
            trocaCor();
        }
    })

    player.onCollide("greenBut2", () => {
        if (corBackground == "red") {
            corBackground = "green";
            background.use(color(0, 255, 0));
            trocaCor();
        }
    })

    player.onCollide("redBut1", () => {
        if (corBackground == "green") {
            corBackground = "red";
            background.use(color(255, 0, 0));
            trocaCor();
        }
    })

    player.onCollide("blueBut2", () => {
        if (corBackground == "yellow") {
            corBackground = "blue";
            background.use(color(0, 0, 255));
            trocaCor();
        }
    })

    player.onCollide("yellowBut2", () => {
        if (corBackground == "blue") {
            corBackground = "yellow";
            background.use(color(247, 217, 23));
            trocaCor();
        }
    })

    player.onCollide("blueBut3", () => {
        if (corBackground == "red") {
            corBackground = "blue";
            background.use(color(0, 0, 255));
            trocaCor();
        }
    })

    player.onCollide("redBut2", () => {
        if (corBackground == "blue") {
            corBackground = "red";
            background.use(color(255, 0, 0));
            trocaCor();
        }
    })

    player.onCollide("blueBut4", () => {
        if (corBackground == "red") {
            corBackground = "blue";
            background.use(color(0, 0, 255));
            trocaCor();
        }
    })

    player.onCollide("redBut3", () => {
        if (corBackground == "blue") {
            corBackground = "red";
            background.use(color(255, 0, 0));
            trocaCor();
        }
    })

    player.onCollide("redBut4", () => {
        if (corBackground == "green") {
            corBackground = "red";
            background.use(color(255, 0, 0));
            trocaCor();
        }
    })

    player.onCollide("greenBut4", () => {
        if (corBackground == "red") {
            corBackground = "green";
            background.use(color(0, 255, 0));
            trocaCor();
        }
    })

    player.onCollide("greenBut3", () => {
        if (corBackground == "yellow") {
            corBackground = "green";
            background.use(color(0, 255, 0));
            trocaCor();
        }
    })

    player.onCollide("yellowBut3", () => {
        if (corBackground == "green") {
            corBackground = "yellow";
            background.use(color(247, 217, 23));
            trocaCor();
        }
    })

    player.onCollide("blueBut5", () => {
        if (corBackground == "orange") {
            corBackground = "blue";
            background.use(color(0, 0, 255));
            trocaCor();
        }
    })

    player.onCollide("orangeBut", () => {
        if (corBackground == "blue") {
            corBackground = "orange";
            background.use(color(249, 157, 49));
            trocaCor();
        }
    })

    player.onCollide("redBut5", () => {
        if (corBackground == "yellow") {
            corBackground = "red";
            background.use(color(255, 0, 0));
            trocaCor();
        }
    })

    player.onCollide("yellowBut4", () => {
        if (corBackground == "red") {
            corBackground = "yellow";
            background.use(color(247, 217, 23));
            trocaCor();
        }
    })

    player.onCollide("yellowBut5", () => {
        if (corBackground == "orange") {
            corBackground = "yellow";
            background.use(color(247, 217, 23));
            trocaCor();
        }
    })

    player.onCollide("orangeBut2", () => {
        if (corBackground == "yellow") {
            corBackground = "orange";
            background.use(color(249, 157, 49));
            trocaCor();
        }
    })

    let temChave = false;

    add([
        "alcapao",
        sprite("alcapao"),
        pos(totalWidth * 0.9, totalHeight * 0.05),
        scale(2),
        area(),
        solid(),
    ])

    add([
        "key",
        sprite('key'),
        pos(totalWidth * 0.5, totalHeight * 0.8),
        scale(2),
        area(),
    ])

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
                pos(totalWidth * 0.9, totalHeight * 0.05),
                scale(1.5),
                area(),
            ])
        }
    })

    player.onCollide("levelEnd", () => {
        go("nivel4")
    })

})

scene("nivel4", () => {
    const background = add([
        'background',
        pos(0, 0),
        rect(totalWidth, totalHeight),
        outline(4),
        color(255, 255, 255),
        area(),
    ])

    add([
        pos(10, 10),
        color(0, 0, 0, 0),
        text("Nivel 4", {
            size: 50,
            font: "apl386o",
        }),
        z(1)
    ])

    add([
        "blueYellowBut",
        sprite("blueButR"),
        pos(totalWidth * 0.373, totalHeight * 0.8),
        scale(scaleBut),
        area(),
    ])

    add([
        "yellowBlueBut",
        sprite("yellowButL"),
        pos(totalWidth * 0.35, totalHeight * 0.8),
        scale(scaleBut),
        area(),
    ])

    add([
        "blackBut",
        sprite("blackButL"),
        pos(totalWidth * 0.65, totalHeight * 0.8),
        scale(scaleBut),
        area(),
    ])

    add([
        "orangeBut",
        sprite("orangeButR"),
        pos(totalWidth * 0.673, totalHeight * 0.8),
        scale(scaleBut),
        area(),
    ])

    add([
        "blueOrangeBut",
        sprite("blueButL"),
        pos(totalWidth * 0.65, totalHeight * 0.55),
        scale(scaleBut),
        area(),
    ])

    add([
        "orangeBlueBut",
        sprite("orangeButR"),
        pos(totalWidth * 0.673, totalHeight * 0.55),
        scale(scaleBut),
        area(),
    ])

    add([
        "blueWhiteBut",
        sprite("blueButL"),
        pos(totalWidth * 0.55, totalHeight * 0.55),
        scale(scaleBut),
        area(),
    ])

    add([
        "whiteBlueBut",
        sprite("whiteButR"),
        pos(totalWidth * 0.573, totalHeight * 0.55),
        scale(scaleBut),
        area(),
    ])

    add([
        "greenYellowBut",
        sprite("greenButR"),
        pos(totalWidth * 0.373, totalHeight * 0.55),
        scale(scaleBut),
        area(),
    ])

    add([
        "yellowGreenBut",
        sprite("yellowButL"),
        pos(totalWidth * 0.35, totalHeight * 0.55),
        scale(scaleBut),
        area(),
    ])

    add([
        "redBlueBut",
        sprite("redButL"),
        pos(totalWidth * 0.25, totalHeight * 0.25),
        scale(scaleBut),
        area(),
    ])

    add([
        "blueRedBut",
        sprite("blueButR"),
        pos(totalWidth * 0.273, totalHeight * 0.25),
        scale(scaleBut),
        area(),
    ])

    add([
        "yellowGreenBut",
        sprite("yellowButL"),
        pos(totalWidth * 0.45, totalHeight * 0.25),
        scale(scaleBut),
        area(),
    ])

    add([
        "greenYellowBut",
        sprite("greenButR"),
        pos(totalWidth * 0.473, totalHeight * 0.25),
        scale(scaleBut),
        area(),
    ])

    add([
        "yellowRedBut",
        sprite("yellowButL"),
        pos(totalWidth * 0.032, totalHeight * 0.45),
        scale(scaleBut * 0.75),
        area(),
    ])

    add([
        "redYellowBut",
        sprite("redButR"),
        pos(totalWidth * 0.05, totalHeight * 0.45),
        scale(scaleBut * 0.75),
        area(),
    ])

    add([
        "redBlueBut",
        sprite("redButR"),
        pos(totalWidth * 0.272, totalHeight * 0.025),
        scale(scaleBut * 0.7),
        area(),
    ])

    add([
        "blueRedBut",
        sprite("blueButL"),
        pos(totalWidth * 0.255, totalHeight * 0.025),
        scale(scaleBut * 0.7),
        area(),
    ])

    const greenWall = add([
        "greenWall",
        rect(100, totalHeight / 3 - 19),
        color(0, 255, 0),
        pos(totalWidth * 0.83, totalHeight / 3 + 19),
        area(),
        solid(),
    ])

    const orangeWall = add([
        "orangeWall",
        rect(100, totalHeight / 3 - 10),
        color(249, 157, 49),
        pos(totalWidth * 0.83, (totalHeight / 3) * 2),
        state("visivel", ["visivel", "invisivel"]),
        area(),
        solid(),
    ])

    const redWall = add([
        "redWall",
        rect(100, totalHeight / 5),
        pos(totalWidth * 0.1, totalHeight * 0.4),
        color(255, 0, 0),
        area(),
        solid(),
    ])

    const redWall2 = add([
        "redWall",
        rect(30, 107),
        pos(totalWidth * 0.907, 10),
        color(255, 0, 0),
        area(),
        solid(),
    ])

    const redWall3 = add([
        "redWall",
        rect(147, 30),
        pos(totalWidth * 0.907, totalHeight * 0.152),
        color(255, 0, 0),
        area(),
        solid(),
    ])

    const blueWall = add([
        "blueWall",
        rect(100, totalHeight / 5),
        pos(totalWidth * 0.1, 0),
        color(0, 0, 255),
        area(),
        solid(),
    ])

    const yellowWall = add([
        "yellowWall",
        rect(100, totalHeight / 5),
        pos(totalWidth * 0.1, totalHeight * 0.2),
        color(247, 217, 23),
        area(),
        solid(),
    ])

    const yellowWall2 = add([
        "yellowWall",
        rect(100, totalHeight * 0.4 - 10),
        pos(totalWidth * 0.1, totalHeight * 0.6),
        color(247, 217, 23),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(100, (totalHeight / 8) * 2 + 8),
        pos(totalWidth * 0.83, totalHeight / 10),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        rect(130, 30),
        pos(0, totalHeight * 0.58),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    add([
        "whiteWall",
        "wall",
        rect(totalWidth * 0.653, 30),
        pos(totalWidth * 0.177, totalHeight * 0.48),
        color(128, 128, 128),
        area(),
        solid(),
    ])

    const muro1 = add([
        "blackWall",
        "muro1",
        rect(totalWidth * 0.652, 30),
        pos(totalWidth * 0.177, totalHeight * 0.1),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    const muro2 = add([
        "blackWall",
        "muro2",
        rect(totalWidth * 0.652, 30),
        pos(totalWidth * 0.177, totalHeight * 0.7),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    const player = add([
        "player",
        sprite("playerU"),
        pos(totalWidth * 0.5, totalHeight * 0.85),
        area(),
        solid(),
    ])

    function trocaCor() {
        let cor = [background.color.r, background.color.g, background.color.b]
        readd(greenWall)
        readd(blueWall)
        readd(orangeWall)
        readd(redWall)
        readd(redWall2)
        readd(redWall3)
        readd(yellowWall)
        readd(yellowWall2)
        if (cor[0] == 255 && cor[1] == 0 && cor[2] == 0) {
            destroy(redWall)
            destroy(redWall2)
            destroy(redWall3)
        } else if (cor[0] == 0 && cor[1] == 255 && cor[2] == 0) {
            destroy(greenWall)
        } else if (cor[0] == 0 && cor[1] == 0 && cor[2] == 255) {
            destroy(blueWall)
        } else if (cor[0] == 247 && cor[1] == 217 && cor[2] == 23) {
            destroy(yellowWall)
            destroy(yellowWall2);
        } else if (cor[0] == 249 && cor[1] == 157 && cor[2] == 49) {
            destroy(orangeWall)
        }
    }

    player.onCollide("blueYellowBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 247 && g == 217 && b == 23) {
            background.use(color(0, 0, 255))
            trocaCor()
        }
    })

    player.onCollide("yellowBlueBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 0 && g == 0 && b == 255) {
            background.use(color(247, 217, 23))
            trocaCor()
        }
    })

    player.onCollide("yellowGreenBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 0 && g == 255 && b == 0) {
            background.use(color(247, 217, 23))
            trocaCor()
        }
    })

    player.onCollide("greenYellowBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 247 && g == 217 && b == 23) {
            background.use(color(0, 255, 0))
            trocaCor()
        }
    })

    player.onCollide("whiteBlueBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 0 && g == 0 && b == 255) {
            background.use(color(255, 255, 255))
            trocaCor()
        }
    })

    player.onCollide("blueWhiteBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 255 && g == 255 && b == 255) {
            background.use(color(0, 0, 255))
            trocaCor()
        }
    })

    player.onCollide("yellowRedBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 255 && g == 0 && b == 0) {
            background.use(color(247, 217, 23))
            trocaCor()
        }
    })

    player.onCollide("redYellowBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 247 && g == 217 && b == 23) {
            background.use(color(255, 0, 0))
            trocaCor()
        }
    })

    player.onCollide("blueRedBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 255 && g == 0 && b == 0) {
            background.use(color(0, 0, 255))
            trocaCor()
        }
    })

    player.onCollide("redBlueBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 0 && g == 0 && b == 255) {
            background.use(color(255, 0, 0))
            trocaCor()
        }
    })

    player.onCollide("blueOrangeBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 249 && g == 157 && b == 49) {
            background.use(color(0, 0, 255))
            trocaCor()
        }
    })

    player.onCollide("orangeBlueBut", () => {
        let r = background.color.r
        let g = background.color.g
        let b = background.color.b
        if (r == 0 && g == 0 && b == 255) {
            background.use(color(249, 157, 49))
            trocaCor()
        }
    })

    player.onCollide("blackWall", () => {
        background.use(color(0, 0, 0))
        destroy(player)
        add([
            pos(center()),
            origin("center"),
            color(125, 125, 125),
            text("Perdeu!", {
                size: 100,
                font: "apl386o",
            }),
            z(1)
        ])
        wait(1.5, () => {
            go('nivel4')
        })
    })

    player.onCollide("blackBut", () => {
        background.use(color(0, 0, 0))
        destroy(player)
        add([
            pos(center()),
            origin("center"),
            color(125, 125, 125),
            text("Perdeu!", {
                size: 100,
                font: "apl386o",
            }),
            z(1)
        ])
        wait(1.5, () => {
            go('nivel4')
        })
    })

    add([
        "levelEnd",
        sprite("levelEnd"),
        pos(totalWidth * 0.94, totalHeight * 0.05),
        scale(1.5),
        area(),
    ])

    player.onCollide("levelEnd", () => {
        go("nivel5")
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
        "wall",
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
        "wall",
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

    let muro1V = -50;
    let muro2V = -50;

    onUpdate(() => {
        muro1.move(0, muro1V);
        muro2.move(0, muro2V);
    })

    muro1.onCollide("wall", () => {
        muro1V = -muro1V;
    })

    muro2.onCollide("wall", () => {
        muro2V = -muro2V;
    })
})

scene("nivel5", () => {

    const borderTop = add([
        "borderTop",
        "wall",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderLeft = add([
        "borderLeft",
        "wall",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderBottom = add([
        "borderBottom",
        "wall",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, totalHeight - 10),
        area(),
        solid(),
    ])

    const borderRight = add([
        "borderRight",
        "wall",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(totalWidth - 10, 0),
        area(),
        solid(),
    ])

    const background = add([
        pos(0, 0),
        rect(totalWidth, totalHeight),
        outline(4),
        color(255, 255, 255),
        area(),
    ])

    add([
        'texto',
        pos(10, 10),
        color(0, 0, 0, 0),
        text("Nivel 5", {
            size: 50,
            font: "apl386o",
        }),
    ])

    const player = add([
        "player",
        sprite("playerU"),
        pos(totalWidth * 0.075, totalHeight * 0.6),
        area(),
        solid(),
    ])

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

    player.onCollide("blackWall", () => {
        background.use(color(0, 0, 0))
        destroy(player)
        add([
            pos(center()),
            origin("center"),
            color(125, 125, 125),
            text("Perdeu!", {
                size: 100,
                font: "apl386o",
            }),
            z(1)
        ])
        wait(1.5, () => {
            go('nivel5')
        })
    })

    add([
        "blackWall",
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.6),
        pos(totalWidth * 0.15, totalHeight * 0.4),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    add([
        "blackWall",
        "wall",
        rect(totalWidth * 0.025, totalHeight * 0.4),
        pos(totalWidth * 0.6, totalHeight * 0.6),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    let muro1V = -75;
    let muro2V = -75;
    let muro3V = -75;
    let muro4V = -75;
    let muro5V = 75;
    let muro6V = 75;

    const muro1 = add([
        "blackWall",
        "wall",
        rect(totalWidth * 0.4, totalHeight * 0.05),
        pos(10, 10),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    const muro2 = add([
        "blackWall",
        "wall",
        rect(totalWidth * 0.2, totalHeight * 0.05),
        pos(totalWidth * 0.2, totalHeight * 0.9),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    const muro3 = add([
        "blackWall",
        "wall",
        rect(totalWidth * 0.025, totalHeight * 0.8),
        pos(totalWidth * 0.4, totalHeight * 0.2),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    const muro4 = add([
        "blackWall",
        "wall",
        rect(totalWidth * 0.1875, totalHeight * 0.05),
        pos(totalWidth * 0.625, totalHeight * 0.6),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    const muro5 = add([
        "blackWall",
        "wall",
        rect(totalWidth * 0.17, totalHeight * 0.05),
        pos(totalWidth * 0.82, totalHeight * 0.6),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    const muro6 = add([
        "blackWall",
        "wall",
        rect(totalWidth * 0.39, totalHeight * 0.05),
        pos(totalWidth * 0.61, totalHeight * 0.15),
        color(0, 0, 0),
        area(),
        solid(),
    ])

    muro1.onCollide("wall", () => {
        muro1V = -muro1V;
    })

    muro2.onCollide("wall", () => {
        muro2V = -muro2V;
    })

    muro3.onCollide("wall", () => {
        muro3V = -muro3V;
    })

    muro4.onCollide("wall", () => {
        muro4V = -muro4V;
    })

    muro5.onCollide("wall", () => {
        muro5V = -muro5V;
    })

    muro6.onCollide("wall", () => {
        muro6V = -muro6V;
    })

    onUpdate(() => {
        muro1.move(0, muro1V);
        muro2.move(0, muro2V);
        muro3.move(muro3V, 0);
        muro4.move(0, muro4V);
        muro5.move(0, muro5V);
        muro6.move(0, muro6V);
    })

    let temChave = false;

    add([
        "alcapao",
        "wall",
        sprite("alcapao"),
        pos(totalWidth * 0.95, totalHeight * 0.025),
        scale(2),
        area(),
        solid(),
    ])

    add([
        "key",
        sprite('key'),
        pos(totalWidth * 0.9, totalHeight * 0.9),
        scale(2),
        area(),
    ])

    player.onCollide("key", () => {
        temChave = true;
        destroyAll("key")
    })

    player.onCollide("alcapao", () => {
        if (temChave) {
            destroyAll("alcapao")
            add([
                "levelEnd",
                "wall",
                sprite("levelEnd"),
                pos(totalWidth * 0.95, totalHeight * 0.025),
                scale(1.5),
                area(),
            ])
        }
    })

    let corBackground = "black";

    loop(4, () => {
        if (corBackground == "white") {
            corBackground = "black";
            background.use(color(0, 0, 0));
        } else if(corBackground == "black") {
            corBackground = "white";
            background.use(color(255, 255, 255));
        }
    })
    
    player.onCollide("levelEnd", () => {
        corBackground = "";
        background.use(color(255, 255, 255));
        destroyAll('blackWall')
        destroyAll('texto')
        destroyAll('levelEnd')
        add([
            pos(center()),
            origin("center"),
            color(125, 125, 125),
            text("Obrigado por Jogar!", {
                size: 80,
                font: "apl386o",
            }),
        ])
        wait(5, () => {
            window.location.href = "/menu"
        })
    })
})

go("nivel1");