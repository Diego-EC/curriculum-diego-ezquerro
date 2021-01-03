import {useState} from 'react'
import PropTypes from "prop-types";
import '../../styles/card.css';

const Card = props => {
	Card.propTypes = {
		pair: PropTypes.string
    };
    
    const [flip, setFlip] = useState(0)

    function lol(){
        setFlip(1);
        console.log(flip);
    }

    return (  
        <div className="card-flip mx-1 col-3" onClick={() => lol()} flip={flip}>
            <div className="card">
                <div>
                    <h1>
                        {props.pair}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Card;