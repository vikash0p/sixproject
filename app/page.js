import React from 'react'

const Home = async() => {
  const res = await fetch("https://fakestoreapi.com/products");
  const product = await res.json();
  return (
    <div>
      
    </div>
  )
}

export default Home
