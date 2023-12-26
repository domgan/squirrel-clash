import { KaboomCtx } from "kaboom";
import { Events, Scenes, Skills } from "../constants";
import { handleSkills } from "./events/onUpdateEvents";
import { launchFireball } from "./skills";
import Player from "../characters/player";
import Enemy from "../characters/enemy";

const ANIMATION_TIME = 2; // todo: handle this in a better way
const BASE_DAMAGE = 50;

export const combat = async (k: KaboomCtx, player: Player, enemy: Enemy, skill: Skills) => {
    // todo: use kaboom states https://kaboomjs.com/#StateComp
    handleSkills(k, skill, player.battleGameObj, enemy.battleGameObj);
    await k.wait(ANIMATION_TIME);
    enemy.takeDamage(BASE_DAMAGE);

    if (enemy.isAlive())
        await enemyAction(k, player, enemy);
    else {
        player.battleGameObj.trigger(Events.EnemyBattleAction);
        k.go(Scenes.Forest1, true);
    }
};

const enemyAction = async (k: KaboomCtx, player: Player, enemy: Enemy) => {
    // todo: enemy actions
    launchFireball(k, enemy.battleGameObj, player.battleGameObj, true)
    await k.wait(ANIMATION_TIME);
    player.takeDamage(BASE_DAMAGE);

    player.battleGameObj.trigger(Events.EnemyBattleAction);
};