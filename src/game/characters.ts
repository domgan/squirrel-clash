import { KaboomCtx } from "kaboom";
import { Sprites } from "./constants";

export const addPlayer = (k: KaboomCtx) => {
    k.loadSprite(Sprites.RedSquirrel, "/red-squirrel.png")
    const player = k.add([
        k.sprite(Sprites.RedSquirrel),
        k.pos(120, 80),
        k.area(),
        k.body(),
        k.scale(0.2)
    ]);
    return player;
}

export const addGreySquirrel = (k: KaboomCtx) => {
    k.loadSprite(Sprites.GreySquirrel, "/grey-squirrel.png")
    const greySquirrel = k.add([
        k.sprite(Sprites.GreySquirrel),
        k.pos(800, 150),
        k.area(),
        k.body(),
        k.scale(0.2)
    ]);
    greySquirrel.flipX = true;
    return greySquirrel;
}