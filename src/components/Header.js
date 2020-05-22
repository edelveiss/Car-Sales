import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
});
const Header = (props) => {
  const classes = useStyles();
  console.log("headerprops", props);
  return (
    <div className="carHome">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.car.image}
          title={props.item.car.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.car.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Amount: ${props.item.car.price + props.item.additionalPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     carImgOnProps: state.car.image,
//     carNameOnProps: state.car.name,
//     carPriceOnProps: state.car.price,
//   };
// };

export default connect(null, {})(Header);

// <figure className="image is-128x128">
//         <img src={props.carImgOnProps} alt={props.carNameOnProps} />
//       </figure>
//       <h2>{props.carNameOnProps}</h2>
//       <p>Amount: ${props.carPriceOnProps}</p>
