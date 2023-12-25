import { KaboomCtx } from "kaboom";
import { Scenes } from "./constants";
import { setBackground, setBattleBackground } from "./background";
import { generateWalls } from "./boundaries";
import Player from "./characters/player";
import { GreySquirrel1, GreySquirrel2 } from "./characters/greySquirrels";
import { arrowsMovement } from "./movement";
import Enemy from "./characters/enemy";
import { handleSkills } from "./events/onUpdateEvents";
import { combat } from "./battle/turnBasedCombat";

export const registerScenes = (k: KaboomCtx, setIsBattle: (b: boolean) => void) => {
    k.scene(Scenes.Forest1, () => {
        setBackground(k);
        generateWalls(k);

        const player = new Player(k, [320, 375])
        const sq1 = new GreySquirrel1(k, [450, 520], 10)
        const sq2 = new GreySquirrel2(k, [800, 300], 10)

        player.spawn(true);
        sq1.spawn();
        sq2.spawn();
        sq1.registerEvents();
        sq2.registerEvents();

        arrowsMovement(player.gameObj);
    });

    k.scene(Scenes.Battle, (player: Player, enemy: Enemy) => {
        setIsBattle(true);
        setBattleBackground(k);
        generateWalls(k);

        const playerBattleObj = player.battleSpawn();
        const enemyBattleObj = enemy.battleSpawn();

        playerBattleObj.onUpdate(() => handleSkills(k, playerBattleObj, enemyBattleObj));
        playerBattleObj.onUpdate(() => combat(k, playerBattleObj, enemyBattleObj));
    });
};
