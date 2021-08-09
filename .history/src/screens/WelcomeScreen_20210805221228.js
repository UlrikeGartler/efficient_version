import { Text} from "../core-components/Text";
import { Button  } from "../core-components/Button";
import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Spinner from "./screens/Spinner";



export function WelcomeScreen(props) {
   

    

  return (
    <div className="screen">
      <Text text="Hallo, Junior Developer!"></Text>
      <Text text="Viel Spaß beim Arbeiten heute :)"></Text>
      <br></br>

     <Spinner></Spinner>

      <Link to="/support">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}