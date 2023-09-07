/* eslint-disable react/prop-types */
import './Button.css'

const Button = ({text, value, onClickHandler}) => {
  return (
    <button className='btn' onClick={onClickHandler} value={value}>{text}</button>
  );
}

export default Button