import { KaboomCtx } from "kaboom";
import { Sprites } from "./constants";

export const setBackground = (k: KaboomCtx) => {
    k.add([
        k.sprite(Sprites.Ground),
        k.pos(k.width() / 2, k.height() / 2),
        k.anchor("center"),
        k.scale(1),
        k.fixed()
    ]);
};

export const setBattleBackground = (k: KaboomCtx) => {
    k.add([
        k.sprite(Sprites.BattleBackground),
        k.pos(k.width() / 2, k.height() / 2),
        k.anchor("center"),
        k.scale(1.5),
        k.fixed()
    ]);
};