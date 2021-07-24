import { Text } from "../core-components/Text.js";
import { Button  } from "../core-components/Button.js";
import React from "react";
import {  Link} from "react-router-dom";
import firebase from "firebase";

export function GoodbyeScreen(props) {
  

  return (
    <div className="screen">
      <Text text="Schönen Feierabend, "> </Text>
      <Text text="Junior Developer!"> </Text>

      
      <br></br>

      <Link to="/welcome">
        <Button text="Logout"></Button>
      </Link>
    </div>
  );
}
