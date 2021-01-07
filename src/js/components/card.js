import { useState, forwardRef, useImperativeHandle, useContext, useEffect } from 'react'
import PropTypes from "prop-types";
import '../../styles/card.css';
import Back from '../../images/back.jpg';
import { Context } from '../store/app-context';
import soundSuccess from '../../sounds/success.wav';
import soundError from '../../sounds/error.wav';

const Card = forwardRef((props, ref) => {
	Card.propTypes = {
        id: PropTypes.number,
        suit: PropTypes.string,
        flipped: PropTypes.number,
        onClickBack: PropTypes.func
    };
    
    const [flip, setFlip] = useState(0)
    const { store, actions } = useContext(Context);
    const success = new Audio(soundSuccess);
    const error = new Audio(soundError);
    const [notPair, setNotPair] = useState(0)

    useEffect(() => {
        console.log("--> Card > useEffect");
        setTimeout(function () {
            setFlip(0);
        }, 2000);
        //setFlip(0);
        console.log(store.limpiar);
        
        },[store.limpiar]);

    function handleClickBackSide(e) {
        let clickedCardsCounter = actions.getClickedCardsCounter();
        clickedCardsCounter++;
        actions.setClickedCardsCounter(clickedCardsCounter);
        addCardToArray();

        if (clickedCardsCounter <= 2) {
            setFlip(1);
            if (clickedCardsCounter == 2) {
                conpareCards();
            }
        }else{
            /*setFlip(1);
            setTimeout(function () {
                setFlip(0);
            }, 2000);*/
        }
    }

    useImperativeHandle(ref, () => ({
        flipToBackSide() {
            
            setFlip(0);
        }
    }));

    function onClickBack() {
		props.onClickBack(props.suit);
    }
    
    function addCardToArray() {
        console.log("addCardToArray");
        console.log("props.id " + props.id);
        const card = {id: props.id, suit: props.suit, flipped: 1};
        actions.addClickedCard(card);
        console.log(actions.getClickedCards());
    }

    function conpareCards() {
        const clickedCards = actions.getClickedCards();
        if (clickedCards[0].suit == clickedCards[1].suit) {
            success.play();
            //resumeRef.current.unlock(clickedSuit);
        } else {
            error.play();
            setNotPair(1);
            // volver a dar la vuelta: resetFlippedCards
            //resetFlippedCards();
            actions.setLimpiar(1);
        }
    }

    function resetFlippedCards() {
        console.log("resetFlippedCards");
        const clickedCards = actions.getClickedCards();
        const cards = actions.getCards();
        console.log(cards);
        const cardsMap = cards.map(function(card){
            if(card.id == clickedCards[0].id){
                card.flipped = 0;
            }
            return card;
          });
        console.log(cardsMap);
    }

    return (  
        <div className="card card-flip m-1 p-0 col-3" onClick={(e) => handleClickBackSide(e)} flip={flip}>
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