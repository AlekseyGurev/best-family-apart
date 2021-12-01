/* eslint-disable jsx-a11y/anchor-is-valid */
import CheckBoxField from "../../form/checkBoxField";

const SortServicesList = ({ itemSelect, services, onClickPrice }) => {
  return (
    <div className="card-body">
      <h6 className="card-title">Фильт по услугам</h6>
      <div className="p-2">
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
      <div>
        <h6 className="card-title">Цена</h6>
        <div>
          <a onClick={onClickPrice} className="btn" name="small">
            По возрастанию
          </a>
        </div>
        <div>
          <a onClick={onClickPrice} className="btn" name="big">
            По убыванию
          </a>
        </div>
      </div>
    </div>
  );
};

export default SortServicesList;
