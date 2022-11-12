import React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import "./style.css";

// Dropdown component used in filter panel
const Dropdown = ({ label, options, callback, placeholder }) => {
  // Make each option an Option component
  const optionsComponents = options.map((option) => {
    return (
      <Option key={option} value={option}>
        {option}
      </Option>
    );
  });

  return (
    <FormControl>
      <FormLabel
        id="select-field-demo-label"
        htmlFor="select-field-demo-button"
      >
        {label}
      </FormLabel>
      <Select
        placeholder={placeholder}
        defaultValue="experiment"
        onChange={(e) => callback(e.target.textContent)}
      >
        {optionsComponents}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
