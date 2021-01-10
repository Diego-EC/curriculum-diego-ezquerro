import { useState, useRef, useContext, useEffect } from 'react';
import Card from '../components/card';
import soundSuccess from '../../sounds/success.wav';
import soundError from '../../sounds/error.wav';
import Resume from '../components/resume';
import { Context } from '../store/app-context';

const Home = () => {
    const [cards, setCards] = useState([]);
    const resumeRef = useRef();
    const { store, actions } = useContext(Context);
    const success = new Audio(soundSuccess);
    const error = new Audio(soundError);

    useEffect(() => {
        let cardsTemp = actions.getCards();
        shuffleCards(cardsTemp);
        setCards(cardsTemp)
    }, []);

    const cardsMap = cards.map(function(card, index){
        return(
            <Card key={index}
                id={index}
                suit={card.suit}
                flipped={0}
                onClickBack={onClickBack}
            />
        )
    })

    function onClickBack(successfulPairing, suit) {
        if (successfulPairing == true) {
            success.play();
            resumeRef.current.unlock(suit);
        } else {
            error.play();
        }
    }

    // Shuffle Array In place: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffleCards (cards){
        for (var i = cards.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[rand]] = [cards[rand], cards[i]]
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
/*eslint no-unused-vars: "off"*/
/*eslint react-hooks/exhaustive-deps: "off"*/