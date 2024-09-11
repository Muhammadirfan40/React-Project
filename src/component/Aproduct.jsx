
import { useState, useEffect } from "react";
import axios from "axios";



const Aproduct = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get('https://666ab8457013419182d0a568.mockapi.io/Products')
            .then(res => {
                setProducts(res.data);
            }).then((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <section id="available">
                <div className="container p-5 pro-id">
                    <h1 className="text-center fw-bold mb-5">Availabe Products</h1>
                    <div className="row">

                        {
                            products.map((product) => {

                                return (
                                    <>

                                        <div className="col-md-4 mb-3 d-flex align-items-stretch">
                                            <div className="card border-0 shadow w-100">
                                                <img src={product.Image} className="card-img-top pro-img" alt="..." />
                                                <div className="card-body d-flex flex-column p-3">

                                                    <h5 className="card-title fw-bold">{product.Title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-primary-emphasis">{product.Price}</h6>
                                                    <i className="card-subtitle mb-2 text-muted">{product.Category}</i>
                                                    <p className="card-text text-secondary flex-grow-1 ">
                                                        {product.Description}
                                                    </p>
                                                    <a href="#" className="btn btn-dark mt-auto">Buy Now</a>

                                                </div>
                                            </div>
                                        </div>

                                    </>


                                )


                            })
                        }






                    </div>
                </div>
            </section>


        </>
    )
}

export default Aproduct