import * as PIXI from 'pixi.js'
import { Howl, Howler } from 'howler';

Howler.autoUnlock = false;
var start = new Howl({
    src: ['../src/assets/soundeffects/start.mp3'],
    volume: 1
})
var pista1 = new Howl({
    src: ['../src/assets/music/pista1.mp3'],
    autoplay: false,
    loop: true,
    volume: 0.2
})



const playStart = () =>{
    start.play();
}


const PantallaInicio =()=>{
    //Application: screen declaration
    const app = new PIXI.Application({
        resizeTo: window
    });
   //Screen app: Screen scene base
    document.body.appendChild(app.view);
    //background scene
    const background = PIXI.Sprite.from('../src/assets/scene0-Bg.jpeg');
    background.width = app.screen.width;
    background.height = app.screen.height;
    app.stage.addChild(background)

    //image logo
    const logo = PIXI.Texture.from('../src/assets/logo-math-wars-5.svg');
    const imageLogo = new PIXI.Sprite(logo);
     
    imageLogo.width = 500;
    imageLogo.height= 350;
    imageLogo.x = 525;
    imageLogo.y = 25;

    //start button
    const start = PIXI.Texture.from('../src/assets/button-start.png');
    const buttonStart = new PIXI.Sprite(start);
    buttonStart.buttonMode = true;
    buttonStart.width = 350;
    buttonStart.height = 150;
    buttonStart.x = 600;
    buttonStart.y = 500;

    buttonStart.interactive = true;
    buttonStart.cursor = 'pointer';
    buttonStart.buttonMode = true;

    buttonStart.addEventListener("click", () => {
        playStart();
    });

    app.stage.addChild(buttonStart);
    app.stage.addChild(imageLogo);
    



}


export default PantallaInicio
