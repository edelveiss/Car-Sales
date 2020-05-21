import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";

const AddedFeatures = (props) => {
  return (
    <div className="content" style={{ marginLeft: "2rem" }}>
      <h6>Added features:</h6>
      {props.carFeaturesOnProps.length ? (
        <ol
          type="1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {props.carFeaturesOnProps.map((item) => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

//export default AddedFeatures;

const mapStateToProps = (state) => {
  return {
    carFeaturesOnProps: state.car.features,
  };
};

export default connect(mapStateToProps, {})(AddedFeatures);
