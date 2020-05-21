import React, { useState } from "react";
import Header from "./Header";
import AddedFeatures from "./AddedFeatures";
import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
function Car(props) {
  //const [featureToggle, setFeatureToggle] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <div className="boxes">
        <div className="box">
          <Header carItem={props.carItem} />

          {<AddedFeatures carItem={props.carItem} />}
          {/*featureToggle && <AddedFeatures carItem={props.carItem} />*/}
        </div>

        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </div>
  );
}
export default Car;
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

// <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => setFeatureToggle(!featureToggle)}
//           >
//             Added Features
//           </Button>
