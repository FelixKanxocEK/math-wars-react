import { useState } from "react";
import * as PIXI from "pixi.js";
import PantallaInicio from "./PantallaInicio";
import Battle from "./Battle";

const Inicio = () => {
  const [inicio, setInicio] = useState(false);

  return <>{inicio ? <PantallaInicio /> : <Battle />}</>;
};

export default Inicio;
