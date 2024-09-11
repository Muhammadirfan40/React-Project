
import React from 'react'

function Contactus() {

    return (
        <>

            <section id="contact">

                <div className="container p-5">

                    <div className="row">

                        <div className="col-md-12 col-lg-6 mb-5 mb-lg-0">

                            <h2 className='text-center mb-4'>Contact Us</h2>
                            <p className='text-center mb-4'>
                                If you have any questions or need further assistance, please reach out
                                to us using the form below.
                            </p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows={4}
                                        placeholder="Your Message"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-dark">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="col-md-12 col-lg-6">


                            <div className="d-flex flex-column justify-content-cente align-items-center gap-sm-0">

                                <h2 className='text-center  mb-3'>Our Location</h2>

                                <p className='mb-5'>
                                    1234 Street Name,<br />
                                    City, State, 12345<br />
                                    Country
                                </p>

                                <h3 className='mb-3 text-center'>Contact Information</h3>

                                <p className='mb-5'>
                                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                                    <strong>Email:</strong> contact@yourdomain.com
                                </p>

                                <h3 className='mb-3 text-center'>Follow Us</h3>

                                <div>

                                    <a href="#" className="btn btn-outline-dark me-2">
                                        Facebook
                                    </a>
                                    <a href="#" className="btn btn-outline-dark me-2">
                                        Twitter
                                    </a>
                                    <a href="#" className="btn btn-outline-dark">
                                        LinkedIn
                                    </a>

                                </div>

                            </div>



                        </div>
                    </div>

                </div>



            </section>



        </>
    )
}

export default Contactus;
