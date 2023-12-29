import { GameObj, GameObjID } from "kaboom";
import Character from "./characters/characterModel";

type CharactersState = {
    playerBattleObj?: GameObj,
    gameObjects: Map<GameObjID, Character>
};

const charactersState: CharactersState = {
    playerBattleObj: undefined,
    gameObjects: new Map<GameObjID, Character>()
};

export const restoreCharacters = () => {
    const gameObjects = charactersState.gameObjects;
    charactersState.gameObjects = new Map();
    Array.from(gameObjects.values()).forEach(gameObj => gameObj.spawn());
    return;
};

export default charactersState;
