/* eslint-disable react/prop-types */
import Input from "../../components/input/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar__title">Category</h2>
      <div>
        <label className="sidebar__label-container">
          <input type="radio" onChange={handleChange} value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        /> 

        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels" 
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
