import React from "react";
import Header from "./Header";
import AddedFeatures from "./AddedFeatures";
import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";

import { useParams } from "react-router-dom";
function Car(props) {
  const { carID } = useParams();
  console.log("carID", carID);

  const choosenCar = props.cars.find((el) => el.id === Number(carID));
  console.log("choosencar", choosenCar);
  return (
    <div>
      <div className="boxes" style={{ marginTop: "1rem" }}>
        <div className="box">
          <Header item={choosenCar} />

          {<AddedFeatures choosenCar={choosenCar} />}
          {/*featureToggle && <AddedFeatures carItem={props.carItem} />*/}
        </div>
        {/** */}
        <div className="box">
          <AdditionalFeatures choosenCar={choosenCar} />
          <Total carItem={choosenCar} />
        </div>
      </div>
    </div>
  );
}
export default Car;

// <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => setFeatureToggle(!featureToggle)}
//           >
//             Added Features
//           </Button>
