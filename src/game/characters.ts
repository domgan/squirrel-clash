import { KaboomCtx } from "kaboom";
import { Sprites } from "./constants";

export const addPlayer = (k: KaboomCtx) => {
    k.loadSprite(Sprites.RedSquirrel, "/generated/red-squirrel.png")
    const player = k.add([
        k.sprite(Sprites.RedSquirrel),
        k.pos(320, 375),
        k.area(),
        k.body(),
        k.scale(0.2)
    ]);
    player.flipX = true;
    return player;
}


export const addGreySquirrelSoldier1 = (k: KaboomCtx) => {
    k.loadSprite(Sprites.GreySquirrel, "/generated/grey-squirrel-soldier-1.png")
    const greySquirrel = k.add([
        k.sprite(Sprites.GreySquirrel),
        k.pos(450, 520),
        k.area(),
        k.body(),
        k.scale(0.2)
    ]);
    greySquirrel.flipX = true;
    return greySquirrel;
}

export const addGreySquirrelSoldier2 = (k: KaboomCtx) => {
    k.loadSprite(Sprites.GreySquirrel, "/generated/grey-squirrel-soldier-2.png")
    const greySquirrel = k.add([
        k.sprite(Sprites.GreySquirrel),
        k.pos(800, 300),
        k.area(),
        k.body(),
        k.scale(0.2)
    ]);
    return greySquirrel;
}