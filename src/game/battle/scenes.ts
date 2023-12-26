import { KaboomCtx } from "kaboom";
import { setBattleBackground } from "../background";
import charactersState from "../characters/charactersState";
import Enemy from "../characters/enemy";
import Player from "../characters/player";
import { generateWalls } from "../common/boundaries";
import { Scenes, Events, Skills } from "../constants";
import { combat } from "./turnBasedCombat";

export const forestBattleScene = (k: KaboomCtx, setIsBattle: (isBattle: boolean) => void) => {
    k.scene(Scenes.Battle, (player: Player, enemy: Enemy) => {
        setIsBattle(true);
        setBattleBackground(k);
        generateWalls(k);

        const playerBattleObj = player.battleSpawn();
        const enemyBattleObj = enemy.battleSpawn();
        charactersState.playerBattleObj = playerBattleObj;

        playerBattleObj.on(Events.PlayerBattleAction, (skill: Skills) => {
            combat(k, playerBattleObj, enemyBattleObj, skill);
        });
    });
};
