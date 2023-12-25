import { Sprites } from "../constants";
import Character from "./character";

export default class Player extends Character {
    sprite = Sprites.RedSquirrel;
    health = 200;

    battleSpawn = () => {
        const player = this.k.add([
            this.k.sprite(this.sprite),
            this.k.pos(300, 2.5 * this.k.height() / 4),
            this.k.scale(0.2)
        ]);
        player.flipX = true;
        return player;
    };
};
