import React, { useCallback } from "react";
import { Container, Text, Graphics } from "@pixi/react";
import * as PIXI from "pixi.js";

const Question = () => {
  const drawQuestion = useCallback((g) => {
    g.clear();
    g.beginFill(0xffffff);
    g.lineStyle(2, 0x232323, 1);
    g.drawRect(
      window.innerWidth / window.innerWidth,
      window.innerHeight - 120,
      760,
      120
    );
    g.endFill();
  }, []);
  return (
    <Container>
      <Graphics draw={drawQuestion} />
      <Text
        style={
          new PIXI.TextStyle({
            fill: ["#000000"],
            wordWrap: true,
            wordWrapWidth: 740,
          })
        }
        text="Question 1"
        position={[
          window.innerWidth / window.innerWidth + 20,
          window.innerHeight - 120 + 20,
        ]}
      />
    </Container>
  );
};

export default Question;
