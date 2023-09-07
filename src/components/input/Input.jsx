/* eslint-disable react/prop-types */
import "./input.css";

const Input = ({handleChange, value, title, name, color}) => {
  return (
    <label className="sidebar__label-container">
      <input type="radio" name={name} onChange={handleChange} value={value} />
      <span className="checkmark" style={{background: color}}></span>{title}
    </label>
  );
};

export default Input;
