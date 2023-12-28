import { KaboomCtx, GameObj } from "kaboom";
import { handleSendProjectile } from "./events/onUpdateEvents";
import { Skills, Sprites } from "../constants";
import Character from "../characters/character";

type Damage = number;
type Speed = number;
type Mana = number;
const skillsData: Record<Skills, [Sprites, Damage, Speed, Mana]> = {
    [Skills.Fireball]: [Sprites.Fireball, 50, 400, 50],
    [Skills.Thunderbolt]: [Sprites.Thunderbolt, 75, 800, 75],
    [Skills.IceShard]: [Sprites.IceShard, 25, 600, 25],
    [Skills.Earthquake]: [Sprites.Earthquake, 95, 120, 100],
};

export const launchProjectile = (k: KaboomCtx, skill: Skills, from: GameObj, to: GameObj, down = false): [Damage, Mana] => {
    const [sprite, damage, speed, mana] = skillsData[skill];
    const projectile = addAtSourceObj(k, sprite, from, down);
    const direction = k.vec2(
        to.pos.x - from.pos.x,
        to.pos.y - from.pos.y
    );
    const distance = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
    const normalizedDirection = k.vec2(direction.x / distance, direction.y / distance);

    projectile.onUpdate(() => handleSendProjectile(projectile, to, normalizedDirection, speed));
    return [damage, mana];
};

const addAtSourceObj = (k: KaboomCtx, sprite: Sprites, sourceObj: GameObj, down = false) => {
    const gameObj = k.add([
        k.sprite(sprite),
        k.pos(sourceObj.pos.x, sourceObj.pos.y),
        k.scale(0.3)
    ]);
    if (!down) {
        gameObj.flipX = true;
        gameObj.flipY = true;
    };
    return gameObj;
};

export const triggerEarthquake = (k: KaboomCtx, at: GameObj): [Damage, Mana] => {
    const [sprite, damage, speed, mana] = skillsData[Skills.Earthquake];
    const earthquakeObj = addAtSourceObj(k, sprite, at);
    k.shake(speed);
    k.wait(2, () => {
        earthquakeObj.destroy();
    });
    return [damage, mana];
};

export const rest = (character: Character) => {
    character.health = character.maxHealth;
    character.mana = character.maxMana;
};
