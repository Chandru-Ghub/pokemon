import React, { useEffect, useState } from "react";
import "../styles/Pokemon.css";
const Pokemons = ({ id, name, img, type, img2 }) => {
  const [set, setColor] = useState(type[0].type.name);
  const [tp, setTp] = useState("");

  // dynamic color options
  useEffect(() => {
    if (set == "bug") {
      setTp("#07dd07");
    } 
    else if (set == "fire") setTp("#ddab07");
    else if (set == "grass") setTp("#07dd07");
    else setTp("#07c8dd");
  }, [name]);

  return (
    <div className="card">
      <div className="myid">#0{id}</div>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <p className="pokname">{name}</p>
      <div className="abli">
        <p className="poktype" style={{ color: tp }}>
          {type[0].type.name} <span>&gt;&gt;&gt;</span>
        </p>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Pokemons;
