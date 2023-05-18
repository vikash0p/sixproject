import Image from 'next/image'
import React from 'react'
const ProductId = async ({ params }) => {
    const id = params.id
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return (
        <>
            <div className='container'>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                    <section className="col">
                        <Image src={product.image} alt={product.title} width={300} height={300} priority={true} className='object-fit-cover' />
                    </section>
                    <div className="col">
                        <h2>{product.title} </h2>
                        <p className="lead">{product.description} </p>

                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductId
