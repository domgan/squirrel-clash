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
    const gameObjects = Array.from(charactersState.gameObjects.values());
    charactersState.gameObjects = new Map();
    gameObjects.forEach(gameObj => gameObj.spawn());
    return gameObjects;
};

export default charactersState;
