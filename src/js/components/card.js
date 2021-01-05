import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from "prop-types";
import '../../styles/card.css';
import Back from '../../images/back.jpg';

const Card = forwardRef((props, ref) => {
	Card.propTypes = {
        suit: PropTypes.string,
        onClickBack: PropTypes.func
    };
    
    const [flip, setFlip] = useState(0)

    function handleClickBackSide() {
        setFlip(1);
        onClickBack();
    }

    useImperativeHandle(ref, () => ({
        flipToBackSide() {
            console.log("flipToBackSide");
            setFlip(0);
        }
    }));

    function onClickBack() {
		props.onClickBack(props.suit);
    }
    
    return (  
        <div className="card card-flip m-1 p-0 col-3" onClick={() => handleClickBackSide()} flip={flip}>
            <div className="card-back ">
                <div className="">
                    <img className="" src={Back} alt="card" />
                </div>
            </div>
            <div className="card-front">
                <div className="">
                    <h1>
                        {props.suit}
                    </h1>
                </div>
            </div>
        </div>
    );
});

export default Card;