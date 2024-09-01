import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Mario from "./Mario/Mario.js";
import Tiles from "./Tiles/Tiles.js";
import Generate from "./Generate/Generate.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Mario: new Mario({
    x: -100,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3,
  }),
  Tiles: new Tiles({
    x: -224,
    y: -164,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 200,
    visible: false,
    layerOrder: 1,
  }),
  Generate: new Generate({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
