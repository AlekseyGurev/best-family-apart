import React from "react";
import PropTypes from "prop-types";

const SearchUsers = ({ value, handleSearch }) => {
    return (
        <input
            className="align-self-center ml-auto rounded border" 
            type="text"
            value={value}
            onChange={handleSearch}
            placeholder="Поиск..."
        />);
};

SearchUsers.propTypes = {
    value: PropTypes.string,
    handleSearch: PropTypes.func
};

export default SearchUsers;
