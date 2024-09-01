/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Generate extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Generate/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Generate/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "generate level" },
        this.whenIReceiveGenerateLevel
      ),
    ];
  }

  *generateLevel() {
    this.stage.vars.tileGrid = [];
    this.stage.vars.gridWidth = 30;
    this.stage.vars.gridHeight = 20;
    this.warp(this.addWallColumn)();
    for (let i = 0; i < this.toNumber(this.stage.vars.gridWidth) - 2; i++) {
      this.warp(this.addBoxedColumn)();
    }
    this.warp(this.addWallColumn)();
  }

  *addWallColumn() {
    for (let i = 0; i < this.toNumber(this.stage.vars.gridHeight); i++) {
      this.stage.vars.tileGrid.push(10);
    }
  }

  *addBoxedColumn() {
    this.stage.vars.tileGrid.push(10);
    for (let i = 0; i < this.toNumber(this.stage.vars.gridHeight) - 2; i++) {
      if (this.random(1, 10) === 1) {
        this.stage.vars.tileGrid.push(9);
      } else {
        this.stage.vars.tileGrid.push(2);
      }
    }
    this.stage.vars.tileGrid.push(10);
  }

  *whenIReceiveGenerateLevel() {
    yield* this.generateLevel();
  }
}
