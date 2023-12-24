import { KaboomCtx, GameObj } from "kaboom";
import { Scenes } from "./constants";
import { setBackground, setBattleBackground } from "./background";
import { generateWalls } from "./boundaries";
import { addPlayer, addGreySquirrelSoldier1, addGreySquirrelSoldier2 } from "./characters";
import { addBattlePlayer, addBattleEnemy } from "./battle/battleCharacters";

export const registerScenes = (k: KaboomCtx, setIsBattle: (b: boolean) => void) => {
    k.scene(Scenes.Forest1, () => {
        setBackground(k);
        generateWalls(k);

        addPlayer(k);
        addGreySquirrelSoldier1(k);
        addGreySquirrelSoldier2(k);
    });

    k.scene(Scenes.Battle, (enemy: GameObj) => {
        setIsBattle(true);
        setBattleBackground(k);
        generateWalls(k);

        addBattlePlayer(k);
        addBattleEnemy(k, enemy);
    });
};