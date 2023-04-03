import { useMemo, useState, useCallback } from "react";
import { Stage, Container, Sprite, Text, AnimatedSprite, Graphics } from "@pixi/react";
import * as PIXI from 'pixi.js';
import scene1 from "../assets/scenes/scene1-Bg.jpeg";
import scene2 from "../assets/scenes/scene4.jpeg";
import scene3 from "../assets/scenes/Scene3_Bg.jpeg";
import playerShooter from "../assets/characters/Shot_1.png";
import playerCharacter from "../assets/characters/character1.png";
import Question from "../components/questions/Question";
import Asnwer from "../components/questions/Asnwer";
import Health from "../components/health/Health";

/**
 * Prácticamente lo que tu harás es agregar la barra de vida
 * Como puedes ver en la parte de abajo puedes utilizar 
 * los siguiente componentes comunes que hasta ahora yo he usado:
 * 1.- Stage (que solo se usa una vez por "pagina") **No necesitar usarlo de nuevo
 * 2.- Container
 * 3.- Text
 * 4.- Sprite
 * 5.- Graphics
 *  **/
const Battle = () => {
    const scenes = [scene1, scene2, scene3];
    const answers = [1.95, 1.50, 1.22];
    const health = [
        {x: window.innerWidth / window.innerWidth + 90, y: window.innerHeight / window.innerHeight + 60, x2: window.innerWidth / window.innerWidth + 100, y2: window.innerHeight / window.innerHeight + 50}, 
        {x: window.innerWidth - 350, y: window.innerHeight / window.innerHeight + 60, x2: window.innerWidth - 360, y2: window.innerHeight / window.innerHeight + 50}
      ];
    //random
    const randomScenes = (max) => {
      const random = Math.floor(Math.random() * max);
      return scenes[random];
    };
  
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={{ resizeTo: window, autoDensity: true, background: 0x01262a }}
      >
        <Sprite
          image={randomScenes(3)}
          width={window.innerWidth}
          height={window.innerHeight}
        />
  
        {/* PLAYER 1 */}
        <Container position={[200, 20]}>
          <Sprite
            image={playerShooter}
            x={0}
            y={window.innerHeight / 2}
            width={250}
            height={250}
          />
        </Container>
  
        {/* PLAYER 2 */}
        <Container position={[window.innerWidth - 500, 50]}>
          <Sprite
            image={playerCharacter}
            x={100}
            y={window.innerHeight / 2}
            width={250}
            height={250}
          />
        </Container>
  
        {/* CONTAINER EXCERSICE */}
        <Question />
  
        {/* CONTAINER ANSWERS */}
        {answers.map((answer, key) => (
            <Asnwer key={key} x={answer} y={120} width={200} height={60} respuesta={`Answer ${key + 1}`}/>
        ))}
  
        {health.map((vida, key) => (
          <Health 
            key={ key + 1 }
            x={vida.x}
            x2={vida.x2}
            y={vida.y}  
            y2={vida.y2}
          />
        ))}
  
      </Stage>
    )
}

export default Battle