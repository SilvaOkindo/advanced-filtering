import './App.css'
import Sidebar from './containers/sidebar/Sidebar'
import Products from './containers/products/Products'
import { useState } from 'react'

import products from './assets/db/data'
import ProductCard from './components/product_card/ProductCard'
import RecommendationButtons from './components/recommendation_buttons/RecommendationButtons'
import Navbar from './components/nav/Navbar'



const App = () => {

  // state management
  


  const [selectedCategory, setSelectedCategory] = useState(null);

  // input filter

  const [query, setQuery] = useState('');

  const handleInputchange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);


  // radio filter

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  // button filter

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input
    if(query) {
      filteredProducts = filteredItems
    }

    // filtering selected category

    if(selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => 
    <ProductCard key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice}
    />
    );
  }

  const result = filteredData(products, selectedCategory, query);


  return (
    <div className='container main'>
      <Sidebar handleChange={handleChange}/>
      <main>
      <Navbar handleInputchange={handleInputchange}/>
       <RecommendationButtons handleClick={handleClick}/>
      <Products result={result}/>
      </main>

    </div>
  )
}
 

export default App