import { KaboomCtx, GameObj } from "kaboom";

export const launchFireball = (k: KaboomCtx, from: GameObj, to: GameObj) => {
    const fireballSpeed = 300;

    const fireball = k.add([
        k.sprite("fireball"),
        k.pos(from.pos.x, from.pos.y),
        k.scale(0.3)
    ]);
    fireball.flipX = true;
    fireball.flipY = true;

    const direction = k.vec2(
        to.pos.x - from.pos.x,
        to.pos.y - from.pos.y
    );
    const distance = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
    const normalizedDirection = k.vec2(direction.x / distance, direction.y / distance);

    fireball.onUpdate(() => {
        fireball.move(normalizedDirection.x * fireballSpeed, normalizedDirection.y * fireballSpeed);
        const distanceToTarget = Math.sqrt(
            (fireball.pos.x - to.pos.x) ** 2 + (fireball.pos.y - to.pos.y) ** 2
        );

        if (distanceToTarget < 100) {
            fireball.destroy();
        }
    });
};
