import { Button } from "../core-components/Button.js";
import { Text } from "../core-components/Text.js";
import React from "react";
import {  Link } from "react-router-dom";
import firebase from "firebase";

export function PraiseScreen(props) {
  
  return (
    <div className="screen">
      <Text text="Gutes Gelingen beim Ausprobieren deiner Lösungsmöglichkeit!"></Text>
      {/* <Text text="______________"></Text> */}
      
      <Text text="Toll, dass du dich für eine Handlungsoption entschieden hast :)"></Text>
      <Link to="/decision">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}
