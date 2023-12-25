import { GameObj, GameObjID } from "kaboom";
import Character from "./character";

type CharactersState = {
    playerBattleObj?: GameObj,
    gameObjects: Map<GameObjID, Character>
};

const charactersState: CharactersState = {
    playerBattleObj: undefined,
    gameObjects: new Map<GameObjID, Character>()
};

export default charactersState;
