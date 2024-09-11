import { Link } from "react-router-dom";




function Nav() {

    return (
        <>
            <section className="nav-section">

                <nav className="navbar navbar-expand-lg container  text-dark">

                    <a className="navbar-brand fw-bold fs-3" href="#">
                        irFan
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto menu-links">
                            <li className="nav-item ">
                                <Link className="nav-link active " aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Aproduct">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Feature">
                                    Categories
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Contactus">
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="d-flex gap-2 fs-4">
                        <span><i class="ri-search-line"></i></span>
                        <span><i class="ri-heart-3-line"></i></span>
                        <span><i class="ri-shopping-cart-line"></i></span>
                        <span><i class="ri-account-circle-line"></i></span>
                    </div>

                </nav>
            </section>
        </>
    )
}
export default Nav;