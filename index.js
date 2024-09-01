import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Tiles from "./Tiles/Tiles.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Tiles: new Tiles({
    x: 256,
    y: 200,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 200,
    visible: false,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
