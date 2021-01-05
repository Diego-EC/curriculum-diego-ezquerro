import { useState, useRef } from 'react';
import Card from '../components/card';
import soundSuccess from '../../sounds/success.wav';
import soundError from '../../sounds/error.wav';
import Resume from '../components/resume';

const Home = () => {

    const [cards, setCards] = useState([
        {suit: 'profile'},
        {suit: 'profile'},
        {suit: 'experience'},
        {suit: 'experience'},
        {suit: 'education'},
        {suit: 'education'},
        {suit: 'skills'},
        {suit: 'skills'},
        {suit: 'languajes'},
        {suit: 'languajes'},
        {suit: 'soft-skills'},
        {suit: 'soft-skills'}
    ]);
    const [firstClickedSuit, setFirstClickedSuit] = useState("");
    // TODO: el contador tendrá que ir al flux para que también lo usen las cards, 
    // no hay click si ya hay dos cartas giradas.
    const [clickedCardsCounter, setClickedCardsCounter] = useState(0);
    const resumeRef = useRef();
    const cardRef = useRef();

    let success = new Audio(soundSuccess);
    let error = new Audio(soundError);

    const cardsMap = cards.map(function(card, index){
        return(
            <Card key={index}
                suit={card.suit}
                onClickBack={onClickBack}
                ref={cardRef} 
            />
        )
    })

    function onClickBack(clickedSuit) {
        setClickedCardsCounter(clickedCardsCounter + 1);

        if (clickedCardsCounter === 1) {
            // comparar tipos
            if (firstClickedSuit == clickedSuit) {
                success.play();
                resumeRef.current.unlock(clickedSuit);

            } else {
                error.play();
                // volver a dar la vuelta
                cardRef.current.flipToBackSide();
            }
        } else {
            setFirstClickedSuit([clickedSuit]);
        }
    }

    return ( 
        <div className="home">
            <div className="row">
                <div className="col-6">
                    <Resume ref={resumeRef} />
                </div>
                <div className="col-6">
                    <div className="row d-flex justify-content-center">{ cardsMap }</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
/*eslint eqeqeq: "off"*/