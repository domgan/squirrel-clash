import { KaboomCtx } from "kaboom";
import { setBattleBackground } from "../background";
import Enemy from "../characters/enemy";
import Player from "../characters/player";
import { generateWalls } from "../common/boundaries";
import { Scenes, Events } from "../constants";
import { combat } from "./combat";
import { Skill } from "../skills/skill";

export const forestBattleScene = (k: KaboomCtx, setIsBattle: (isBattle: boolean) => void) => {
    k.scene(Scenes.Battle, (player: Player, enemy: Enemy) => {
        setIsBattle(true);
        setBattleBackground(k);
        generateWalls(k);

        player.battleSpawn();
        enemy.battleSpawn();

        player.battleGameObj.on(Events.PlayerBattleAction, (skill: Skill) => {
            // todo: improve - reduce num of args
            void combat(k, player, enemy, skill);
        });
    });
};
