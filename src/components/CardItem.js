import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Car from "./Car";
import { connect } from "react-redux";
import AddedFeatures from "./AddedFeatures";
import AdditionalFeatures from "./AdditionalFeatures";

import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";

function CardItem(props) {
  const classes = useStyles();
  const [featureToggle, setFeatureToggle] = useState(false);
  console.log("carditemprops", props.item.id);
  return (
    <Card className={classes.root}>
      <Header item={props.item} />
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => setFeatureToggle(!featureToggle)}
        >
          Added Features
        </Button>
        <Link to={`/car/${props.item.id}`}>
          <Button size="small" color="primary">
            Add / Remove Features
          </Button>
        </Link>
      </CardActions>
      {featureToggle && (
        <AddedFeatures
          features={props.item.car.features}
          choosenCar={props.item}
        />
      )}
    </Card>
  );
}
export default CardItem;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        maxWidth: 345,
        flexGrow: 1,
      },
      media: {
        height: 140,
      },
    },
  })
);
