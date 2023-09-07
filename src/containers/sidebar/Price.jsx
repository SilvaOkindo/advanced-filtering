/* eslint-disable react/prop-types */
import Input from "../../components/input/Input";

const Price = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar__title">Price</h2>
      <div>
        <label className="sidebar__label-container">
          <input type="radio" onChange={handleChange} value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value={50}
          title="$0-$50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50-$100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100-$150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
