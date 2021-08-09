import { Text} from "../core-components/Text";
import { Button  } from "../core-components/Button";
import React from "react";
import { Link } from "react-router-dom";




export function WelcomeScreen(props) {
   

    

  return (
    <div className="screen">
      <Text text="Hallo, Junior Developer!"></Text>
      <Text text="Viel Spaß beim Arbeiten heute :)"></Text>
      <br></br>

     

      <Link to="/support">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}
