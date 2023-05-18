
import Image from 'next/image';
import Link from 'next/link';
import { resolve } from 'styled-jsx/css';


const Home = async () => {
   
   
    const res = await fetch("https://fakestoreapi.com/products");
    const product = await res.json();

    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-1 row-cols-md-3 row-cols-lg-4">
                {
                    product.map((pro) => {
                        return (
                            <div className='col mb-3 rounded-0'>
                                <div className="card h-100  border-primary " >
                                    <Image src={pro.image} alt={pro.title} priority={true} width={200} height={230} className='card-img-top' />
                                    <div className="card-body ">
                                        <h5 className="card-title">{pro.title.substring(0, 10)}</h5>
                                        <p className="card-text">{pro.description.substring(0, 20)} </p>
                                        <Link href={`/product/${pro.id}`} className="btn btn-primary px-5 m-auto rounded-pill">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
