import k from "./kaplayCtx";

k.loadSprite("chemical-bg","graphics/chemical-bg.png");
k.loadSprite("platform","graphics/platforms.png");
k.loadSprite("sonic","graphics/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: {from: 0, to: 7, loop: true, speed: 30},
        run: {from: 8, to: 15, loop: true, speed: 100},
    },
});