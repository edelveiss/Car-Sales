import React from "react";
import { connect } from "react-redux";
const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
// const mapStateToProps = state => {
//   return {
//     additionalFeaturesOnProps: state.featureReducer.additionalFeatures,

//   };
// };

// export default connect(
//   mapStateToProps,
//   { }
// )(AdditionalFeature);

// <li>
//       {/* Add an onClick that will let you add a feature to your car */}
//       <button className="button">Add</button>
//       {props.feature.name} (+{props.feature.price})
//     </li>
