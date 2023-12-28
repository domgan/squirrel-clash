import { KaboomCtx } from "kaboom";
import { Events, Scenes, Skills } from "../constants";
import { handleSkills } from "./events/onUpdateEvents";
import { launchProjectile, triggerEarthquake } from "./skills";
import Player from "../characters/player";
import Enemy from "../characters/enemy";

const ANIMATION_TIME = 2; // todo: handle this in a better way

export const combat = async (k: KaboomCtx, player: Player, enemy: Enemy, skill: Skills) => {
    // todo: use kaboom states https://kaboomjs.com/#StateComp
    const damage = handleSkills(k, skill, player.battleGameObj, enemy.battleGameObj);
    await k.wait(ANIMATION_TIME);
    enemy.takeDamage(damage);
    player.battleGameObj.trigger(Events.PlayerBattleActionFinished, player, enemy)

    if (enemy.isAlive()) {
        player.battleGameObj.trigger(Events.EnemyBattleAction, player, enemy);
        await enemyAction(k, player, enemy);
        player.battleGameObj.trigger(Events.EnemyBattleActionFinished, player, enemy);
    }
    else {
        await k.wait(ANIMATION_TIME);
        player.battleGameObj.trigger(Events.EndBattle, player, enemy);
        k.go(Scenes.Forest1, true);
    };
};

const enemyAction = async (k: KaboomCtx, player: Player, enemy: Enemy) => {
    const randomSkill = getRandomSkill();
    let damage = 0;
    if (randomSkill === Skills.Earthquake)
        damage = triggerEarthquake(k, player.battleGameObj);
    else
        damage = launchProjectile(k, getRandomSkill(), enemy.battleGameObj, player.battleGameObj, true);
    await k.wait(ANIMATION_TIME);
    player.takeDamage(damage);
    if (!player.isAlive()) {
        k.go(Scenes.Defeated);
    };
};

const getRandomSkill = (): Skills => {
    const skills = [Skills.Fireball, Skills.Thunderbolt, Skills.IceShard, Skills.Earthquake];
    const randomIndex = Math.floor(Math.random() * skills.length);
    return skills[randomIndex];
};
