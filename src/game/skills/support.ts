import Character from "../characters/characterModel";
import { SkillNames, Sprites } from "../constants";
import { SupportSkill } from "./skillModel";

export class Rest extends SupportSkill {
    sprite = Sprites.Heart;
    name = SkillNames.Rest;
    reqMana = 0;

    rest = (character: Character) => {
        const heartObj = this.addAtSourceObj(character.battleGameObj, true);
        character.health = character.maxHealth;
        character.mana = character.maxMana;
        this.k.wait(2, () => {
            heartObj.destroy();
        });
    };
};
