import {useState} from 'react'
import PropTypes from "prop-types";
import '../../styles/card.css';
import Back from '../../images/back.jpg';

const Card = props => {
	Card.propTypes = {
		pair: PropTypes.string
    };
    
    const [flip, setFlip] = useState(0)

    return (  
        <div className="card card-flip m-1 p-0 col-3" onClick={() => setFlip(1)} flip={flip}>
            <div className="card-back ">
                <div className="">
                    <img className="" src={Back} alt="card" />
                </div>
            </div>
            <div className="card-front">
                <div className="">
                    <h1>
                        FRONT
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Card;