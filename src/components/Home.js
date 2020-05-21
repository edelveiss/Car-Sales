import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Car from "./Car";
import { connect } from "react-redux";
import AddedFeatures from "./AddedFeatures";
import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";
import homeImg from "../assets/hero.jpg";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
//import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
//import { useState } from "react";
function Home(props) {
  const classes = useStyles();
  const [featureToggle, setFeatureToggle] = useState(false);
  return (
    <div>
      <div className="home-wrapper">
        <img className="home-image" src={homeImg} alt="" />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <Header />
            <CardActions style={{ marginLeft: "4rem" }}>
              <Button
                size="small"
                color="primary"
                onClick={() => setFeatureToggle(!featureToggle)}
              >
                Added Features
              </Button>
              <Link to={"/car"} carItem={props.carItem}>
                <Button size="small" color="primary">
                  Add / Remove Features
                </Button>
              </Link>
            </CardActions>
            {featureToggle && <AddedFeatures carItem={props.carItem} />}
          </Card>
        </Grid>
      </Grid>
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

// <div className="box">
//           <Header />
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <Button
//               style={{ width: "10rem" }}
//               variant="contained"
//               color="secondary"
//               onClick={() => setFeatureToggle(!featureToggle)}
//             >
//               Added Features
//             </Button>
//             <Link to={"/car"} carItem={props.carItem}>
//               <Button variant="contained" color="secondary">
//                 Add / Remove Features
//               </Button>
//             </Link>
//           </div>
//           {featureToggle && <AddedFeatures carItem={props.carItem} />}
//         </div>
