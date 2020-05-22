import React from "react";
import { connect } from "react-redux";
const Total = (props) => {
  console.log("totalprops", props);
  return (
    <div className="content">
      <h4>
        Total Amount: ${props.carItem.car.price + props.carItem.additionalPrice}
      </h4>
    </div>
  );
};

//export default Total;

// const mapStateToProps = (state) => {
//   return {
//     additionalPriceOnProps: state.additionalPrice,
//     priceOnProps: state.car.price,
//   };
// };

export default connect(null, {})(Total);
