import { KaboomCtx } from "kaboom";
import { setBattleBackground } from "../background";
import Enemy from "../characters/enemy";
import Player from "../characters/player";
import { generateWalls } from "../common/boundaries";
import { Scenes, Events, Skills } from "../constants";
import { combat } from "./combat";

export const forestBattleScene = (k: KaboomCtx, setIsBattle: (isBattle: boolean) => void) => {
    k.scene(Scenes.Battle, (player: Player, enemy: Enemy) => {
        setIsBattle(true);
        setBattleBackground(k);
        generateWalls(k);

        player.battleSpawn();
        enemy.battleSpawn();

        player.battleGameObj.on(Events.PlayerBattleAction, (skill: Skills) => {
            // todo: improve - reduce num of args
            combat(k, player, enemy, skill);
        });
    });
};
