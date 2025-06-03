import React from 'react';

function Footer() {
    return (
        <>
            <footer className="py-5 bg position-relative w-100 bottom-0 " >
                <div className="row p-4 text-white w-100 justify-content-center mb-4 align-items-center text-center">
                    <div className="col-12 col-md-4 pb-md-0 pb-3">
                        <h3 className="text-uppercase">Location</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-12 col-md-4 pb-md-0 pb-3">
                        <h3 className="text-uppercase pt-0 mt-0 ">Around the Web</h3>
                        <div className="d-flex justify-content-center gap-3">
                            <i className="fab fa-facebook p-2 fs-2"></i>
                            <i className="fab fa-twitter p-2 fs-2"></i>
                            <i className="fab fa-linkedin p-2 fs-2"></i>
                            <i className="fab fa-reddit p-2 fs-2"></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 pb-md-0 pb-3">
                        <h3 className="text-uppercase">About Freelancer</h3>
                        <p>Freelance is a free to use, open source Bootstrap theme created by Start Bootstrap.</p>
                    </div>
                </div>
            </footer>
            <div className="bg-dark text-white p-3 text-center position-relative w-100 bottom-0" style={{ left: 0, right: 0 }}>Copyright © Your Website 2021</div>
        </>
    );
}

export default Footer;