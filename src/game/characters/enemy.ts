import Character from "./character";
import { startBattle } from "../map/events/collisionEvents";
import { Tags } from "../constants";

export default abstract class Enemy extends Character {
    registerEvents = () => {
        this.gameObj.onCollide(Tags.Enemy, player => {
            startBattle(this.k, player, this.gameObj)
        });
    };

    battleSpawn = () => {
        return this.k.add([
            this.k.sprite(this.sprite),
            this.k.pos(2.5 * this.k.width() / 4, 250),
            this.k.scale(0.2)
        ]);
    };
}