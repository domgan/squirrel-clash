import { EventController, GameObj } from "kaboom";
import { SPEED_NORMAL } from "../constants";

export default class Movement {
    private gameObj: GameObj;
    private events: EventController[] = [];

    constructor(gameObj: GameObj) {
        this.gameObj = gameObj;
    };

    arrowsMovement = (speed = SPEED_NORMAL) => {
        this.events.push(this.gameObj.onKeyDown("left", () => {
            this.gameObj.move(-speed, 0);
            this.gameObj.flipX = false;
        }));

        this.events.push(this.gameObj.onKeyDown("right", () => {
            this.gameObj.move(speed, 0);
            this.gameObj.flipX = true;
        }));

        this.events.push(this.gameObj.onKeyDown("up", () => {
            this.gameObj.move(0, -speed);
        }));

        this.events.push(this.gameObj.onKeyDown("down", () => {
            this.gameObj.move(0, speed);
        }));
    };

    stopMovement = () => {
        this.events.forEach(event => {
            event.cancel();
        });
        this.events = [];
    };
};