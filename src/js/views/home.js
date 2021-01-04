import { useState } from 'react';
import Card from '../components/card';
import soundSuccess from '../../sounds/success.wav';
import soundError from '../../sounds/error.wav';

const Home = () => {

    const [cards, setCards] = useState([
        {suit: 'formacion'},
        {suit: 'experiencia'},
        {suit: 'formacion'},
        {suit: 'experiencia'},
        {suit: 'skills'},
        {suit: 'skills'},
        {suit: 'soft-skills'},
        {suit: 'soft-skills'},
        {suit: 'idiomas'},
        {suit: 'idiomas'},
        {suit: 'presentación'},
        {suit: 'presentación'}
    ]);
    const [firstClickedSuit, setFirstClickedSuit] = useState("");
    // TODO: el contador tendrá que ir al flux para que también lo usen las cards, 
    // no hay click si ya hay dos cartas giradas.
    const [clickedCardsCounter, setClickedCardsCounter] = useState(0);

    let success = new Audio(soundSuccess);
    let error = new Audio(soundError);

    const cardsMap = cards.map(function(card, index){
        return(
            <Card key={index}
                suit={card.suit}
                onClickBack={onClickBack}
            />
        )
    })

    function onClickBack(clickedSuit) {
        setClickedCardsCounter(clickedCardsCounter + 1);

        if (clickedCardsCounter === 1) {
            // comparar tipos
            if (firstClickedSuit == clickedSuit) {
                success.play();
            } else {
                error.play();
            }
        } else {
            setFirstClickedSuit([clickedSuit]);
        }
    }

    return ( 
        <div className="home">
            <div className="row mx-1 d-flex justify-content-center">{ cardsMap }</div>
        </div>
    );
}

export default Home;
/*eslint eqeqeq: "off"*/