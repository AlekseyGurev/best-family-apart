import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ label, name, rows, onChange, value }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="form-group mb-4">
      <label htmlFor="exampleFormControlTextarea1">{label}</label>
      <textarea
        name={name}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={rows}
        onChange={handleChange}
        value={value}
      >
        {value}
      </textarea>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default TextArea;
