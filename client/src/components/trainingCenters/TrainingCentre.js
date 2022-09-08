import * as React from "react";
import { getTrainingCentres } from "../../utils/dataApi";
import Location from "./byLocation";
import Center from "./centres";

export default function TrainingCentre() {
  const [values, setValues] = React.useState([]);
  const [filteredValues, setFilteredValues] = React.useState([]);

  const fetchData = async () => {
    try {
      const res = await getTrainingCentres();
      const arr = res.data.map((item, i) => {
        item._id = i + 1;
        return item;
      });
      setValues(arr);
      setFilteredValues(arr);
      // console.log(arr);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterCenters = (val, key) => {
    if (key === "state") {
      const arr = values.filter(
        ({ state }) => state.toLowerCase() === val.toLowerCase()
      );
      setFilteredValues(arr);
    }
    if (key === "district") {
      const arr = filteredValues.filter(
        ({ state, districts }) => districts.toLowerCase() === val.toLowerCase()
      );
      setFilteredValues(arr);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-xl my-4">
      <h2 style={{ color: "#5c007a", textAlign: "center" }}>
        Training Centres
      </h2>
      <Location handleFilterCenters={handleFilterCenters} />
      <Center values={filteredValues} />
    </div>
  );
}
