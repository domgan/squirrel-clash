import { GameObj } from "kaboom";
import { SPEED_NORMAL } from "./constants";

export const arrowsMovement = (obj: GameObj, speed = SPEED_NORMAL) => {
    obj.onKeyDown("left", () => {
        obj.move(-speed, 0);
        obj.flipX = false;
    });

    obj.onKeyDown("right", () => {
        obj.move(speed, 0);
        obj.flipX = true;
    });

    obj.onKeyDown("up", () => {
        obj.move(0, -speed);
    });

    obj.onKeyDown("down", () => {
        obj.move(0, speed);
    });
};

export const stopMovement = (obj: GameObj) => {
    arrowsMovement(obj, -SPEED_NORMAL)
};
