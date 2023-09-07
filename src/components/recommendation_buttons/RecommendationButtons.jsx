/* eslint-disable react/prop-types */
import './recommendation_buttons.css'
import Button from '../button/Button'

const RecommendationButtons = ({handleClick}) => {


  const buttons =['Nike', 'Adidas', 'Puma', 'Vans'];


  return (
    <div className='recomm-btns'>
      <Button value='' text='All products' onClickHandler={handleClick}/>
      {buttons.map((btn, index) => {
        return <Button key={index} text={btn} value={btn} onClickHandler={handleClick}/>
      })}
    </div>
  )
}

export default RecommendationButtons 