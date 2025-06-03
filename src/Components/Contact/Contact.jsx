import { useEffect } from "react";
function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <>
            <div className="  justify-content-center align-items-center d-flex flex-column">
                <div className="home-text container text-center">

                    <h1 className="text-uppercase  fw-bold text-dark pt-3">conatct section</h1>
                    <div className="mb-5">
                        <div className="row d-flex justify-content-center align-items-center text-dark">
                            <div className="line2 col-2 col-md-1"></div>
                            <p className="text-dark m-0 p-0 col-1 fa fa-star"></p>
                            <div className="line2 col-2  col-md-1"></div>
                        </div>
                    </div>
                    <div className="row mb-5   m-auto ">
                        <form action="" >
                            <div className="row d-flex  justify-content-center align-items-center text-dark">
                                <div className="col-12 col-md-7  mb-4">
                                    <input type="text" className="form-control border-0 pb-3 border-bottom" placeholder="userName" />
                                </div>
                                <div className="col-12 col-md-7  mb-4">
                                    <input type="text" className="form-control border-0 pb-3 border-bottom" placeholder="userAge" />
                                </div>
                                <div className="col-12 col-md-7 mb-4">
                                    <input type="email" className="form-control border-0 pb-3 border-bottom" placeholder="userEmail" />
                                </div>
                                <div className="col-12 col-md-7  mb-4">
                                    <input type="password" className="form-control pb-3 border-0 border-bottom" placeholder="userPassword" />
                                </div>
                                <div className="col-12 text-start col-md-7 mb-4">
                                    <button type="submit" style={{ backgroundColor: "#1ABC9C" }} className="btn text-white ">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact