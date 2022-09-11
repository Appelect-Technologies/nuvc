import * as React from "react";
import states from "../../utils/states.json";

const Location = ({ handleFilterCenters }) => {
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedDistrict, setSelectedDistrict] = React.useState("");

  const handleSelectState = (state) => setSelectedState(state);
  const handleSelectDistrict = (district) => setSelectedDistrict(district);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="form-control border-0">
            <label htmlFor="state" style={{ marginRight: 10 }}>
              State
            </label>
          
            <select
              labelId="state"
              className="w-75"
              onChange={(e) => {
                handleSelectState(e.target.value);
                handleFilterCenters(e.target.value, "state");
              }}
              id="state"
              label="State"
            >
              <option>Choose...</option>
              {states.map(({ state }, i) => (
                <option value={state} key={i}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-control border-0">
            <label htmlFor="state" style={{ marginRight: 10 }}>
              District
            </label>
            <select
              labelId="district"
              onChange={(e) => {
                handleSelectDistrict(e.target.value);
                handleFilterCenters(e.target.value, "district");
              }}
              className="w-75"
              id="district"
            >
              <option>Choose...</option>
              {states
                .find(({ state }) => state === selectedState)
                ?.districts.map((district, i) => (
                  <option value={district} key={i}>
                    {district}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
