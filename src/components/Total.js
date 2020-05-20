import React from "react";
import { connect } from "react-redux";
const Total = (props) => {
  return (
    <div className="content">
      <h4>
        Total Amount: ${props.priceOnProps + props.additionalPriceOnProps}
      </h4>
    </div>
  );
};

//export default Total;

const mapStateToProps = (state) => {
  return {
    additionalPriceOnProps: state.additionalPrice,
    priceOnProps: state.car.price,
  };
};

export default connect(mapStateToProps, {})(Total);
