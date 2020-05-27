import React from "react";

import CardItem from "./CardItem";
import { connect } from "react-redux";

import homeImg from "../assets/hero.jpg";

import { makeStyles, createStyles } from "@material-ui/core/styles";

function Home(props) {
  const classes = useStyles();
  console.log("home props", props);
  //const [featureToggle, setFeatureToggle] = useState(false);
  return (
    <div>
      <div className="home-wrapper">
        <img className="home-image" src={homeImg} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        {props.cars
          .filter((itemName) => {
            return itemName.car.name
              .toLowerCase()
              .includes(props.searchTerm.toLowerCase());
          })
          .map((item) => {
            console.log("item00000", item);
            return (
              <CardItem className={classes.root} key={item.id} item={item} />
            );
          })}
      </div>
    </div>
  );
}
//export default Home;

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps, {})(Home);

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
