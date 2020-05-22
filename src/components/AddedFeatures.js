import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";

const AddedFeatures = (props) => {
  console.log("1addedfeaturesprops", props);
  console.log("2props.choosenCar.car.features", props.choosenCar);
  console.log("3props.choosenCar addedFeatures", props.choosenCar);
  return (
    <div className="content" style={{ marginLeft: "2rem" }}>
      <h6>Added features:</h6>
      {props.choosenCar.car.features.length ? (
        <ol
          type="1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {props.choosenCar.car.features.map((item) => (
            <AddedFeature
              key={item.id}
              feature={item}
              choosenCarId={props.choosenCar.id}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

//export default AddedFeatures;

// const mapStateToProps = (state) => {
//   return {
//     carFeaturesOnProps: state.car.features,
//   };
// };

export default connect(null, {})(AddedFeatures);
