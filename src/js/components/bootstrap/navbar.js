import '../../../styles/navbar.css';

const Navbar = () => {
    const contactDetails  = (
        <div>
            <div className="" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link">
                        <i className="fas fa-map-marker-alt"></i> <span className="head-text-style"> Zaragoza, Spain</span>
                    </li>
                    <li className="nav-item nav-link">
                        <i className="fas fa-envelope"></i> <span className="head-text-style"> diego.ezquerro@gmail.com</span>
                    </li>
                    <li className="nav-item nav-link">
                        <i className="fas fa-phone"></i> <span className="head-text-style"> +34 625 848 735</span>
                    </li>
                    <li className="nav-item nav-link">
                        <a href="https://www.linkedin.com/in/diegoec/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> <span className="head-text-style"> https://www.linkedin.com/in/diegoec</span></a>
                    </li>
                    <li className="nav-item nav-link">                        
                        <i className="fab fa-skype"></i> <span className="head-text-style"> diego.ezquerro.calvo</span>
                    </li>
                </ul>
            </div>
        </div>
    );

    return ( 
    <nav className="navbar navbar-expand-sm">
        <div className="">
            <h1 className="">Diego Ezquerro Calvo</h1>
            <h3 className="">Junior Fullstack Developer</h3>
            <div className="head-text-style">{contactDetails}</div>
            <h5 className="">Flip the cards two by two and for each pair you match you will unlock a part of my CV</h5>
        </div>
    </nav> );
}

export default Navbar;
