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
            <div className="d-flex justify-content-center">
                
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
    <nav className="nav mb-3 d-flex justify-content-center">
        <div className="d-flex justify-content-center">
            <div className="">
                <h1 className="highlighted-text">Diego Ezquerro Calvo</h1>
                <h3 className="highlighted-text">Junior Fullstack Developer</h3>
                <div className="head-text-style mb-2">{conatctAgain}</div>
                <h5 className="highlighted-text">Flip the cards two by two and for each pair you match you will unlock a part of my CV</h5>
            </div>
        </div>
    </nav> );
}

export default Navbar;
