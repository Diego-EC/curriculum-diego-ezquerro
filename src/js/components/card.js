import { useState, useContext, useEffect } from 'react'
import PropTypes from "prop-types";
import '../../styles/card.css';
//import Back from '../../images/back.png';
//import experience from '../../images/experience.png';
import { Context } from '../store/app-context';

const Card = (props) => {
	Card.propTypes = {
        id: PropTypes.number,
        suit: PropTypes.string,
        flipped: PropTypes.number,
        onClickBack: PropTypes.func
    };
    
    const [ flip, setFlip ] = useState(0);
    const [ unlocked, setUnlocked ] = useState(false);
    const { store, actions } = useContext(Context);
    const TIMEOUT = 1500;

    useEffect(() => {
        checkUnpairedFlippedCards();
    },[store.resetUnpairedFlippedCards]);
    
    function handleClickBackSide() {
        if (unlocked == false) {
            let clickedCardsCounter = actions.getClickedCardsCounter();
            clickedCardsCounter++;
            addClickedCardToArray();
            
            if (clickedCardsCounter <= 2) {
                setUnlocked(true);
                setFlip(1);
                if (clickedCardsCounter == 2) {
                    conpareCards();
                }
            }
        }
    }

    function addClickedCardToArray() {
        const card = { id: props.id, suit: props.suit };
        actions.addClickedCard(card);
    }

    function conpareCards() {
        const clickedCards = actions.getClickedCards();
        if (clickedCards[0].suit == clickedCards[1].suit) {
            onClickBack(true);
        } else {
            onClickBack(false);
            actions.setResetUnpairedFlippedCards(true);
        }
        setTimeout(function () {
            actions.cleanClickedCards();
        }, TIMEOUT);
    }

    function checkUnpairedFlippedCards() {
        const cards = actions.getClickedCards();
        for (let card of cards) {
            if(card.id == props.id){
                setTimeout(function () {
                    setFlip(0);
                    setUnlocked(false);
                }, TIMEOUT);
            }
        }
        actions.setResetUnpairedFlippedCards(false);
    }

    function onClickBack(successfulPairing) {
		props.onClickBack(successfulPairing, props.suit);
    }
    
    return (  
        <div className="card card-flip m-1 p-0 col-3" onClick={() => handleClickBackSide()} flip={flip}>
            <div className="card-back ">
                <div className="">
                    <img className="" src={"images/back.png"} alt="card" />
                    
                </div>
            </div>
            <div className="card-front">
                <div className="">
                    
                        <img className="" src={"images/" + props.suit + ".png"} alt="card" />
                    
                </div>
            </div>
        </div>
    );
};

export default Card;
/*eslint eqeqeq: "off"*/
/*eslint react-hooks/exhaustive-deps: "off"*/