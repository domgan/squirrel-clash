import { Sprites, Tags } from "../constants";
import Character from "./characterModel";

export default class Player extends Character {
    sprite = Sprites.RedSquirrel;

    health = 200;
    maxHealth = 200;

    mana = 200;
    maxMana = 200;

    battleSpawn = () => {
        this.battleGameObj = this.k.add([
            this.k.sprite(this.sprite),
            this.k.pos(300, 2.5 * this.k.height() / 4),
            this.k.scale(0.2),
            Tags.Player,
            { health: this.health }
        ]);
        this.battleGameObj.flipX = true;
    };

    spawn = () => {
        super.doSpawn(Tags.Player, true);
        this.movement.arrowsMovement();
    };

    registerEvents!: () => void;
};
