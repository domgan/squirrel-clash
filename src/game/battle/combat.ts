import { KaboomCtx } from "kaboom";
import { Events, Scenes, Skills, SkillsSupport } from "../constants";
import { handleSkills } from "./events/onUpdateEvents";
import { launchProjectile, rest, triggerEarthquake } from "./skills";
import Player from "../characters/player";
import Enemy from "../characters/enemy";

const ANIMATION_TIME = 2; // todo: handle this in a better way

export const combat = async (k: KaboomCtx, player: Player, enemy: Enemy, skill: Skills | SkillsSupport) => {
    // todo: use kaboom states https://kaboomjs.com/#StateComp
    if (skill === SkillsSupport.Rest) {
        rest(player);
        await k.wait(ANIMATION_TIME);
    } else {
        const [damage, mana] = handleSkills(k, skill, player.battleGameObj, enemy.battleGameObj);
        await k.wait(ANIMATION_TIME);
        player.takeMana(mana);
        enemy.takeDamage(damage);
    }
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
    if (enemy.mana <= 0) {
        rest(enemy);
        await k.wait(ANIMATION_TIME);
        return;
    };
    const randomSkill = getRandomSkill();
    let [damage, mana] = [0, 0];
    if (randomSkill === Skills.Earthquake)
        [damage, mana] = triggerEarthquake(k, player.battleGameObj);
    else
        [damage, mana] = launchProjectile(k, randomSkill, enemy.battleGameObj, player.battleGameObj, true);
    await k.wait(ANIMATION_TIME);
    enemy.takeMana(mana);
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
