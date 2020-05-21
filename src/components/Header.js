import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
  return (
    <div className="carHome">
      <CardActionArea style={{ marginLeft: "3rem" }}>
        <CardMedia
          className={classes.media}
          image={props.carImgOnProps}
          title={props.carNameOnProps}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.carNameOnProps}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Amount: ${props.carPriceOnProps}
          </Typography>
        </CardContent>
      </CardActionArea>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carImgOnProps: state.car.image,
    carNameOnProps: state.car.name,
    carPriceOnProps: state.car.price,
  };
};

export default connect(mapStateToProps, {})(Header);

// <figure className="image is-128x128">
//         <img src={props.carImgOnProps} alt={props.carNameOnProps} />
//       </figure>
//       <h2>{props.carNameOnProps}</h2>
//       <p>Amount: ${props.carPriceOnProps}</p>
