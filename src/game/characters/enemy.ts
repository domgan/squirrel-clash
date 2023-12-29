import Character from "./characterModel";
import { startBattle } from "../map/events/collisionEvents";
import { Tags } from "../constants";

export default abstract class Enemy extends Character {
    registerEvents = () => {
        this.gameObj.onCollide(Tags.Character, player => {
            startBattle(this.k, player, this.gameObj);
        });
    };

    battleSpawn = () => {
        this.battleGameObj = this.k.add([
            this.k.sprite(this.sprite),
            this.k.pos(2.5 * this.k.width() / 4, 250),
            this.k.scale(0.2)
        ]);
    };

    spawn = () => {
        super.doSpawn(Tags.Enemy);
        this.registerEvents();
    }
}