import { GameObj } from "kaboom";
import { SkillNames, Sprites } from "../constants";
import { DamageSkill, ProjectileDamageSkill } from "./skill";

export class Fireball extends ProjectileDamageSkill {
    name = SkillNames.Fireball;
    sprite = Sprites.Fireball;
    damage = 50;
    speed = 400;
    reqMana = 50;
};

export class Thunderbolt extends ProjectileDamageSkill { // todo: not projectile
    name = SkillNames.Thunderbolt;
    sprite = Sprites.Thunderbolt;
    damage = 75;
    speed = 800;
    reqMana = 75;
};

export class IceShard extends ProjectileDamageSkill {
    name = SkillNames.IceShard;
    sprite = Sprites.IceShard;
    damage = 25;
    speed = 600;
    reqMana = 25;
};

export class Earthquake extends DamageSkill {
    name = SkillNames.Earthquake;
    sprite = Sprites.Earthquake;
    damage = 95;
    reqMana = 100;
    magnitude = 120;

    triggerEarthquake = (at: GameObj) => {
        const earthquakeObj = this.addAtSourceObj(at);
        this.k.shake(this.magnitude);
        this.k.wait(2, () => {
            earthquakeObj.destroy();
        });
    };
};
