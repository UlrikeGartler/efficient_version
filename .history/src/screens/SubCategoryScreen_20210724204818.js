import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, {  } from "react";
import { Button } from "../core-components/Button";
import {
  clickOnASK,
  clickOnCODE,
  clickOnCONCEPT,
  clickOnERROR,
  clickOnGENERAL,
  clickOnLEARN,
  clickOnConcentration,
  clickOnGeneral,
  clickOnMotivation,
  clickOnStress,
} from "../redux/actions/subCategoryActions";
import firebase from "firebase";

export function SubCategoryScreen(props) {
  console.log(props.mainCategoryDecision);

 

  const renderAuthButton = () => {
    if (props.mainCategoryDecision === 1) {
      return (
        <div>
         
          <br></br>
          <Button
            text="Ich weiß nicht, ob ich einen Senior fragen soll."
            function={props.clickOnASK}
          ></Button>
          <br></br>
          
          <br></br>
          <Button
            text="Ich weiß nicht, wie ich weiterprogrammieren soll."
            function={props.clickOnCODE}
          ></Button>
          <br></br>
         
          <br></br>
          <Button
            text="Ich kenne so viele Konzepte nicht."
            function={props.clickOnCONCEPT}
          ></Button>
          <br></br>
         
          <br></br>
          <Button
            text="Ich finde die Lösung für den Error nicht."
            function={props.clickOnERROR}
          ></Button>
          <br></br>
         
          <br></br>
          <Button
            text="Ich brauche generell Coding-Techniken."
            function={props.clickOnGENERAL}
          ></Button>
          <br></br>
        
          <br></br>
          <Button
            text="Ich brauche Ideen für Lernstrategien."
            function={props.clickOnLEARN}
          ></Button>
        </div>
      );
    } else {
      return (
        <div>
        
          <br></br>
          <Button
            text="Ich kann mich nicht konzentrieren."
            function={props.clickOnConcentration}
          ></Button>
          <br></br>
         
          <br></br>
          <Button
            text="Ich bin gestresst."
            function={props.clickOnStress}
          ></Button>
          <br></br>
         
          <br></br>
          <Button
            text="Ich kann mich nicht aufraffen."
            function={props.clickOnMotivation}
          ></Button>
          <br></br>
         
          <br></br>
          <Button
            text="Ich nehme die Dinge zu ernst."
            function={props.clickOnGeneral}
          ></Button>
        </div>
      );
    }
  };

  return (
    <div className="screen">
      {/* <h2>Decision- {props.mainCategoryDecision}</h2> */}
      <label>Bitte konkretisiere deinen Unterstützungsbereich: </label>
      <br></br>
      <br></br>
      <Link to="/solution">{renderAuthButton()}</Link>
      {/* <Link to="/solution">
        <button onClick={props.clickOnASK}>Ask</button>
      </Link>
      <Link to="/solution">
        <button onClick={props.clickOnCODE}>Code</button>
      </Link> */}
    </div>
  );
}
//global state from store
const mapStateToProps = (state) => {
  return {
    mainCategoryDecision: state.main.mainCategoryDecision,
    subCategoryDecision: state.sub.subCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnASK: () => dispatch(clickOnASK()),
    clickOnCODE: () => dispatch(clickOnCODE()),
    clickOnCONCEPT: () => dispatch(clickOnCONCEPT()),
    clickOnERROR: () => dispatch(clickOnERROR()),
    clickOnGENERAL: () => dispatch(clickOnGENERAL()),
    clickOnLEARN: () => dispatch(clickOnLEARN()),
    clickOnConcentration: () => dispatch(clickOnConcentration()),
    clickOnStress: () => dispatch(clickOnStress()),
    clickOnMotivation: () => dispatch(clickOnMotivation()),
    clickOnGeneral: () => dispatch(clickOnGeneral()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryScreen);
