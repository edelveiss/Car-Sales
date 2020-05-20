import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect, useSelector } from "react-redux";
const AdditionalFeatures = (props) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeaturesOnProps.length ? (
        <ol type="1">
          {props.additionalFeaturesOnProps.map((item) => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

//export default AdditionalFeatures;

const mapStateToProps = (state) => {
  return {
    additionalFeaturesOnProps: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, {})(AdditionalFeatures);
