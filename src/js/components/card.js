import PropTypes from "prop-types";

const Card = props => {
	Card.propTypes = {
		pair: PropTypes.string
    };
    
    return (  
        <div className="card">
            <h1>
                {props.pair}
            </h1>
        </div>
    );
}

export default Card;