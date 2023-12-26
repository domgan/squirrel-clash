import { KaboomCtx, GameObj } from "kaboom";
import { Sprites } from "../constants";
import { getSprite } from "../loaders/sprites";

export const setBattleOverlay = async (k: KaboomCtx, leftObj: GameObj, rightObj: GameObj) => {
    k.add([
        k.sprite(Sprites.VersusOverlay),
        k.pos(k.width() / 2, k.height() / 2),
        k.anchor("center"),
        k.scale(1),
        k.fixed()
    ]);
    k.add([
        k.sprite(getSprite(leftObj)),
        k.pos(k.width() / 4, k.height() / 2),
        k.anchor("center"),
        k.scale(0.8),
        k.fixed()
    ]).flipX = true;
    k.add([
        k.sprite(getSprite(rightObj)),
        k.pos(3 * k.width() / 4, k.height() / 2),
        k.anchor("center"),
        k.scale(0.8),
        k.fixed()
    ]);
};
