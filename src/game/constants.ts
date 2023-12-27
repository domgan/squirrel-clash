export const SCREEN_WIDTH = 1280;
export const SCREEN_HEIGHT = 768;

export const SPEED_NORMAL = 300;

export enum Tags {
    Character = "character",
    Player = "player",
    Enemy = "enemy",
}

export enum Sprites {
    Ground = "ground",
    RedSquirrel = "red-squirrel",
    GreySquirrel1 = "grey-squirrel-1",
    GreySquirrel2 = "grey-squirrel-2",
    VersusOverlay = "versus-overlay",
    BattleBackground = "battle-background",
    DefeatedBackground = "defeated-background",
    Fireball = "fireball",
    Thunderbolt = "thunderbolt",
    IceShard = "ice-shard",
    Earthquake = "earthquake",
}

export enum Scenes {
    Forest1 = "forest-1",
    Battle = "battle",
    Defeated = "defeated",
}

export enum Sounds {
    VivaLaVida = "viva-la-vida"
}

export enum Skills {
    Fireball = "Fireball",
    IceShard = "Ice Shard",
    Thunderbolt = "Thunderbolt",
    Earthquake = "Earthquake",
}

export enum Events {
    StartBattle = "start-battle",
    EndBattle = "end-battle",
    PlayerBattleAction = "player-battle-action",
    PlayerBattleActionFinished = "player-battle-action-finished",
    EnemyBattleAction = "enemy-battle-action",
    EnemyBattleActionFinished = "enemy-battle-action-finished",
}