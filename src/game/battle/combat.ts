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
    player.battleGameObj.trigger(Events.PlayerBattleActionFinished, player, enemy)

    if (enemy.isAlive()) {
        player.battleGameObj.trigger(Events.EnemyBattleAction, player, enemy);
        await enemyAction(k, player, enemy);
        player.battleGameObj.trigger(Events.EnemyBattleActionFinished, player, enemy);
    }
    else {
        player.battleGameObj.trigger(Events.EndBattle, player, enemy);
        k.go(Scenes.Forest1, true);
    }
};

const enemyAction = async (k: KaboomCtx, player: Player, enemy: Enemy) => {
    // todo: enemy actions
    launchFireball(k, enemy.battleGameObj, player.battleGameObj, true)
    await k.wait(ANIMATION_TIME);
    player.takeDamage(BASE_DAMAGE);
};