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
        <div className="home container">
            <div className="row">
                <div className="col-md-6 order-md-1 order-sm-2 order-2 mt-5 mt-md-0">
                    <Resume ref={resumeRef} />
                </div>
                <div className="col-md-6 order-md-2 order-sm-1 order-1">
                    <div className="container px-0">
                        <div className="row d-flex justify-content-center">
                            <div className="col-3 px-0"> { cardsMap[0] } </div>
                            <div className="col-3 px-0"> { cardsMap[3] } </div>
                            <div className="col-3 px-0"> { cardsMap[6] } </div>
                            <div className="col-3 px-0"> { cardsMap[9] } </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-3 px-0"> { cardsMap[1] } </div>
                            <div className="col-3 px-0"> { cardsMap[4] } </div>
                            <div className="col-3 px-0"> { cardsMap[7] } </div>
                            <div className="col-3 px-0"> { cardsMap[10] } </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-3 px-0"> { cardsMap[2] } </div>
                            <div className="col-3 px-0"> { cardsMap[5] } </div>
                            <div className="col-3 px-0"> { cardsMap[8] } </div>
                            <div className="col-3 px-0"> { cardsMap[11] } </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
/*eslint eqeqeq: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint react-hooks/exhaustive-deps: "off"*/