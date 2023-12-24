import { KaboomCtx } from "kaboom";
import { Sprites, Tags } from "./constants";
import { arrowsMovement } from "./movement";
import { startBattle } from "./collisionEvents";

export const addPlayer = (k: KaboomCtx) => {
    const player = k.add([
        k.sprite(Sprites.RedSquirrel),
        k.pos(320, 375),
        k.area({ scale: 0.6 }),
        k.body(),
        k.scale(0.2)
    ]);
    player.flipX = true;
    arrowsMovement(player);

    player.onCollide(Tags.Enemy, (enemy) => {
        startBattle(k, player, enemy)
    });

    return player;
}

export const addGreySquirrelSoldier1 = (k: KaboomCtx) => {
    const greySquirrel = k.add([
        k.sprite(Sprites.GreySquirrel1),
        k.pos(450, 520),
        k.area({ scale: 0.6 }),
        k.body({ mass: 10 }),
        k.scale(0.2),
        Tags.Enemy
    ]);
    return greySquirrel;
}

export const addGreySquirrelSoldier2 = (k: KaboomCtx) => {
    const greySquirrel = k.add([
        k.sprite(Sprites.GreySquirrel2),
        k.pos(800, 300),
        k.area({ scale: 0.6 }),
        k.body({ mass: 10 }),
        k.scale(0.2),
        Tags.Enemy
    ]);
    return greySquirrel;
}