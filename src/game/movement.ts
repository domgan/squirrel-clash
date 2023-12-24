import { GameObj } from "kaboom";

export const arrowsMovement = (obj: GameObj) => {
    const playerSpeed = 300;

    obj.onKeyDown("left", () => {
        obj.move(-playerSpeed, 0);
        obj.flipX = false;
    });

    obj.onKeyDown("right", () => {
        obj.move(playerSpeed, 0);
        obj.flipX = true;
    });

    obj.onKeyDown("up", () => {
        obj.move(0, -playerSpeed);
    });

    obj.onKeyDown("down", () => {
        obj.move(0, playerSpeed);
    });
}

export const stopMovement = (obj: GameObj) => {
    console.log("todo")
}
