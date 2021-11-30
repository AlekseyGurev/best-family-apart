import React from "react";
import CheckBoxField from "../../form/checkBoxField";

const SortServicesList = ({ itemSelect, services }) => {
  return (
    <div className="card-body">
      <h6 className="card-title">Фильт по услугам</h6>
      <div>
        {Object.keys(services).map((service) => (
          <CheckBoxField
            key={services[service]._id}
            name={services[service].name}
            value={services[service].value}
            onChange={itemSelect}
          >
            {services[service].name}
          </CheckBoxField>
        ))}
      </div>
    </div>
  );
};

export default SortServicesList;
