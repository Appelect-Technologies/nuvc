import * as React from "react";

export default function ListCentres({ values = [] }) {
  return (
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            {[
              "Sr.No.",
              "State",
              "District",
              "TP Name",
              "TC Name",
              "Sector",
              "Job Role",
              "TC SPOC Name",
              "TC SPOC Email ID",
              "TC Spoc Mobile",
              "TC Address",
            ].map((_, i) => (
              <th scope="col" key={i}>
                {_}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((item, i) => (
            <tr key={i}>
              {Object.keys(item).map((itemKey, i) => (
                <th scope="row" key={itemKey + i}>
                  {item[itemKey]}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
