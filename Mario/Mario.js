/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mario extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("MarioWalk1", "./Mario/costumes/MarioWalk1.png", {
        x: 14,
        y: 28,
      }),
      new Costume("MarioWalk2", "./Mario/costumes/MarioWalk2.png", {
        x: 16,
        y: 28,
      }),
      new Costume("MarioWalk3", "./Mario/costumes/MarioWalk3.png", {
        x: 16,
        y: 28,
      }),
      new Costume("MarioWalk4", "./Mario/costumes/MarioWalk4.png", {
        x: 16,
        y: 28,
      }),
      new Costume("MarioTurn", "./Mario/costumes/MarioTurn.png", {
        x: 18,
        y: 30,
      }),
      new Costume("MarioJump", "./Mario/costumes/MarioJump.png", {
        x: 16,
        y: 28,
      }),
      new Costume("MarioCrouch", "./Mario/costumes/MarioCrouch.png", {
        x: 14,
        y: 10,
      }),
      new Costume("MarioSlide", "./Mario/costumes/MarioSlide.png", {
        x: 16,
        y: 26,
      }),
      new Costume("MarioDeath", "./Mario/costumes/MarioDeath.png", {
        x: 24,
        y: 24,
      }),
      new Costume("BIG", "./Mario/costumes/BIG.svg", { x: 103.5, y: 103.5 }),
      new Costume("MiniWalk1", "./Mario/costumes/MiniWalk1.png", {
        x: 12,
        y: 4,
      }),
      new Costume("MiniWalk2", "./Mario/costumes/MiniWalk2.png", {
        x: 16,
        y: 6,
      }),
      new Costume("MiniWalk1b", "./Mario/costumes/MiniWalk1b.png", {
        x: 12,
        y: 4,
      }),
      new Costume("MiniWalk2b", "./Mario/costumes/MiniWalk2b.png", {
        x: 16,
        y: 6,
      }),
      new Costume("MiniTurn", "./Mario/costumes/MiniTurn.png", { x: 14, y: 6 }),
      new Costume("MiniJump", "./Mario/costumes/MiniJump.png", { x: 16, y: 6 }),
      new Costume("MiniWalk3", "./Mario/costumes/MiniWalk3.png", {
        x: 16,
        y: 6,
      }),
      new Costume("MiniDeath", "./Mario/costumes/MiniDeath.png", {
        x: 16,
        y: 6,
      }),
      new Costume("MarioTransform", "./Mario/costumes/MarioTransform.png", {
        x: 14,
        y: 18,
      }),
      new Costume("FireWalk1", "./Mario/costumes/FireWalk1.png", {
        x: 14,
        y: 28,
      }),
      new Costume("FireWalk2", "./Mario/costumes/FireWalk2.png", {
        x: 16,
        y: 28,
      }),
      new Costume("FireWalk3", "./Mario/costumes/FireWalk3.png", {
        x: 16,
        y: 28,
      }),
      new Costume("FireWalk4", "./Mario/costumes/FireWalk4.png", {
        x: 16,
        y: 28,
      }),
      new Costume("FireTurn", "./Mario/costumes/FireTurn.png", {
        x: 18,
        y: 30,
      }),
      new Costume("FireJump", "./Mario/costumes/FireJump.png", {
        x: 16,
        y: 28,
      }),
      new Costume("FireCrouch", "./Mario/costumes/FireCrouch.png", {
        x: 14,
        y: 10,
      }),
      new Costume("FireSlide", "./Mario/costumes/FireSlide.png", {
        x: 16,
        y: 26,
      }),
      new Costume("FireDeath", "./Mario/costumes/FireDeath.png", {
        x: 24,
        y: 24,
      }),
      new Costume("FireThrow2", "./Mario/costumes/FireThrow2.png", {
        x: 14,
        y: 28,
      }),
      new Costume("FireThrow1", "./Mario/costumes/FireThrow1.png", {
        x: 14,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("Meow", "./Mario/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.broadcastAndWait("generate level");
    yield* this.broadcastAndWait("clone level tiles");
    this.stage.vars.cameraX = 240;
    this.stage.vars.cameraY = 180;
    while (true) {
      this.broadcast("position tiles");
      yield* this.moveCamera();
      yield;
    }
  }

  *moveCamera() {
    if (this.compare(this.stage.vars.cameraX, 240) < 0) {
      this.stage.vars.cameraX = 240;
    }
    if (this.compare(this.stage.vars.cameraY, 180) < 0) {
      this.stage.vars.cameraY = 180;
    }
    if (
      this.compare(
        this.stage.vars.cameraX,
        32 * this.toNumber(this.stage.vars.gridWidth) - 240
      ) > 0
    ) {
      this.stage.vars.cameraX =
        32 * this.toNumber(this.stage.vars.gridWidth) - 240;
    }
    if (
      this.compare(
        this.stage.vars.cameraY,
        32 * this.toNumber(this.stage.vars.gridHeight) - 180
      ) > 0
    ) {
      this.stage.vars.cameraY =
        32 * this.toNumber(this.stage.vars.gridHeight) - 180;
    }
  }
}
