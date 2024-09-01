/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tiles extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BIG", "./Tiles/costumes/BIG.svg", {
        x: 17.87500000000003,
        y: 17.875,
      }),
      new Costume("costume1", "./Tiles/costumes/costume1.svg", { x: 0, y: 0 }),
      new Costume("Wood-0", "./Tiles/costumes/Wood-0.png", { x: 16, y: 16 }),
      new Costume("Wood-1", "./Tiles/costumes/Wood-1.svg", { x: 8, y: 8 }),
      new Costume("Wood-2", "./Tiles/costumes/Wood-2.png", { x: 16, y: 16 }),
      new Costume("Wood-3", "./Tiles/costumes/Wood-3.png", { x: 16, y: 16 }),
      new Costume("Wood-4", "./Tiles/costumes/Wood-4.png", { x: 16, y: 16 }),
      new Costume("Wood-5", "./Tiles/costumes/Wood-5.png", { x: 16, y: 16 }),
      new Costume("Block-Gold", "./Tiles/costumes/Block-Gold.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Block-Wood", "./Tiles/costumes/Block-Wood.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Blue-1", "./Tiles/costumes/Blue-1.png", { x: 16, y: 16 }),
      new Costume("Blue-2", "./Tiles/costumes/Blue-2.png", { x: 16, y: 16 }),
      new Costume("Blue-3", "./Tiles/costumes/Blue-3.png", { x: 16, y: 16 }),
      new Costume("Blue-4", "./Tiles/costumes/Blue-4.png", { x: 16, y: 16 }),
      new Costume("Blue-5", "./Tiles/costumes/Blue-5.png", { x: 16, y: 16 }),
      new Costume("Blue-6", "./Tiles/costumes/Blue-6.png", { x: 16, y: 16 }),
      new Costume("Blue-7", "./Tiles/costumes/Blue-7.png", { x: 16, y: 16 }),
      new Costume("Blue-8", "./Tiles/costumes/Blue-8.png", { x: 16, y: 16 }),
      new Costume("Blue-9", "./Tiles/costumes/Blue-9.png", { x: 16, y: 16 }),
      new Costume("Question1", "./Tiles/costumes/Question1.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Question2", "./Tiles/costumes/Question2.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Question3", "./Tiles/costumes/Question3.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Question4", "./Tiles/costumes/Question4.png", {
        x: 16,
        y: 16,
      }),
      new Costume("coin1", "./Tiles/costumes/coin1.png", { x: 16, y: 16 }),
      new Costume("coin2", "./Tiles/costumes/coin2.png", { x: 16, y: 16 }),
      new Costume("coin3", "./Tiles/costumes/coin3.png", { x: 16, y: 16 }),
      new Costume("coin4", "./Tiles/costumes/coin4.png", { x: 16, y: 16 }),
      new Costume("MarioWalk1", "./Tiles/costumes/MarioWalk1.png", {
        x: 14,
        y: 27,
      }),
      new Costume("Goomba", "./Tiles/costumes/Goomba.png", { x: 16, y: 16 }),
      new Costume("Life", "./Tiles/costumes/Life.png", { x: 16, y: 16 }),
      new Costume("Bush", "./Tiles/costumes/Bush.png", { x: 16, y: 16 }),
      new Costume("cloud", "./Tiles/costumes/cloud.png", { x: 16, y: 16 }),
      new Costume("Orange-1", "./Tiles/costumes/Orange-1.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Orange-2", "./Tiles/costumes/Orange-2.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Orange-3", "./Tiles/costumes/Orange-3.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Orange-4", "./Tiles/costumes/Orange-4.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Orange-5", "./Tiles/costumes/Orange-5.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Orange-6", "./Tiles/costumes/Orange-6.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Orange-7", "./Tiles/costumes/Orange-7.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Orange-8", "./Tiles/costumes/Orange-8.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Orange-9", "./Tiles/costumes/Orange-9.png", {
        x: 16,
        y: 16,
      }),
      new Costume("pipe1", "./Tiles/costumes/pipe1.png", { x: 16, y: 16 }),
      new Costume("pipe2", "./Tiles/costumes/pipe2.png", { x: 16, y: 16 }),
      new Costume("pipe3", "./Tiles/costumes/pipe3.png", { x: 16, y: 16 }),
      new Costume("pipe4", "./Tiles/costumes/pipe4.png", { x: 16, y: 16 }),
      new Costume("Star", "./Tiles/costumes/Star.png", { x: 16, y: 16 }),
      new Costume("EndBox", "./Tiles/costumes/EndBox.png", { x: 26, y: 26 }),
      new Costume("Black-Zag", "./Tiles/costumes/Black-Zag.png", {
        x: 16,
        y: 16,
      }),
      new Costume("Black", "./Tiles/costumes/Black.png", { x: 16, y: 16 }),
      new Costume("grass8", "./Tiles/costumes/grass8.png", { x: 16, y: 16 }),
      new Costume("grass6", "./Tiles/costumes/grass6.png", { x: 16, y: 16 }),
      new Costume("grass10", "./Tiles/costumes/grass10.png", { x: 16, y: 16 }),
      new Costume("grass1", "./Tiles/costumes/grass1.png", { x: 16, y: 16 }),
      new Costume("grass2", "./Tiles/costumes/grass2.png", { x: 16, y: 16 }),
      new Costume("grass4", "./Tiles/costumes/grass4.png", { x: 16, y: 16 }),
      new Costume("grass5", "./Tiles/costumes/grass5.png", { x: 16, y: 16 }),
      new Costume("grass7", "./Tiles/costumes/grass7.png", { x: 16, y: 16 }),
      new Costume("grass9", "./Tiles/costumes/grass9.png", { x: 16, y: 16 }),
      new Costume("grass12", "./Tiles/costumes/grass12.png", { x: 16, y: 16 }),
      new Costume("grass13", "./Tiles/costumes/grass13.png", { x: 16, y: 16 }),
      new Costume("grass11", "./Tiles/costumes/grass11.png", { x: 16, y: 16 }),
      new Costume("grass15", "./Tiles/costumes/grass15.png", { x: 16, y: 16 }),
      new Costume("grass14", "./Tiles/costumes/grass14.png", { x: 16, y: 16 }),
      new Costume("grass16", "./Tiles/costumes/grass16.png", { x: 16, y: 16 }),
      new Costume("grass17", "./Tiles/costumes/grass17.png", { x: 16, y: 16 }),
      new Costume("grass18", "./Tiles/costumes/grass18.png", { x: 16, y: 16 }),
      new Costume("grass3", "./Tiles/costumes/grass3.png", { x: 16, y: 16 }),
    ];

    this.sounds = [new Sound("pop", "./Tiles/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "position tiles" },
        this.whenIReceivePositionTiles
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "clone level tiles" },
        this.whenIReceiveCloneLevelTiles
      ),
    ];

    this.vars.tileX = 16;
    this.vars.tileY = 16;
    this.vars.tile = 2;
    this.vars.tileIndex = -12;
  }

  *setup() {
    this.visible = true;
    this.vars.tileIndex = 1;
    this.vars.tileX = 16;
    for (let i = 0; i < this.toNumber(this.stage.vars.cloneCountX); i++) {
      this.vars.tileY = 16;
      for (let i = 0; i < this.toNumber(this.stage.vars.cloneCountY); i++) {
        this.createClone();
        this.vars.tileY += 32;
        this.vars.tileIndex++;
      }
      this.vars.tileX += 32;
      this.vars.tileIndex +=
        this.toNumber(this.stage.vars.gridHeight) -
        this.toNumber(this.stage.vars.cloneCountY);
    }
    this.visible = false;
  }

  *whenIReceivePositionTiles() {
    if (
      this.compare(
        Math.abs(
          this.toNumber(this.vars.tileX) -
            this.toNumber(this.stage.vars.cameraX)
        ),
        this.toNumber(this.stage.vars.cloneCountX) * 16
      ) > 0
    ) {
      if (this.compare(this.vars.tileX, this.stage.vars.cameraX) < 0) {
        yield* this.loopTileX(this.stage.vars.cloneCountX);
      } else {
        yield* this.loopTileX(0 - this.toNumber(this.stage.vars.cloneCountX));
      }
    }
    if (
      this.compare(
        Math.abs(
          this.toNumber(this.vars.tileY) -
            this.toNumber(this.stage.vars.cameraY)
        ),
        this.toNumber(this.stage.vars.cloneCountY) * 16
      ) > 0
    ) {
      if (this.compare(this.vars.tileY, this.stage.vars.cameraY) < 0) {
        yield* this.loopTileY(this.stage.vars.cloneCountY);
      } else {
        yield* this.loopTileY(0 - this.toNumber(this.stage.vars.cloneCountY));
      }
    }
    this.costume = "BIG";
    this.goto(
      this.toNumber(this.vars.tileX) - this.toNumber(this.stage.vars.cameraX),
      this.toNumber(this.vars.tileY) - this.toNumber(this.stage.vars.cameraY)
    );
    this.vars.tile = this.itemOf(
      this.stage.vars.tileGrid,
      this.vars.tileIndex - 1
    );
    if (this.compare(this.vars.tile, 2) < 0) {
      this.vars.tile = 2;
    }
    this.costume = this.vars.tile;
  }

  *loopTileX(tileSkip) {
    this.vars.tileX += this.toNumber(tileSkip) * 32;
    this.vars.tileIndex +=
      this.toNumber(tileSkip) * this.toNumber(this.stage.vars.gridHeight);
  }

  *loopTileY(tileSkip) {
    this.vars.tileY += this.toNumber(tileSkip) * 32;
    this.vars.tileIndex += this.toNumber(tileSkip);
  }

  *whenIReceiveCloneLevelTiles() {
    this.size = 200;
    this.stage.vars.cloneCountX = 16;
    this.stage.vars.cloneCountY = 13;
    yield* this.setup();
  }
}
