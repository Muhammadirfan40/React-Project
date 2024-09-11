

import Info from "./Info"
import Nav from "./Nav"
import bgimg from "../images/head-bg-img.jpg"
import Headtext from "./Headtext"



const Head = () => {
    return (
        <>
            <section className="head-bg" style={{ backgroundImage: `url(${bgimg})` }} >

                <Headtext />

            </section>

        </>
    )
}

export default Head;