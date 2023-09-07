/* eslint-disable react/prop-types */
import './sidebar.css';
import Category from './Category';
import Price from './Price';
import Colors from './Colors';

const Sidebar = ({handleChange}) => {
  return (
    <div className='sidebar'>
      <div>
        <h1>Logo</h1>
      </div> 
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>
    </div>
  ); 
};

export default Sidebar;