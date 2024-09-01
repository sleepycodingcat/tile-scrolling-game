/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.cloneCountY = 13;
    this.vars.cloneCountX = 16;
    this.vars.cameraX = 0;
    this.vars.cameraY = 3;

    this.watchers.cameraX = new Watcher({
      label: "CAMERA X",
      style: "slider",
      visible: true,
      value: () => this.vars.cameraX,
      setValue: (value) => {
        this.vars.cameraX = value;
      },
      step: 1,
      min: 0,
      max: 500,
      x: 240,
      y: 180,
    });
    this.watchers.cameraY = new Watcher({
      label: "CAMERA Y",
      style: "slider",
      visible: true,
      value: () => this.vars.cameraY,
      setValue: (value) => {
        this.vars.cameraY = value;
      },
      step: 1,
      min: 0,
      max: 500,
      x: 379,
      y: 180,
    });
  }
}
