import { KaboomCtx } from "kaboom";
import { Sprites } from "./constants";

export const setBackground = (k: KaboomCtx) => {
    k.loadSprite(Sprites.Ground, "/ground.jpg")
    let background = k.add([
        k.sprite(Sprites.Ground),
        k.pos(k.width() / 2, k.height() / 2),
        k.anchor("center"),
        k.scale(1),
        k.fixed()
    ]);
}