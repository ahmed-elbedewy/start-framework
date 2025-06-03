import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Portfolio() {
    
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (imgSrc) => {
        setCurrentImage(imgSrc);
        setShow(true);
    };

    const portfolioItems = [
        { img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png" },
        { img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png" },
        { img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png" },
        { img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png" },
        { img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" },
        { img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" }
    ];

    useEffect(() => {
          document.title = "Portfolio";
        }, []);

    return (
        
        <>
            <div className="justify-content-center align-items-center d-flex flex-column">
                <div className="home-text container text-center">
                    <h1 className="text-uppercase fw-bold text-dark pt-3">portfolio component</h1>
                    <div className="mb-5">
                        <div className="row d-flex justify-content-center align-items-center text-dark">
                            <div className="line2 col-2 col-md-1"></div>
                            <p className="text-dark m-0 p-0 col-1 fa fa-star"></p>
                            <div className="line2 col-2 col-md-1"></div>
                        </div>
                    </div>
                    <div className="row g-5 mb-5">
                        {portfolioItems.map((item, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div
                                    className="img-overlay-container rounded-4 overflow-hidden position-relative"
                                    onClick={() => handleShow(item.img)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img
                                        className="w-100"
                                        src={item.img}
                                        alt={`portfolio item ${index}`}
                                    />
                                    <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                                        <i className="fa-solid fa-6x text-white fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} centered size="md">
                <Modal.Body className="p-0">
                    <img
                        src={currentImage}
                        alt="modal-img"
                        className="w-100"
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Portfolio;