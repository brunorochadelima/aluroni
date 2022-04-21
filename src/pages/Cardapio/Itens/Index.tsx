import React from "react";
import itens from "./itens.json";

export default function Itens() {
  return (
    <div>
      {itens.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}
