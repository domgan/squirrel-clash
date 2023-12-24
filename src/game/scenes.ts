import { KaboomCtx, GameObj } from "kaboom";
import { Scenes, Skills } from "./constants";
import { setBackground, setBattleBackground } from "./background";
import { generateWalls } from "./boundaries";
import { addPlayer, addGreySquirrelSoldier1, addGreySquirrelSoldier2 } from "./characters";
import { addBattlePlayer, addBattleEnemy } from "./battle/battleCharacters";
import { launchFireball } from "./battle/skills";
import { listenForSkill } from "./gameState";

export const registerScenes = (k: KaboomCtx, setIsBattle: (b: boolean) => void) => {
    k.scene(Scenes.Forest1, () => {
        setBackground(k);
        generateWalls(k);

        addPlayer(k);
        addGreySquirrelSoldier1(k);
        addGreySquirrelSoldier2(k);
    });

    k.scene(Scenes.Battle, (enemyIn: GameObj) => {
        setIsBattle(true);
        setBattleBackground(k);
        generateWalls(k);

        const player = addBattlePlayer(k);
        const enemy = addBattleEnemy(k, enemyIn);

        player.onUpdate(() => {
            const skill = listenForSkill();
            switch (skill) {
                case Skills.Fireball:
                    launchFireball(k, player, enemy);
            }
        });
    });
};