const Navbar = () => {
    const contactDetails  = (
        <div>
            
            <a href="https://www.linkedin.com/in/diegoec/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> 
            </a>{" "}
            email: diego.ezquerro@gmail.com
            Phone: +34 625 848 735
            Skype: diego.ezquerro.calvo
            Lugar: Zaragoza, Spain
            <i class="fas fa-envelope"></i>
            <i className="fas fa-map-marker-alt"></i>
            <i class="fas fa-phone"></i>
            <i className="fab fa-skype"></i>
        </div>
    );

    return ( 
    <nav className="navbar d-flex justify-content-center">
        <div className="">
            <h1 className="">Diego Ezquerro Calvo</h1>
            <h3 className="">Junior Fullstack Developer</h3>
            <h5>{contactDetails}</h5>
            <h5 className="">Flip the cards two by two and for each pair you match you will unlock a part of my CV</h5>
            <p>
			Made with <i className="fas fa-laptop-code" /> by{" "}
			<a href="https://www.linkedin.com/in/diegoec/" target="_blank" rel="noopener noreferrer">
				Diego Ezquerro
			</a>{" "}
			<i className="far fa-smile-beam" />
		</p>        </div>
    </nav> );
}

export default Navbar;
