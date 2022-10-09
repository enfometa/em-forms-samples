import React, { useEffect, useState } from "react";

function RadioGroup({ dataSource, name, selectedValue, onChange }) {
  const [value, setValue] = useState(selectedValue);
  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);
  const onChangeRadio = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <>
      {dataSource.map((item, index) => (
        <React.Fragment key={index}>
          <input
            id={`${name + index}`}
            name={name}
            type="radio"
            value={item.value}
            checked={item.value === value}
            onChange={onChangeRadio}
            style={{ marginRight: 5 }}
          />
          <label htmlFor={`${name + index}`} style={{ marginRight: 20 }}>
            {item.text}
          </label>
        </React.Fragment>
      ))}
    </>
  );
}

export default RadioGroup;
