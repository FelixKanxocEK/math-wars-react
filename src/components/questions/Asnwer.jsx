import React, { useCallback } from "react";
import { Container, Text, Graphics } from "@pixi/react";
import * as PIXI from "pixi.js";

const Asnwer = ({x, y, width, height, respuesta}) => {
  const drawAnswer = useCallback((g) => {
    g.clear();
    g.beginFill(0xffffff);
    g.lineStyle(2, 0x232323, 1);
    g.drawRect(window.innerWidth / x, window.innerHeight - y, width, height);
    g.endFill();
  }, []);

  return (
    <Container>
      <Graphics draw={drawAnswer} />
      <Text
        style={
          new PIXI.TextStyle({
            fill: ["#000000"],
            wordWrap: true,
            wordWrapWidth: width - 10,
          })
        }
        text={respuesta}
        position={[
          window.innerWidth / x + 5,
          window.innerHeight - y + 5,
        ]}
      />
    </Container>
  );
};

export default Asnwer;
