
import { useState, useEffect } from "react";
import axios from "axios";


const Feature = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {

        axios.get('https://666ab8457013419182d0a568.mockapi.io/categories')
            .then(res => {
                setCategories(res.data);
            }).then((error) => {
                console.log(error);
            })
    }, [])



    return (
        <>

            <section className="p-5 faetured">

                <div className="container">

                    <h1 className="text-center fw-bold mb-5">Featured Categories</h1>

                    <div className="row">

                        {
                            categories.map((category, index) => {

                                return (
                                    <>
                                        <div className="col-md-3 " key={index}>

                                            <div className=" category-name mb-5">

                                                <img src={category.image} className="card-img-top rounded-circle mb-2" height={300} alt="..." />

                                                <h5 className=" fs-3 text-center fw-bold">{category.name}</h5>

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

export default Feature;