/* eslint-disable react/prop-types */
import './navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'


const Navbar = ({handleInputchange}) => {
  return (
    <div>
      <nav>
      <input type="text" placeholder='Search...' onChange={handleInputchange}/>
      <div className='icons'>
        <AiOutlineShoppingCart className='icon' size={24}/>
        <AiOutlineHeart className='icon' size={24}/>
      </div>
      </nav>
    </div>
  )
}

export default Navbar