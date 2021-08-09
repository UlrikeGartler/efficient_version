import React, {  } from "react";
import { connect } from "react-redux";
import { Button } from "../core-components/Button";
import { Link } from "react-router-dom";


import {
  takeMotivation,
  takeStrategy,
} from "../redux/actions/mainCategoryActions";

export function MainCategoryScreen(props) {
  console.log(props);

 

  

  return (
    <div className="screen">
     
      <label>
        Sehr gerne :) <br></br>
        Welche Art von Unterstützung brauchst du?
      </label>
      <br></br>
      <br></br>
     
      <br></br>
      <Link to="/subCategory">
        <Button text="Strategien" function={props.takeStrategy}></Button>
      </Link>
      <div id="box_strategy">
        Fragen
          <br></br>
          Programmieren
          <br></br>
          Konzepte
          <br></br>
          Fehler
          <br></br>
          Techniken
          <br></br>
          Lernen
        
      </div>
      <br></br>
     
      <br></br>
      <Link to="/subCategory">
        <Button text="Motivation" function={props.takeMotivation}></Button>
        
      </Link>
      <div id="box_motivation">
        Konzentration
          <br></br>
          Stress
          <br></br>
          Antrieb
          <br></br>
          Rat
          
        
      </div>
    </div>
  );
}

//global state from store
const mapStateToProps = (state) => {
  return {
    mainCategoryDecision: state.main.mainCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    takeStrategy: () => dispatch(takeStrategy()),
    takeMotivation: () => dispatch(takeMotivation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCategoryScreen);
