import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
const AdditionalFeatures = (props) => {
  console.log("additional features props", props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.choosenCar.additionalFeatures.length ? (
        <ol type="1">
          {props.choosenCar.additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              choosenCarId={props.choosenCar.id}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

//export default AdditionalFeatures;

// const mapStateToProps = (state) => {
//   return {
//     additionalFeaturesOnProps: state.additionalFeatures,
//   };
// };

export default connect(null, {})(AdditionalFeatures);
