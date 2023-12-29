import { KaboomCtx } from "kaboom";
import { Events, Scenes } from "../constants";
import { handleSkills } from "./events/onUpdateEvents";
import Player from "../characters/player";
import Enemy from "../characters/enemy";
import { DamageSkill, ProjectileDamageSkill, Skill } from "../skills/skillModel";
import { Rest } from "../skills/support";
import { Earthquake, Fireball, IceShard, Thunderbolt } from "../skills/damage";

const ANIMATION_TIME = 2; // todo: handle this in a better way

export const combat = async (k: KaboomCtx, player: Player, enemy: Enemy, skill: Skill) => {
    // todo: use kaboom states https://kaboomjs.com/#StateComp
    if (skill instanceof Rest) { // todo: move
        skill.rest(player);
        await k.wait(ANIMATION_TIME);
    } else if (skill instanceof DamageSkill) {
        handleSkills(skill, player.battleGameObj, enemy.battleGameObj);
        await k.wait(ANIMATION_TIME);
        player.takeMana(skill.reqMana);
        enemy.takeDamage(skill.damage);
    };
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
    const randomSkill = getRandomSkill(k);
    if (randomSkill instanceof Earthquake && enemy.canUseSkill(randomSkill))
        randomSkill.triggerEarthquake(player.battleGameObj);
    else if (randomSkill instanceof ProjectileDamageSkill && enemy.canUseSkill(randomSkill))
        randomSkill.launchProjectile(enemy.battleGameObj, player.battleGameObj, true);
    else {
        await k.wait(ANIMATION_TIME);
        new Rest(k).rest(enemy);
        return;
    };
    await k.wait(ANIMATION_TIME);
    enemy.takeMana(randomSkill.reqMana);
    player.takeDamage(randomSkill.damage);
    if (!player.isAlive()) {
        k.go(Scenes.Defeated);
    };
};

const getRandomSkill = (k: KaboomCtx): DamageSkill => {
    const skills = [Fireball, Thunderbolt, IceShard, Earthquake];
    const randomIndex = Math.floor(Math.random() * skills.length);
    return new skills[randomIndex](k);
};
