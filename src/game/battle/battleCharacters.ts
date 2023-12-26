import { KaboomCtx, GameObj } from "kaboom";
import { Sprites } from "../constants";
import { getSprite } from "../loaders/sprites";

export const addBattlePlayer = (k: KaboomCtx) => {
    const player = k.add([
        k.sprite(Sprites.RedSquirrel),
        k.pos(300, 2.5 * k.height() / 4),
        k.scale(0.2)
    ]);
    player.flipX = true;
    return player;
};

export const addBattleEnemy = (k: KaboomCtx, enemyIn: GameObj) => {
    const enemy = k.add([
        k.sprite(getSprite(enemyIn)),
        k.pos(2.5 * k.width() / 4, 250),
        k.scale(0.2)
    ]);
    return enemy;
};