import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";

function ChooseCountry() {
  const { country, chooseStore } = useContext(StoreContext);
  const handleChange = (event) => {
    chooseStore(event.target.value);
  };

  return (
    <div>
      <label htmlFor="country-select">
        <strong>Select Country: </strong>
      </label>
      <select id="country-select" value={country} onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="US">United States of America (US)</option>
        <option value="FR">France</option>
        <option value="JP">Japan</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}

export default ChooseCountry;
