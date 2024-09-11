

import Aboutimg from "../images/about section.jpg"

const About = () => {
  return (
    <>

      <section className="about-section p-5">

        <div className="container ">

          <div className="row">

            <div className="col-md-6">

              <h2 className='text-center'>About Us</h2>

              <p>
                Welcome to Modern Interior
                Design Studio, where style meets comfort.
                Since 2002, we've been dedicated to providing high-quality, stylish
                furniture that transforms your living space into a home. Our mission
                is to offer a diverse selection of furniture that caters to all tastes
                and budgets, ensuring that everyone can find something they love.
              </p>

              <p>
                Our team is passionate about design and committed to exceptional
                customer service. Whether you're looking for a statement piece or
                simple essentials, we are here to help you find the perfect fit for
                your space. Discover our wide range of products and let us assist you
                in creating a home that reflects your unique style.
              </p>

            </div>

            <div className="col-md-6 ">



              <div >

                <img src={Aboutimg} alt="" className="img-fluid rounded" />

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default About;