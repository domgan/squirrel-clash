import { KaboomCtx, GameObj } from "kaboom";
import { Sprites } from "../constants";
import { getSprite } from "../loadSprites";

export const addBattlePlayer = (k: KaboomCtx) => {
    k.add([
        k.sprite(Sprites.RedSquirrel),
        k.pos(300, 2.5 * k.height() / 4),
        k.scale(0.2)
    ]).flipX = true;
};

export const addBattleEnemy = (k: KaboomCtx, enemy: GameObj) => {
    k.add([
        k.sprite(getSprite(enemy)),
        k.pos(2.5 * k.width() / 4, 250),
        k.scale(0.2)
    ]);
};