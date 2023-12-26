import { KaboomCtx, GameObj } from "kaboom";
import { handleSendProjectile } from "./events/onUpdateEvents";

export const launchFireball = (k: KaboomCtx, from: GameObj, to: GameObj, down: boolean = false) => {
    const fireballSpeed = 400;
    const fireball = addFireballObject(k, from, down);

    const direction = k.vec2(
        to.pos.x - from.pos.x,
        to.pos.y - from.pos.y
    );
    const distance = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
    const normalizedDirection = k.vec2(direction.x / distance, direction.y / distance);

    fireball.onUpdate(() => handleSendProjectile(fireball, to, normalizedDirection, fireballSpeed));
};

const addFireballObject = (k: KaboomCtx, sourceObj: GameObj, down: boolean) => {
    const fireball = k.add([
        k.sprite("fireball"),
        k.pos(sourceObj.pos.x, sourceObj.pos.y),
        k.scale(0.3)
    ]);
    if (!down) {
        fireball.flipX = true;
        fireball.flipY = true;
    };
    return fireball;
};
