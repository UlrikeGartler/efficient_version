import { Button } from "../core-components/Button.js";
// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";
import firebase from "firebase";
import { connect } from "react-redux";
import React, { useState , useEffect} from "react";
import {  Link } from "react-router-dom";

const db = firebase.firestore();

export function SolutionScreen(props) {
 
  let input = "";

  if (props.subCategoryDecision === 1) {
    input = "mainCategory/strategy/subCategory/ask/1";
    
  } else if (props.subCategoryDecision === 2) {
    input = "mainCategory/strategy/subCategory/code/codeSolutions";
   
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/strategy/subCategory/concept/conceptSolutions";
   
  } else if (props.subCategoryDecision === 4) {
    input = "mainCategory/strategy/subCategory/error/solutions";
    
  } else if (props.subCategoryDecision === 5) {
    input = "mainCategory/strategy/subCategory/general/generalSolutions";
   
  } else if (props.subCategoryDecision === 6) {
    input = "mainCategory/strategy/subCategory/learn/learningSolutions";
    
  } else if (props.subCategoryDecision === 7) {
    input =
      "mainCategory/motivation/subCategory/concentration/concentrationSolutions";
    
  } else if (props.subCategoryDecision === 8) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
   
  } else if (props.subCategoryDecision === 9) {
    input =
      "mainCategory/motivation/subCategory/motivation/motivationSolutions";
    
  } else {
    input = "mainCategory/motivation/subCategory/general/generalSolutions";
   
  }

  
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    db.collection(input) 
    .get()
    .then(function (querySnapshot) {
      const items = []
      querySnapshot.forEach(function (doc) {
        items.push(doc.data());
       
      })
      setSolutions(items);
    })

  }, []);

 
 

  return (
    <div className="screen">
      <h1>
        Solutions
      </h1>

     
      {solutions.map((solutions) => (
        <div key={solutions.id}>
          <Link to="/praise">
            <Button text={solutions.solution}></Button>
          </Link>
        </div>
      ))}
      {/* </Link> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    subCategoryDecision: state.sub.subCategoryDecision,
  };
};

export default connect(mapStateToProps, null)(SolutionScreen);
