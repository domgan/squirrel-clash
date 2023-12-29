import { GameObj, Vec2 } from "kaboom";
import { DamageSkill, ProjectileDamageSkill } from "../../skills/skill";
import { Earthquake } from "../../skills/damage";

export const handleSkills = (skill: DamageSkill, player: GameObj, enemy: GameObj) => {
    if (skill instanceof ProjectileDamageSkill)
        skill.launchProjectile(player, enemy);
    else if (skill instanceof Earthquake)
        skill.triggerEarthquake(enemy);
};

export const handleSendProjectile = (projectile: GameObj, target: GameObj, normalizedDirection: Vec2, speed: number) => {
    projectile.move(normalizedDirection.x * speed, normalizedDirection.y * speed);
    const distanceToTarget = Math.sqrt(
        (projectile.pos.x - target.pos.x) ** 2 + (projectile.pos.y - target.pos.y) ** 2
    );

    if (distanceToTarget < 100)
        projectile.destroy();
};