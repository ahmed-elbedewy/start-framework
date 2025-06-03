import logo1 from "../img/avataaars.svg";
import { useEffect } from "react";
function Home() {
   useEffect(() => {
      document.title = "Home";
    }, []);
  return (
   
    <>
      <div className=" home justify-content-center align-items-center d-flex flex-column">
        <div className="home-text text-center">
          <img  src={logo1} alt="pic" width={250} height={250} />
          <h1 className="text-uppercase text-white pt-5">start Framework</h1>
          <div>
            <div className="row d-flex justify-content-center align-items-center text-white">
              <div className="line col-3"></div>
              <p className="text-white m-0 col-2 fa fa-star"></p>
              <div className="line col-3"></div>
            </div>
          </div>
          <h6 className=" pt-3 text-white ">Graphic Artist - Web Designer - Illustrator</h6>
        </div>
      </div>
    </>
  );
}

export default Home;
