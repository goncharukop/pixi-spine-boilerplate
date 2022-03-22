import * as PIXI from 'pixi.js';
import { Spine } from 'pixi-spine';

const app = new PIXI.Application();
document.body.appendChild(app.view);

app.loader
    .add('character', 'assets/spineboy.json')
    .load(function (loader, resources) {
        const animation = new Spine(resources.character.spineData);
        app.stage.addChild(animation);

        animation.x = 400;
        animation.y = 400;

        app.start();
    });
