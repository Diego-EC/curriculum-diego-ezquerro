import '../../../styles/navbar.css';

const Navbar = () => {
    const contactDetails  = (
        <div>
            <div className="" id="">
                <ul className="list-group list-group-horizontal list-unstyled">
                    <li className="list-group-item border-0">
                        <i className="fas fa-map-marker-alt highlighted-text"></i> <span className="head-text-style highlighted-text"> Zaragoza, Spain</span>
                    </li>
                    <li className="list-group-item border-0">
                        <i className="fas fa-envelope highlighted-text"></i> <span className="head-text-style highlighted-text"> diego.ezquerro@gmail.com</span>
                    </li>
                    <li className="list-group-item border-0">
                        <i className="fas fa-phone highlighted-text"></i> <span className="head-text-style highlighted-text"> +34 625 848 735</span>
                    </li>
                    <li className="list-group-item border-0">
                        <a href="https://www.linkedin.com/in/diegoec/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin highlighted-text"></i> <span className="head-text-style highlighted-text"> https://www.linkedin.com/in/diegoec</span></a>
                    </li>
                    <li className="list-group-item border-0">                        
                        <i className="fab fa-skype highlighted-text"></i> <span className="head-text-style highlighted-text"> diego.ezquerro.calvo</span>
                    </li>
                </ul>
            </div>
        </div>
    );

    const conatctAgain  = (
        <div>
            <div className="d-flex justify-content-center navbar-text">
                
                    <div className="mx-3">
                        <i className="fas fa-map-marker-alt highlighted-text"></i> <span className="head-text-style highlighted-text"> Zaragoza, Spain</span>
                    </div>
                    <div className="mx-3">
                        <i className="fas fa-envelope highlighted-text"></i> <span className="head-text-style highlighted-text"> diego.ezquerro@gmail.com</span>
                    </div>
                    <div className="mx-3">
                        <i className="fas fa-phone highlighted-text"></i> <span className="head-text-style highlighted-text"> +34 625 848 735</span>
                    </div>
                    <div className="mx-3">
                        <a href="https://www.linkedin.com/in/diegoec/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin highlighted-text"></i> <span className="head-text-style highlighted-text"> https://www.linkedin.com/in/diegoec</span></a>
                    </div>
                    <div className="mx-3">
                        <i className="fab fa-skype highlighted-text"></i> <span className="head-text-style highlighted-text"> diego.ezquerro.calvo</span>
                    </div>
                
            </div>
        </div>
    );

    return ( 
    <nav className="navbar mb-3 d-flex justify-content-center">
        <div className="d-flex justify-content-center">
            <div className="">
                <p className="mb-0 text-title navbar-text h1 highlighted-text">Diego Ezquerro Calvo</p>
                <p className="pt-0 text-subtitle navbar-text h3 highlighted-text">Junior Fullstack Developer</p>
                <div className="my-1 d-flex flex-wrap justify-content-center">
                    <div className="mx-1"> <i className="text-contact navbar-text fas fa-map-marker-alt highlighted-text"></i> <span className="text-contact navbar-text head-text-style highlighted-text"> Zaragoza, Spain</span> </div>
                    <div className="mx-1"> <i className="text-contact navbar-text fas fa-envelope highlighted-text"></i> <span className="text-contact navbar-text head-text-style highlighted-text"> diego.ezquerro@gmail.com</span> </div>
                    <div className="mx-1"> <i className="text-contact navbar-text fas fa-phone highlighted-text"></i> <span className="text-contact navbar-text head-text-style highlighted-text"> +34 625 848 735</span> </div>
                    <div className="mx-1"> <a href="https://www.linkedin.com/in/diegoec/" target="_blank" rel="noopener noreferrer"><i className="text-contact navbar-text fab fa-linkedin highlighted-text"></i> <span className="text-contact navbar-text head-text-style highlighted-text"> https://www.linkedin.com/in/diegoec</span></a> </div>
                    <div className="mx-1"> <i className="text-contact navbar-text fab fa-skype highlighted-text"></i> <span className="text-contact navbar-text head-text-style highlighted-text"> diego.ezquerro.calvo</span> </div>
                </div>
                <p className="text-header navbar-text h6 highlighted-text">
                    Flip the cards two by two and for each pair you match you will unlock a part of my CV
                </p>
            </div>
        </div>
    </nav> 
    );
}

export default Navbar;
