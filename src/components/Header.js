import React from "react";
import { connect } from "react-redux";
const Header = (props) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carImgOnProps} alt={props.carNameOnProps} />
      </figure>
      <h2>{props.carNameOnProps}</h2>
      <p>Amount: ${props.carPriceOnProps}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carImgOnProps: state.carReducer.image,
    carNameOnProps: state.carReducer.name,
    carPriceOnProps: state.carReducer.price,
  };
};

export default connect(mapStateToProps, {})(Header);
