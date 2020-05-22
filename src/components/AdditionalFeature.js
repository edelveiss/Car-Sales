import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = (props) => {
  var itemObj = { itemId: props.choosenCarId, newFeature: props.feature };
  const addFeature = (e) => {
    e.preventDefault();
    console.log("choosenCarId", props.choosenCarId);
    console.log("i am in addFeature additional features", props.feature);
    props.addFeature(itemObj);
  };
  console.log("additionalfeature", props.feature);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {
  addFeature,
})(AdditionalFeature);
