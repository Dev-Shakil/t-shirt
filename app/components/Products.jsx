import products from '@/product'
import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] w-[98%] mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-3">
            {products.map((product) =>{
                return <ProductCard product={product} />
            })}
        </div>
    </div>
  )
}

export default Products