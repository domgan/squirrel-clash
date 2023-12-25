import { GameObjID } from "kaboom";
import Character from "./character";

const charactersState = new Map<GameObjID, Character>();
export default charactersState;