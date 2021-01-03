import PropTypes from "prop-types";

const PlayingCard = props => {
	PlayingCard.propTypes = {
		pair: PropTypes.string
    };
    
    return (  
        <div className="playing-card">
            <h1>
                {props.pair}
            </h1>
        </div>
    );
}

export default PlayingCard;