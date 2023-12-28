import { GameObj, KaboomCtx, Vec2 } from "kaboom";
import { launchProjectile, triggerEarthquake } from "../skills";
import { Skills } from "../../constants";

export const handleSkills = (k: KaboomCtx, skill: Skills, player: GameObj, enemy: GameObj) => {
    let [damage, mana] = [0, 0];
    switch (skill) {
        case Skills.Fireball:
        case Skills.Thunderbolt:
        case Skills.IceShard:
            [damage, mana] = launchProjectile(k, skill, player, enemy);
            break;
        case Skills.Earthquake:
            [damage, mana] = triggerEarthquake(k, enemy);
    };
    return [damage, mana];
};

export const handleSendProjectile = (projectile: GameObj, target: GameObj, normalizedDirection: Vec2, speed: number) => {
    projectile.move(normalizedDirection.x * speed, normalizedDirection.y * speed);
    const distanceToTarget = Math.sqrt(
        (projectile.pos.x - target.pos.x) ** 2 + (projectile.pos.y - target.pos.y) ** 2
    );

    if (distanceToTarget < 100) {
        projectile.destroy();
    }
};