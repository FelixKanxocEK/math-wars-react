import React from 'react'
import * as PIXI from 'pixi.js'
import { Howl, Howler } from 'howler';

var sound = new Howl({
  src: ['../src/assets/music/pista1.mp3'],
  volume: 0.4,
  autoplay: true,
  loop: true
})

var select = new Howl({
  src:['../assets/soundeffects/button.mp3'],
  volume: 0.5
})



  const playSong = () =>{
    sound.stop();
    sound.play();
  }

  const muteSong =()=>{
    if(sound.mute()==false){
      sound.mute(true);
    }else{
      sound.mute(false);
    }
  }

  const buttonSound = ()=>{
    select.play();
  }

const Inicio = () => {
  //Application: screen declaration
  const app = new PIXI.Application({ width: 1280, height: 740 });
  //Screen app: Screen Scene base
  document.body.appendChild(app.view);
  //background scene
  const background = PIXI.Sprite.from('../src/assets/Scene3_Bg.jpeg')
  background.width = app.screen.width;
  background.height = app.screen.height;
  app.stage.addChild(background)
  
  //mediap player images
  const play = PIXI.Texture.from('../src/assets/buttonplay2.png');
  const buttonplay = new PIXI.Sprite(play);
  buttonplay.buttonMode = true;
  buttonplay.anchor.set(0.4);
  buttonplay.x = 20;
  buttonplay.y = 20;
  buttonplay.height = 45;
  buttonplay.width = 45;

  buttonplay.interactive = true;
  buttonplay.cursor = 'pointer';
  buttonplay.buttonMode = true;

  const mute = PIXI.Texture.from('../src/assets/buttonpause.png');
  const buttonMute = new PIXI.Sprite(mute);
  buttonMute.buttonMode = true;
  buttonMute.anchor.set(0.5);
  buttonMute.x = 75;
  buttonMute.y = 25;
  
  buttonMute.height = 35;
  buttonMute.width = 35;

  buttonMute.interactive = true;
  buttonMute.cursor = 'pointer';
  buttonMute.buttonMode = true;

  
  buttonplay.addEventListener("click", () => {
  
    playSong();
  });

  buttonMute.addEventListener("click", () => {
    muteSong();
  });
  

  app.stage.addChild(buttonplay);
  app.stage.addChild(buttonMute);


 
  //Image: person image 
  const texture = PIXI.Texture.from('../src/assets/Shot_1.png');
  const imageDemo = new PIXI.Sprite(texture);
  imageDemo.width = 200
  imageDemo.height = 200
  imageDemo.x = app.screen.height / 5.7;
  imageDemo.y = app.screen.width / 3.7;
  imageDemo.interactive = true
  //Button state by the first character
  imageDemo.on('click', function(){
    imageDemo.width *= 1.25,
    imageDemo.height *= 1.25
  })
  app.stage.addChild(imageDemo)

  //Text layer 
  const layer = new PIXI.Graphics();
  layer.lineStyle(2, 0x232323, 1)
  layer.beginFill(0xffffff);
  layer.drawRect(50, 620, 600, 100);
  layer.endFill();
  app.stage.addChild(layer)
  
  //Text layer: Answer 1
  const layer2 = new PIXI.Graphics();

  layer2.lineStyle(2, 0x303030, 1);
  layer2.beginFill(0xffffff);
  layer2.drawRect(600, 520, 200, 50);
  layer2.endFill();
  //Button state: first answer
  layer2.interactive = true
  layer2.on('click', function(){
    console.log('hola')
  })
  // layer2.on('pointerdown', onClick1 )

  app.stage.addChild(layer2)
  

  //text layer: Answer 2
  const layer3 = new PIXI.Graphics();
  layer3.lineStyle(2, 0x232323, 1);
  layer3.beginFill(0xffffff);
  layer3.drawRect(600, 590, 200, 50);
  layer3.endFill();
  //Button state: second answer
  layer3.interactive = true;
  layer3.on('click', function(){
    console.log('hola')
  })

  app.stage.addChild(layer3)
  //text layer: answer 3
  const layer4 = new PIXI.Graphics();
  layer4.lineStyle(2, 0x232323, 1);
  layer4.beginFill(0xffffff);
  layer4.drawRect(600, 660, 200, 50);
  layer4.endFill();
  //Button state: third answer
  layer4.interactive = true;
  layer4.on('click', function(){
    console.log('hola');
  })

  app.stage.addChild(layer4)

  //text
  const textQuestion = new PIXI.Text('Question 1: ')
  textQuestion.x = 70;
  textQuestion.y = 630;
  app.stage.addChild(textQuestion)
  //text: Answer 1
  const textAnswer1 = new PIXI.Text('Answer 1')
  textAnswer1.x = 610;
  textAnswer1.y = 530;
  app.stage.addChild(textAnswer1)
  //Text: Answer 2
  const textAnswer2 = new PIXI.Text('Answer 2')
  textAnswer2.x = 610;
  textAnswer2.y = 600;
  app.stage.addChild(textAnswer2)
  //Text: Answer 3
  const textAnswer3 = new PIXI.Text('Answer 3')
  textAnswer3.x = 610;
  textAnswer3.y = 670;
  app.stage.addChild(textAnswer3)
  //Style text
  const styleText = new PIXI.TextStyle({
    fontSize: 25,
    fontWeight: 'bold',
    fill: '#fafafa',
    dropShadow: true,
    dropShadowColor: 0x232323,
    dropShadowBlur: 6,
    dropShadowAngle: 21
  })
  //panel
  const panel1F = new PIXI.Graphics();
  app.stage.addChild(panel1F)
  //panel Bar first 
  const panelFirst = new PIXI.Graphics();
  panelFirst.lineStyle(4, 0x303030, 2);
  panelFirst.beginFill(0xab7f42);
  panelFirst.drawRect(90, 60, 250, 80);
  panelFirst.endFill();
  panel1F.addChild(panelFirst)
  //Second panel
  const secondPanel1 = new PIXI.Graphics();
  secondPanel1.lineStyle(4, 0x303030, 2);
  secondPanel1.beginFill(0xab7f42);
  secondPanel1.drawRect(100, 50, 250, 80);
  secondPanel1.endFill();
  panel1F.addChild(secondPanel1)

  //Name by the first Character
  const nameCharacter = new PIXI.Text('Name: Javi', styleText);
  nameCharacter.x = 150;
  nameCharacter.y = 65;
  app.stage.addChild(nameCharacter)

  //healthBar 1: first character
  //health bar
  const healthBar = new PIXI.Container();
  app.stage.addChild(healthBar);

  console.log(healthBar + 'hola')
  //line health bar
  const linestyle1 = new PIXI.Graphics();
  linestyle1.lineStyle(2, 0x232323, 1)
  linestyle1.beginFill(0x808080)
  linestyle1.drawRect(150, 100, 150, 20)
  healthBar.addChild(linestyle1)
  //red bar 
  const redBar = new PIXI.Graphics();
  redBar.beginFill(0xFF3300)
  redBar.drawRect(151, 100.5, 120, 18);
  redBar.endFill();
  healthBar.addChild(redBar)
  //heart Icon 1
  const container1 = PIXI.Texture.from('../src/assets/heart.png');
  const heartIcon = new PIXI.Sprite(container1);
  heartIcon.x = app.screen.height / 6.5;
  heartIcon.y = app.screen.width / 13;
  heartIcon.height = 25;
  heartIcon.width = 30;
  app.stage.addChild(heartIcon)

  //General panel by the first character
  const panel = new PIXI.Graphics();
  app.stage.addChild(panel);

  //Bar Panel 
  const panelBar = new PIXI.Graphics();
  panelBar.lineStyle(4, 0x303030, 3);
  panelBar.beginFill(0xab7f42);
  panelBar.drawRect(910, 60, 250, 80);
  panelBar.endFill();
  panel.addChild(panelBar)
  //second panel
  const secondPanel = new PIXI.Graphics();
  secondPanel.lineStyle(4, 0x303030, 3);
  secondPanel.beginFill(0xab7f42);
  secondPanel.drawRect(900, 50, 250, 80);
  secondPanel.endFill();
  panel.addChild(secondPanel)

  //text style: name for the second character
  const styleName = new PIXI.TextStyle({
    fontSize: 25,
    fontWeight: 'bold',
    fill: '#fafafa',
    dropShadow: true,
    dropShadowColor: 0x232323,
    dropShadowBlur: 5,
    dropShadowAngle: 45
  })

  //name for the second Character
  const secondName = new PIXI.Text('Name: Maikol', styleName);
  secondName.x = 960;
  secondName.y = 65;
  app.stage.addChild(secondName)

  //health bar: second character
  const healthBar2 = new PIXI.Graphics();
  app.stage.addChild(healthBar2);

  //line for health bar
  const linestyle2 = new PIXI.Graphics();
  linestyle2.lineStyle(2, 0x232323, 1);
  linestyle2.beginFill(0x808080)
  linestyle2.drawRect(960, 100, 150, 20);
  healthBar2.addChild(linestyle2)
  //red bar 2
  const redBar2 = new PIXI.Graphics();
  redBar2.beginFill(0xFF3300);
  redBar2.drawRect(961, 100.5, 100, 18)
  redBar2.endFill();
  healthBar2.addChild(redBar2)

  //heart Icon 2
  const container2 = PIXI.Texture.from('../src/assets/heart.png');
  const heartIcon2 = new PIXI.Sprite(container2);
  heartIcon2.x = app.screen.height / 0.80;
  heartIcon2.y = app.screen.width / 13;
  heartIcon2.height = 25;
  heartIcon2.width = 30;
  app.stage.addChild(heartIcon2)

  //life icon
  // const heartIcon = new PIXI.Graphics();
  // heartIcon.geometry(10, 10 ,100)
  // heartIcon.beginFill(0x232323);
  // heartIcon(heartIcon)

  //Image jet: Json file 
  PIXI.Assets.load('../src/assets/fighter.json').then(() => {
    const frames = [];

    for (let i = 0; i < 30; i++) {
      const val = i < 10 ? `0${i}` : i;

      frames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
    }

    const anim = new PIXI.AnimatedSprite(frames);

    anim.x = app.screen.width / 1.23;
    anim.y = app.screen.height / 1.6;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.5;
    // anim.play();

    app.stage.addChild(anim);

    app.ticker.add(() => {
      // anim.rotation += 0.01;
    })

    //Button state by the second character 
    anim.interactive = true

    anim.on('click', function(){
      console.log('hola')
    })
  })
  // return (
  //   <div>

  //   </div>
  // )
}

export default Inicio