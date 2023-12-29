import { KaboomCtx, GameObj } from "kaboom";
import { SkillNames, Sprites } from "../constants";
import { handleSendProjectile } from "../battle/events/onUpdateEvents";

export abstract class Skill {
    protected k: KaboomCtx;
    abstract name: SkillNames;
    abstract reqMana: number;
    abstract sprite: Sprites;

    constructor(k: KaboomCtx) {
        this.k = k;
    };

    protected addAtSourceObj = (sourceObj: GameObj, down = false) => {
        const gameObj = this.k.add([
            this.k.sprite(this.sprite),
            this.k.pos(sourceObj.pos.x, sourceObj.pos.y),
            this.k.scale(0.3)
        ]);
        if (!down) {
            gameObj.flipX = true;
            gameObj.flipY = true;
        };
        return gameObj;
    };
};

export abstract class DamageSkill extends Skill {
    abstract damage: number;
};

export abstract class SupportSkill extends Skill { };

type Projectile = {
    speed: number;
};

export abstract class ProjectileDamageSkill extends DamageSkill implements Projectile {
    abstract speed: number;

    launchProjectile = (from: GameObj, to: GameObj, down = false) => {
        const projectile = this.addAtSourceObj(from, down);
        const direction = this.k.vec2(
            to.pos.x - from.pos.x,
            to.pos.y - from.pos.y
        );
        const distance = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
        const normalizedDirection = this.k.vec2(direction.x / distance, direction.y / distance);

        projectile.onUpdate(() => handleSendProjectile(projectile, to, normalizedDirection, this.speed));
    };
};
