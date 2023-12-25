import { GameObj, KaboomCtx, Vec2 } from "kaboom";
import { launchFireball } from "../battle/skills";
import { Skills } from "../constants";
import gameState, { listenForSkill } from "../gameState";

export const handleSkills = (k: KaboomCtx, player: GameObj, enemy: GameObj) => {
    const skill = listenForSkill();
    switch (skill) {
        case Skills.Fireball:
            launchFireball(k, player, enemy);
    };
    if (skill) {
        gameState.playerTurn = false
        k.wait(3);
    };
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