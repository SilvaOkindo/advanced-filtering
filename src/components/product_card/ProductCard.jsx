/* eslint-disable react/prop-types */
 import './product_card.css'
 import {AiFillStar} from 'react-icons/ai'
 import {BsFillBagDashFill} from 'react-icons/bs'




 const ProductCard = ({img, title, reviews, prevPrice, newPrice}) => {



   return (
     <div className='product__card'>
      <img src={img} alt="" />
      <div className='card-info'>
        <h2 className='product-name'>{title}</h2>
        <div className="ratings">
          {
            [...Array(5)].map((star, index) => {
              const ratingValue = index + 1
              return (
                <label key={index}>
                  <AiFillStar className='star' color={ratingValue <= 4 ? '#ffc107' : '#e4e5e9'} size={16}/>
                </label>
              )
            })
          }
          <small>{reviews}</small>
        </div>

        <div className="price">
          <div>
          <del>{prevPrice}</del> <small>{'$' + newPrice}</small>
          </div>
          <BsFillBagDashFill className='bag' size={16}/>
        </div>

      </div>
     </div>
   )
 }
 
 export default ProductCard