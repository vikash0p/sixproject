import React from 'react'

const Home = async() => {
  const res = await fetch("https://fakestoreapi.com/products");
  const product = await res.json();
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum illo provident, natus numquam atque cupiditate fuga, iste repudiandae impedit accusamus sapiente, sed ullam maiores. Veritatis obcaecati beatae temporibus esse vitae culpa nam cupiditate, ab aliquid, velit quia nobis exercitationem corrupti consequatur labore. Quo blanditiis nisi itaque ratione ipsa rem?</h1>
    </div>
  )
}

export default Home
