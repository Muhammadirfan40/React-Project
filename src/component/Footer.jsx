

import React from 'react'

function Footer() {
    return (
        <>

            <footer className="footer bg-dark text-white">

                <div className="container">

                    <div className="row">

                        {/* About Us */}

                        <div className="col-md-3">
                            <h5>About Us</h5>
                            <p>
                                We offer a wide range of quality furniture designed to make your home
                                stylish and comfortable. Discover our collection and transform your
                                living space.
                            </p>
                        </div>

                        {/* Quick Links */}

                        <div className="col-md-3">
                            <h5>Quick Links</h5>
                            <ul className="listhpac">
                                <li>
                                    <a className='text-decoration-none text-white' href="#">Home</a>
                                </li>
                                <li>
                                    <a className='text-decoration-none text-white' href="#">Products</a>
                                </li>
                                <li>
                                    <a className='text-decoration-none text-white' href="#">About Us</a>
                                </li>
                                <li>
                                    <a className='text-decoration-none text-white' href="#">Contact</a>
                                </li>
                            </ul>
                        </div>


                        {/* Contact Info */}

                        <div className="col-md-3">
                            <h5>Contact Info</h5>
                            <p>
                                <i className="fas fa-map-marker-alt" /> 123 Furniture St, City,
                                Country
                            </p>
                            <p>
                                <i className="fas fa-phone" /> (123) 456-7890
                            </p>
                            <p>
                                <i className="fas fa-envelope" /> info@furniturewebsite.com
                            </p>
                        </div>

                        {/* Newsletter Signup */}

                        <div className="col-md-3">
                            <h5>Newsletter</h5>
                            <p>
                                Sign up for our newsletter to receive the latest updates and offers.
                            </p>
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your email address"
                                        required=""
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="row mt-4">

                        <div className="col-12 text-center">
                            <div className="social-icons">
                                <a href="#" className="fab fa-facebook-f" />
                                <a href="#" className="fab fa-twitter" />
                                <a href="#" className="fab fa-instagram" />
                                <a href="#" className="fab fa-linkedin-in" />
                            </div>
                        </div>

                    </div>

                </div>

            </footer>

        </>
    )
}

export default Footer;
