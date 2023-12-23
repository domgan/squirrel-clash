import { KaboomCtx, GameObj } from "kaboom";

export const arrowsMovement = (k: KaboomCtx, obj: GameObj) => {
    const playerSpeed = 300;

    k.onKeyDown("left", () => {
        obj.move(-playerSpeed, 0);
        obj.flipX = false;
    });

    k.onKeyDown("right", () => {
        obj.move(playerSpeed, 0);
        obj.flipX = true;
    });

    k.onKeyDown("up", () => {
        obj.move(0, -playerSpeed);
    });

    k.onKeyDown("down", () => {
        obj.move(0, playerSpeed);
    });
}
