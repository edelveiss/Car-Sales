import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions";
const AddedFeature = (props) => {
  var itemObj = { itemId: props.choosenCarId, newFeature: props.feature };
  console.log("***addedfeature props", props);
  const removeFeature = (e) => {
    e.preventDefault();
    props.removeFeature(itemObj);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
