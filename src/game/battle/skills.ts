import { KaboomCtx, GameObj } from "kaboom";
import { handleSendProjectile } from "./events/onUpdateEvents";
import { Skills, Sprites } from "../constants";

type Damage = number;
type Speed = number;
const skillsData: Record<Skills, [Sprites, Damage, Speed]> = {
    [Skills.Fireball]: [Sprites.Fireball, 50, 400],
    [Skills.Thunderbolt]: [Sprites.Thunderbolt, 75, 800],
    [Skills.IceShard]: [Sprites.IceShard, 25, 600],
    [Skills.Earthquake]: [Sprites.Earthquake, 95, 120],
};

export const launchProjectile = (k: KaboomCtx, skill: Skills, from: GameObj, to: GameObj, down = false): Damage => {
    const [sprite, damage, speed] = skillsData[skill];
    const projectile = addAtSourceObj(k, sprite, from, down);
    const direction = k.vec2(
        to.pos.x - from.pos.x,
        to.pos.y - from.pos.y
    );
    const distance = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
    const normalizedDirection = k.vec2(direction.x / distance, direction.y / distance);

    projectile.onUpdate(() => handleSendProjectile(projectile, to, normalizedDirection, speed));
    return damage;
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

export const triggerEarthquake = (k: KaboomCtx, at: GameObj): Damage => {
    const [sprite, damage, speed] = skillsData[Skills.Earthquake];
    const earthquakeObj = addAtSourceObj(k, sprite, at);
    k.shake(speed);
    k.wait(2, () => {
        earthquakeObj.destroy();
    });
    return damage;
};
