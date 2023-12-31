import { KaboomCtx, Vec2, GameObj, AreaComp, BodyComp, PosComp, ScaleComp, SpriteComp } from "kaboom";
import { Sprites, Tags } from "../constants";
import charactersState from "../gameState";
import Movement from "./movement";
import { Skill } from "../skills/skillModel";

export default abstract class Character {
    protected k: KaboomCtx;

    abstract sprite: Sprites;
    protected initPosition: Vec2;
    protected scale: number;
    protected areaScale: number;
    protected mass: number;

    abstract health: number;
    abstract maxHealth: number;
    abstract mana: number;
    abstract maxMana: number;

    public gameObj: GameObj<SpriteComp | PosComp | ScaleComp | AreaComp | BodyComp>;
    public battleGameObj: GameObj;
    public movement: Movement;

    constructor(
        k: KaboomCtx,
        initPosition: [number, number],
        mass: number = 1,
        scale: number = 0.2,
        areaScale: number = 0.6,
    ) {
        this.k = k;
        this.initPosition = k.vec2(...initPosition);
        this.mass = mass;
        this.scale = scale;
        this.areaScale = areaScale;

        // todo: don't initialize like this
        this.gameObj = this.k.make();
        this.battleGameObj = this.k.make();
        this.movement = new Movement(this.gameObj);
    }

    abstract battleSpawn: () => void;
    abstract registerEvents: () => void;
    abstract spawn: () => void;

    protected doSpawn(tag: Tags, flipX: boolean = false) {
        this.gameObj = this.k.add([
            this.k.sprite(this.sprite),
            this.k.pos(this.gameObj.pos ?? this.initPosition),
            this.k.area({ scale: this.areaScale }),
            this.k.body({ mass: this.mass }),
            this.k.scale(this.scale),
            Tags.Character,
            tag
        ]);
        this.gameObj.flipX = flipX;

        charactersState.gameObjects.set(this.gameObj.id!, this);
        this.movement = new Movement(this.gameObj);
    };

    takeDamage = (amount: number) => {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            this.destroy();
        }
    };

    takeMana = (amount: number) => {
        this.mana -= amount;
        if (this.mana <= 0) {
            this.mana = 0;
        }
    };

    canUseSkill = (skill: Skill) => skill.reqMana <= this.mana;

    isAlive = (): boolean => this.health > 0;

    destroy = () => {
        charactersState.gameObjects.delete(this.gameObj.id!);
        this.gameObj.destroy();
        this.battleGameObj.destroy();
    };
};
