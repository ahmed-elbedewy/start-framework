import { useEffect } from "react";
function About() {
    useEffect(() => {
              document.title = "About";
            }, []);
    return (
        <>
            <div className=" home justify-content-center align-items-center d-flex flex-column">
                <div className="home-text container text-center">

                    <h1 className="text-uppercase fa-3x  text-white pt-5">about component</h1>
                    <div>
                        <div className="row d-flex justify-content-center align-items-center text-white">
                            <div className="line col-2 col-md-1"></div>
                            <p className="text-white m-0 p-0 col-1 fa fa-star"></p>
                            <div className="line col-2 col-md-1"></div>
                        </div>
                    </div>
                    <div className="row text-white text-start">
                        <div className="col-12 col-md-6  px-5 mt-3 ">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                        <div className="col-12 col-md-6 px-5 mt-3">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About