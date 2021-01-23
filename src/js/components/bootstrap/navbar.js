import '../../../styles/navbar.css';

const Navbar = () => {
    return ( 
    <nav className="navbar mb-3 d-flex justify-content-center">
        <div className="d-flex justify-content-center">
            <div className="px-1">
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
