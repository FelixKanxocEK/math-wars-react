import React, { useCallback } from "react";
import { Container, Text, Graphics } from "@pixi/react";
import * as PIXI from "pixi.js";

const Health = ({ x, y, x2, y2 }) => {
  const drawPanel = useCallback((g) => {
    g.clear();
    g.lineStyle(2, 0x232323, 1);
    g.beginFill(0xab7f42);
    g.drawRect(x, y, 250, 80);
    g.endFill();
  }, []);

  const drawPanel2 = useCallback((g) => {
    g.clear();
    g.lineStyle(2, 0x232323, 1);
    g.beginFill(0xab7f42);
    g.drawRect(x2, y2, 250, 80);
    g.endFill();
  }, []);

  return (
    <Container>
      <Graphics draw={drawPanel} />
      <Graphics draw={drawPanel2} />
      <Text
        text="Name: Javi"
        style={
          new PIXI.TextStyle({
            fontSize: 25,
            fontWeight: "bold",
            fill: ["#FAFAFA"],
            dropShadow: true,
            dropShadowColor: 0x232323,
            dropShadowBlur: 6,
            dropShadowAngle: 21,
          })
        }
        x={x + 55}
        y={y}
      />
      
    </Container>
  );
};

export default Health;
